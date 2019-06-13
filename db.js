let mongoose = require('mongoose');

let env = process.env.NODE_ENV || 'development'
let dbUrl = 'mongodb://127.0.0.1:20811/jdcx'
// 开发环境连接测试使用的 MongoDB 服务器
if (env === 'development') {
    dbUrl = 'mongodb://127.0.0.1/jdcx'
}

mongoose.connect(dbUrl, { useNewUrlParser: true })

mongoose.connect('mongodb://localhost:27017/jdcx', { useNewUrlParser: true });  //连接数据库

const articleSchema = new mongoose.Schema({  //schema
    name: String,
    number: String,
    time: Number
})

module.exports = mongoose.model('jdcx', articleSchema);  // model