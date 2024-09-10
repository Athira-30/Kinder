import mongoose from "mongoose";

// Define the Post schema
const postSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: true,
    },
    postImg: {
        type: String,
        required: true,
    },
    postDescription: {
        type: String,
        required: true,
    }
});

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate emails
    },
    userClass: {
        type: String,
        required: true,
    }
});
const teacherSchema = new mongoose.Schema({
  imageTitle: {
      type: String,
      required: true,
  },
  designation: {
      type: String,
      required: true,
  },
  teacherImg: {
      type: String,
      required: true,
  }
});

// Export the Mongoose models
const PostSchema = mongoose.model("Post", postSchema);
const UserSchema = mongoose.model("User", userSchema);
const TeacherSchema = mongoose.model("Teacher", teacherSchema);

export { PostSchema, UserSchema, TeacherSchema };

