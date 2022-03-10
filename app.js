const express = require('express');
const bodyParser = require('body-parser');
const pth = require('path');

const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/worshipDemo", () => {
    console.log("Database Connection Stablished")
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));







app.listen(3000, () => {
    console.log("Server is Runing");
})