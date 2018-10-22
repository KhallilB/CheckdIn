//DEPENDENCIES
const mongoose = require('mongoose');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));

//DATABASE
mongoose.connect('mongodb://localhost/CheckdIn', { useNewUrlParser: true });

//ROUTES
require('./controllers/feeds')(app);

module.exports = (app);

app.listen(3000, () => {
    console.log('Up and Running!');
})