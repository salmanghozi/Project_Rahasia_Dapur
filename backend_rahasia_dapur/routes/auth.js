const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, phone, email, password } = req.body;

        // Check if user exists (by phone or email)
        let query = { $or: [{ phone }] };
        if (email) query.$or.push({ email });

        let user = await User.findOne(query);
        if (user) {
            return res.status(400).json({ message: 'User already exists (Phone or Email used)' });
        }

        user = new User({ firstName, lastName, phone, email, password });
        await user.save();

        // Create token
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

        res.status(201).json({
            token,
            user: {
                id: user.id,
                firstName,
                lastName,
                phone,
                email
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        console.log('Login attempt:', req.body);
        const { identifier, password } = req.body; // identifier can be email or phone

        if (!identifier || !password) {
            console.log('Missing identifier or password');
            return res.status(400).json({ message: 'Missing identifier or password' });
        }

        // Check user by email OR phone
        const user = await User.findOne({
            $or: [
                { email: identifier },
                { phone: identifier }
            ]
        });

        if (!user) {
            console.log('User not found for identifier:', identifier);
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        console.log('User found:', user.email);

        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            console.log('Password mismatch for user:', user.email);
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        console.log('Login successful');

        // Create token
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

        res.json({
            token,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login error:', error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
