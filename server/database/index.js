const mongoose = require('mongoose');

mongoose.Promise =  global.Promise;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const database = mongoose.connect('mongodb://127.0.0.1:27017/Kandid', options)
    .then(() => console.log('Connected to database.'))
    .catch(err => console.error('Error connecting to database:', err.message));

module.exports = database;
