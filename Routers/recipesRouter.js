import express from "express";
import { createRecipes, getAllRecipes, getRecipeById, updateRecipes, deleteRecipes } from "../Controllers/recipesController.js"; // Renamed `getProductById` to `getRecipeById`

const router = express.Router();

// Use more RESTful route naming
router.post("/recipes", createRecipes);         // Create a recipe
router.get("/recipes", getAllRecipes);          // Get all recipes
router.get("/recipes/:id", getRecipeById);      // Get recipe by ID (renamed)
router.put("/recipes/:id", updateRecipes);      // Update recipe by ID
router.delete("/recipes/:id", deleteRecipes);   // Delete recipe by ID

export default router;