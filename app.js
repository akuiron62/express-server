const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const host = "localhost";
const port = 3000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');


app.get('/', (req, res) => {
    res.render('index.twig', {title: "Mon site qui tue"});
})

app.get('/blog', (req, res) => {
    let post = axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      console.log(response);
    })
    res.render('posts.twig', post);
})

app.get('/blog/:id', (req, res) => {
    res.render('post.twig');
})

app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
})