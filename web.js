require('./src/server/env');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {
    authenticateJwt
} = require('./src/server/passport');
const PORT = process.env.PORT || 8001;
require('./src/server/passport');
// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
// app.use(express.static('build'));
app.use(authenticateJwt);

// API
app.use('/api/users/', require('./src/server/api/users'));
app.use('/api/posts/', require('./src/server/api/posts'));

app.listen({
    port: PORT
}, () => {
    console.log(`listening on port ${PORT}!`);
});