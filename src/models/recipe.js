const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    steps: {
        type: [String],
        required: true,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Recipe', recipeSchema);
