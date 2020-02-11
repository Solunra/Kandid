const express = require('express');
const app = express();
const port = 3000;

require('./database');

const routes = require('./routes/index');

app.get('/', (req, res) => res.send({express:'Web Page Test'}));

app.use('/', routes);

app.listen(port, () => console.log(`Web page started on port ${port}`));
