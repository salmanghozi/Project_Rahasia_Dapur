const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
    imageUrl: { type: String, required: true },
    price: { type: String, required: true }, // e.g. "Modal 25rb"
    time: { type: String, required: true }, // e.g. "45 mnt"
    portion: { type: String, required: false }, // e.g. "12 Pcs"
    difficulty: { type: String, default: "Mudah" },
    category: { type: String, default: "Masakan Rumah" }, // "Ide Jualan", "Masakan Rumah", etc.
    isPromo: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', recipeSchema);
