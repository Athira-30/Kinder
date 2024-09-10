import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import Router from "./Routes/Routes.js"; // Ensure this path is correct
import path from "path";
import { fileURLToPath } from "url";

// Manually define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../Image')); // Ensure the 'Image' directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());

// Use the router for handling routes
app.use('/', Router);

mongoose.connect('mongodb+srv://athirakv:athira@cluster0.vut69.mongodb.net/Cluster0')
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
  });

app.use('/Image', express.static(path.join(__dirname, '../Image')));

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});


