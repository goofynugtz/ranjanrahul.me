const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Article = require('./blog/models/articles');

const helmet = require('helmet');
app.use(helmet.hidePoweredBy());

mongoose.connect('mongodb+srv://goofy:8292757339@cluster0.gvtuu.mongodb.net/personalBlog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});
    console.log("mong triggered! Refresh now");

app.use(express.static(__dirname + '/frontend'));
//app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.get('/', async (req, res, next) => {
    const articles = await Article.find().sort({createdAt: 'desc'});
    console.log(articles);
    res.render('homepage', {articles: articles});
});

app.get('/blog/:slug', async (req, res) => {
    const articles = await Article.findOne({slug: req.params.slug });
    console.log("Read More clicked... Parameters: ", req.params);
    if (articles == null) res.redirect('/');
    res.render('_blog-post', { articles: articles});
});

app.get('/blog', (req, res, next) => {
    console.log("triggered");
    res.render('_blog_index');
});

app.listen(3000);