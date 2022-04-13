const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use('/', (req, res)=>{
    console.log('first url')
})

app.listen("5000", () => {
    console.log("Backend is running.");
});