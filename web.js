var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
}));
app.use(express.static('build'));


// API
app.use('/api/user/', require('./src/server/api/users'));
app.use('/api/user/', require('./src/server/api/posts'));


app.listen(8001, () => {
    console.log('listening on port 8001!');
});