const express = require('express');
const app = express();
const port = 8000;

require('./database');

const routes = require('./routes/index');

// TODO remove this once the front end has been implemented
app.get('/', (req, res) => res.send("Web Page Test"));

// This allows all routes to be processed
app.use('/', routes);

// Allows static images to be placed in the /images folder
app.use('/images', express.static(__dirname + '/images'));

app.listen(port, () => console.log(`Web page started on port ${port}`));
