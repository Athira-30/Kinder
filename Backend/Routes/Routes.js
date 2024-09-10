import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { addNewPost, addUser, addTeacher, getUser ,getTeacher } from "../Controller/classControler.js"; // Adjust the path if necessary

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

const router = express.Router();

router.post('/add-post', upload.single('postImg'), addNewPost);
router.post('/addUser', addUser);
router.post('/addTeacher', upload.single('teacherImg'), addTeacher);
router.get("/getUser", getUser);
router.get("/getTeacher",getTeacher);



router.get('/login', (req, res) => {
  res.render('Login'); // Make sure 'login' corresponds to the name of your view file, e.g., 'login.ejs'
});
export default router;
