import Recipes from "../Models/recipesSchema.js";

// Create recipes method
export const createRecipes = async (req, res) => {
  try {
    const recipe = new Recipes(req.body);
    await recipe.save();
    res.status(200).json({ message: "Recipes Created Successfully", data: recipe });
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error in create Recipes",
      data: error,
    });
  }
};

// Get all Recipes method
export const getAllRecipes = async (req, res) => {
  try {
    const getRecipes = await Recipes.find();
    res.status(200).json({ message: "Recipes retrieved successfully", data: getRecipes });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Recipe by id method
export const getRecipeById = async (req, res) => {
  try {
    const RecipesId = req.params.id;
    const recipe = await Recipes.findById(RecipesId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }
    res.status(200).json({ message: "Recipe retrieved successfully", data: recipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Recipe method
export const updateRecipes = async (req, res) => {
  try {
    const RecipesId = req.params.id;
    const { Racipename, Procedure, Ingredients, Duration } = req.body;
    const result = await Recipes.findByIdAndUpdate(
      { _id: RecipesId },
      { Racipename, Procedure, Ingredients, Duration },
      { new: true }
    );
    if (!result) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }
    res.status(200).json({ message: "Recipe Updated", data: result });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Recipe method
export const deleteRecipes = async (req, res) => {
  try {
    const RecipesId = req.params.id;
    const result = await Recipes.findByIdAndDelete({ _id: RecipesId });
    if (!result) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }
    res.status(200).json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
