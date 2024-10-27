import mongoose from "mongoose";

const recipesSchema = mongoose.Schema({
  Racipename: String,
  Procedure: String,
  Ingredients: [String],
  Duration: String,
});

const Recipes = mongoose.model("Recipes", recipesSchema);

export default Recipes;
