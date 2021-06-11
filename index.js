const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');


const multer = require('multer');
const bodyParser = require('body-parser');


const app = express();


const url = "mongodb+srv://Sherif:rAzCmDang1ZCsYnc@cluster0.qwr9u.mongodb.net/course-app-api?retryWrites=true&w=majority";


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
})


const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
