import mongoose from "mongoose";

import express from "express";
import dotenv from "dotenv";
import connect from "./db/connection.js";
import cors from "cors";
import router from "./routes/auth.js";
const app = express();

//connecting the routes created in auth.js separate file
app.use(express.json());
app.use(cors());

app.use(router); //using the routes created in auth.js file

//environment variables
dotenv.config({ path: "./config.env" }); //linking the.env file where we have stored our private files
const port = process.env.PORT || 3000;

connect();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
