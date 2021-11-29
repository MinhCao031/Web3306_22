const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');

const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

const config = require('./config/config');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const classRoute = require('./routes/classes');
const conversationRoute = require('./routes/conversations');
const messageRoute = require('./routes/messages');
const postRoute = require('./routes/posts');
const commentRoute = require('./routes/comments');

const { db: { host, port, name } } = config;
const dbUrl = `mongodb://${host}:${port}/${name}`;
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};
const sessionOptions = {
    store: MongoStore.create({ mongoUrl: dbUrl }),
    secret: 'testing',
    resave: false,
    saveUninitialized: true
};

mongoose
    .connect(dbUrl, dbOptions)
    .then(() => {
        console.log('Connection openned!');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/classes', classRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);

app.listen(config.app.port, () => {
    console.log(`Server connected on port ${config.app.port}`);
});
