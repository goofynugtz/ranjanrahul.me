const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Article = require('./blog/models/articles');

const helmet = require('helmet');
app.use(helmet.hidePoweredBy());

mongoose.connect('mongodb://localhost/personalBlog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.use(express.static('frontend'));
//app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.get('/', async (req, res, next) => {
    const articles = await Article.find().sort({createdAt: 'desc'});
    res.render('homepage', {articles: articles});
})

app.get('/blog', async (req, res, next) => {
    res.render('blog');
})

app.listen(3000);