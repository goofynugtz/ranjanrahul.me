const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Article = require('./blog/models/articles');

const helmet = require('helmet');
app.use(helmet.hidePoweredBy());

mongoose.connect('mongodb+srv://goofyN:4321@clusterzero.gvtuu.mongodb.net/blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});

app.use(express.static(__dirname + '/frontend'));
//app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.get('/', async (req, res, next) => {
    const articles = await Article.find().sort({createdAt: 'desc'});
    // console.log(articles);
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
console.log("App active on port:3000")