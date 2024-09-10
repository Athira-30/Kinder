import { PostSchema, UserSchema, TeacherSchema } from "../Model/model.js"; // Import all models

// Controller function to add a new post
export const addNewPost = async (req, res) => {
    const { postTitle, postDescription } = req.body; // Destructure body parameters
    try {
        const newPost = new PostSchema({
            postTitle,
            postImg: req.file ? req.file.path : "",  // Ensure file path is provided or handle undefined
            postDescription,
        });

        await newPost.save();
        res.status(201).json({ message: "New Post Data Saved Successfully", data: newPost });
    } catch (error) {
        console.error("Error saving the new post: ", error);
        res.status(500).send("Error Saving Data: " + error.message);
    }
};

// Controller function to add a new user
export const addUser = async (req, res) => {
    console.log('addUser route hit'); // Debug statement
    const { username, email, userClass } = req.body;

    try {
        const newUser = new UserSchema({ username, email, userClass });
        await newUser.save();
        res.status(201).json({ message: "User added successfully", data: newUser });
    } catch (error) {
        console.error("Error adding user: ", error);
        res.status(500).send("Error Adding User: " + error.message);
    }
};


// Controller function to add a new teacher
export const addTeacher = async (req, res) => {
    const { imageTitle, designation } = req.body; // Extract data from the request body

    try {
        const newTeacher = new TeacherSchema({
            imageTitle,
            designation,
            teacherImg: req.file ? req.file.path : "",  // Ensure file path is provided or handle undefined
        });

        await newTeacher.save();
        res.status(201).json({ message: "Teacher added successfully", data: newTeacher });
    } catch (error) {
        console.error("Error adding teacher: ", error);
        res.status(500).send("Error Adding Teacher: " + error.message);
    }
};

export const getUser = async (req, res) => {
    try {
        const users = await UserSchema.find({}); // Use UserSchema here
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching user data: ", error);
        res.status(500).json({ message: 'Error fetching user data', error });
    }
};
export const getTeacher = async (req, res) => {
    try {
        const teachers = await  TeacherSchema.find({}); // Fetch all teacher documents
        res.status(200).json(teachers);
    } catch (error) {
        console.error("Error fetching teacher data: ", error);
        res.status(500).json({ message: 'Error fetching teacher data', error });
    }
}
