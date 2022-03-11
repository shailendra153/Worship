const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const categoryRouter = require('./router/category.router');
const itemRouter = require('./router/item.router');

const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/worshipDemo", () => {
    console.log("Database Connection Stablished")
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));


app.use("/category", categoryRouter);
app.use("/item", itemRouter);




app.listen(3000, () => {
    console.log("Server is Runing");
})