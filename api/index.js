const express = require("express");
const res = require("express/lib/response");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { env } = require("process");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(console.log('Connect to MangoDB'));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen("5000", () => {
    console.log("Backend is running.");
});