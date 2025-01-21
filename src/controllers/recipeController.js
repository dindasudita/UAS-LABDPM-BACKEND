const Recipe = require('../models/recipe');

class RecipeController {
    async createRecipe(req, res) {
        const { name, ingredients, steps } = req.body;
        const userId = req.user.id;

        try {
            const newRecipe = new Recipe({
                name,
                ingredients,
                steps,
                userId,
            });
            await newRecipe.save();
            res.status(201).json({ message: 'Recipe created successfully', data: newRecipe });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }

    async getRecipes(req, res) {
        try {
            const recipes = await Recipe.find();
            res.status(200).json({ data: recipes });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }

    async getRecipeById(req, res) {
        const { id } = req.params;
        try {
            const recipe = await Recipe.findById(id);
            if (!recipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            }
            res.status(200).json({ data: recipe });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }

    async updateRecipeById(req, res) {
        const { id } = req.params;
        const { name, ingredients, steps, isFavorite } = req.body;

        try {
            const updatedRecipe = await Recipe.findByIdAndUpdate(
                id,
                { name, ingredients, steps, isFavorite },
                { new: true }
            );
            if (!updatedRecipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            }
            res.status(200).json({ message: 'Recipe updated successfully', data: updatedRecipe });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }

    async deleteRecipeById(req, res) {
        const { id } = req.params;
        try {
            const deletedRecipe = await Recipe.findByIdAndDelete(id);
            if (!deletedRecipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            }
            res.status(200).json({ message: 'Recipe deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }

    async getFavoriteRecipes(req, res) {
        try {
            const userId = req.user.id;
            const favorites = await Recipe.find({ userId, isFavorite: true });
            res.status(200).json({ data: favorites });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }
}

module.exports = new RecipeController();
