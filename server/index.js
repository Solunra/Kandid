const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Web Page Test"));

app.listen(port, () => console.log(`Web page started on port ${port}`));