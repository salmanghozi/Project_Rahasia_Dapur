const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/rahasia_dapur')
    .then(async () => {
        console.log('Connected to DB');

        const users = await User.find({});
        console.log('Total users:', users.length);
        users.forEach(u => {
            console.log(`- ${u.firstName} ${u.lastName} | Email: ${u.email} | Phone: ${u.phone} | Password: ${u.password.substring(0, 10)}...`);
        });

        const email = 'ibu@pkk.com';

        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
