const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Recipe = require('./models/Recipe');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

dotenv.config();

const genres = [
    {
        title: "Risoles Mayo Premium",
        description: "Resep rahasia risoles mayo yang creamy tapi tetap hemat budget. Kulitnya lentur, tidak mudah sobek saat digulung. Sangat cocok untuk dititipkan di kantin atau warung.",
        ingredients: [
            "250gr Terigu",
            "2 Butir Telur",
            "500ml Susu Cair",
            "Tepung Panir",
            "Mayonaise",
            "Smoked Beef / Sosis",
            "Keju Cheddar"
        ],
        instructions: [
            "Campur terigu, telur, dan susu cair. Aduk rata hingga tidak bergerindil.",
            "Buat dadar tipis di teflon.",
            "Isi dengan mayonaise, smoked beef, dan telur rebus.",
            "Lipat seperti amplop, celupkan ke putih telur, lalu gulingkan di tepung panir.",
            "Goreng hingga kuning keemasan."
        ],
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500",
        price: "Modal 25rb",
        time: "45 mnt",
        portion: "12 Pcs",
        difficulty: "Mudah",
        category: "Ide Jualan",
        isPromo: true
    },
    {
        title: "Ayam Geprek Ijo",
        description: "Ayam goreng tepung renyah yang digeprek dengan sambal cabe ijo super pedas dan gurih.",
        ingredients: [
            "1/2 kg Ayam Potong",
            "Tepung Bumbu Serbaguna",
            "15 buah Cabe Rawit Hijau",
            "5 buah Cabe Keriting Hijau",
            "3 siung Bawang Putih",
            "Minyak panas bekas goreng ayam"
        ],
        instructions: [
            "Marinasi ayam dengan jeruk nipis dan garam.",
            "Balur ayam dengan tepung bumbu, goreng hingga krispi.",
            "Ulek kasar cabe hijau, bawang putih, garam, dan penyedap.",
            "Siram sambal dengan minyak panas bekas menggoreng ayam.",
            "Geprek ayam di atas cobek bersama sambal."
        ],
        imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500",
        price: "Pedas Nampol",
        time: "60 mnt",
        portion: "4 Porsi",
        difficulty: "Sedang",
        category: "Masakan Rumah"
    },
    {
        title: "Salad Buah Segar",
        description: "Salad buah segar dengan dressing creamy yang pas, tidak bikin eneg. Cocok untuk dessert sehat.",
        ingredients: [
            "Apel, Anggur, Melon, Semangka",
            "Jelly / Nata de Coco",
            "Mayonaise",
            "Yoghurt Plain",
            "Susu Kental Manis",
            "Keju Parut"
        ],
        instructions: [
            "Potong dadu semua buah-buahan.",
            "Campurkan mayonaise, yoghurt, dan SKM untuk dressing.",
            "Tuang dressing ke atas buah, aduk rata.",
            "Taburi dengan keju parut melimpah."
        ],
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        price: "Modal 15rb",
        time: "15 mnt",
        portion: "2 Cup",
        difficulty: "Mudah",
        category: "Dessert"
    },
    {
        title: "Bolu Kukus Mekar",
        description: "Bolu kukus mekar anti gagal tanpa soda. Teksturnya lembut dan empuk.",
        ingredients: [
            "200gr Tepung Terigu",
            "200gr Gula Pasir",
            "2 butir Telur",
            "125ml Susu Cair / Santan",
            "1 sdt SP"
        ],
        instructions: [
            "Mixer semua bahan jadi satu (metode all in one) selama 10 menit dengan kecepatan tinggi hingga kental berjejak.",
            "Bagi adonan, beri pewarna makanan sesuai selera.",
            "Tuang ke cetakan bolu kukus yang sudah dialasi cup kertas.",
            "Kukus dengan api besar selama 15 menit. Jangan buka tutup kukusan."
        ],
        imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
        price: "Anti Gagal",
        time: "30 mnt",
        portion: "15 Pcs",
        difficulty: "Sedang",
        category: "Ide Jualan"
    }
];


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/rahasia_dapur')

    .then(async () => {
        console.log('MongoDB Connected for Seeding');

        // Clear existing data
        await Recipe.deleteMany({});
        await User.deleteMany({});
        console.log('Data cleared');

        // Create default user
        const newUser = new User({
            firstName: "Bunda",
            lastName: "Nurul",
            phone: "081234567890",
            email: "ibu@pkk.com",
            password: "password123"
        });

        await newUser.save();
        console.log('Default user created: ibu@pkk.com / password123');

        // Insert recipes
        await Recipe.insertMany(genres);
        console.log('Recipes seeded');

        process.exit();
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
