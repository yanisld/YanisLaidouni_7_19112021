const express = require('express');
const cookieParser = require('cookie-parser');
const database = require('./config/database');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();
app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

module.exports = app;