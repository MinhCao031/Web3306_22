const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const session = require('express-session');

const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/uet-smta-local';

mongoose
    .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connection openned!');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const sessionConfig = {
    name: 'session',
    secret: 'testing',
    resave: false,
    saveUninitialized: true
};

app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/homepage', (req, res) => {
    res.render('homepage');
});

app.use((req, res) => {
    res.send('Not found');
});

app.listen(8080, () => {
    console.log('Listening at port 3000');
});
