const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/DBcreditint';
mongoose.connect(url, {useNewUrlParser: true});


module.exports = mongoose;