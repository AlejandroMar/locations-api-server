require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Mount routes
const locationsRoute = require('./routes/locationsRoute');

// APP
const app = express();
// view engine
app.set('view engine', 'pug');

// middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect(
    process.env.MONGO_DB_URL,
    { useNewUrlParser: true }
)
    .then(() => debug(chalk.blue('MongoDB Connected')))
    .catch(err => debug(err));


// Use routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.use('/api/locations', locationsRoute);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    debug(`listening on port ${chalk.yellow(PORT)}`);
});
