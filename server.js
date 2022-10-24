const express = require('express');
const mongoose = require('mongoose');
// const db = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));


// db.once('open', () => {
//     app.listen(PORT, () => {
//         console.log(`API server for ${activity} running on port ${PORT}!`);
//     });
// });
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nosql-project', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Use this to log mongo queries being executed!
mongoose.set('debug', true);