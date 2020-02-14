const express = require('express');
const bodyParser = require('body-parser');

const item = require('./routes/item.route');
const app = express();
const mongoose = require('mongoose');
let todo_db = 'mongodb://127.0.0.1:27017/todos';
mongoose.connect(todo_db);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todos', item);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
