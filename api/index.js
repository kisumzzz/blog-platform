const express = require("express");
const res = require("express/lib/response");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { env } = require("process");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const cateRoute = require("./routes/categories");
const multer = require("multer");


dotenv.config(); 
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(console.log('Connect to MangoDB'));

// middleware of files upload api
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,"images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});
const upload = multer({ storage:storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded successfully.");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/category", cateRoute);

app.listen("5000", () => {
    console.log("Backend is running.");
});