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
app.use('/api/user/', require('./src/server/api/user'));
app.use('/api/post/', require('./src/server/api/post'));

app.listen({
    port: PORT
}, () => {
    console.log(`listening on port ${PORT}!`);
});