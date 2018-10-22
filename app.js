const mongoose = require('mongoose');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/CheckdIn', { useNewUrlParser: true });

app.listen(3000, () => {
    console.log('Up and Running!');
})