const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = process.env.port || 8000;
const bodyParser = require('body-parser');

require('./database');
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
const routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This allows all routes to be processed
app.use('/', routes);

// Allows static images to be placed in the /images folder
app.use('/images', express.static('server/routes/images'));

// Allows file upload
app.use(fileUpload());

app.listen(port, () => console.log(`Web page started on port ${port}`));

module.exports = app;
