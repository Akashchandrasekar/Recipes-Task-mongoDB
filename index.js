import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import recipesRouter from "./Routers/recipesRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB(); 

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to our API" });
});


app.use("/api/recipes", recipesRouter); 

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started and running on port ${port}`); // Include port number in the log message
});
