const express = require('express');
const RecipeController = require('../controllers/recipeController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, RecipeController.createRecipe);
router.get('/', RecipeController.getRecipes);
router.get('/:id', RecipeController.getRecipeById);
router.put('/:id', authMiddleware, RecipeController.updateRecipeById);
router.delete('/:id', authMiddleware, RecipeController.deleteRecipeById);
router.get('/favorites', authMiddleware, RecipeController.getFavoriteRecipes);

module.exports = router;
