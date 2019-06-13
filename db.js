let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jdcx', { useNewUrlParser: true });  //连接数据库

const articleSchema = new mongoose.Schema({  //schema
    name: String,
    number: String,
    time: Number
})

module.exports = mongoose.model('jdcx', articleSchema);  // model