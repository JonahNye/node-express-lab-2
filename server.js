"use strict";
const express = require("express");
const app = express(); //create instance of express or app?
const port = 3000;
const routes = require("./routes/routes.js");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", routes);

app.listen(port, _ => 
    console.log('Server is running on port: 3000') //test
);