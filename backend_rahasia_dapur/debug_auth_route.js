const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/rahasia_dapur')
    .then(async () => {
        console.log('Connected to DB');

        // Mimic req.body
        const req = {
            body: {
                identifier: "ibu@pkk.com",
                password: "password123"
            }
        };

        const res = {
            status: function (code) {
                console.log('Response Status:', code);
                return this;
            },
            json: function (data) {
                console.log('Response JSON:', data);
                return this;
            },
            send: function (msg) {
                console.log('Response Send:', msg);
                return this;
            }
        };

        console.log('--- Simulating Login Route ---');
        try {
            console.log('Login attempt:', req.body);
            const { identifier, password } = req.body; // identifier can be email or phone

            if (!identifier || !password) {
                console.log('Missing identifier or password');
                return res.status(400).json({ message: 'Missing identifier or password' });
            }

            // Check user by email OR phone
            console.log('Searching for user with identifier:', identifier);
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
            console.log('User hashed password:', user.password);

            // Check password
            const isMatch = await user.comparePassword(password);
            console.log('Password match result:', isMatch);

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
            console.error('Login error:', error);
        }

        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
