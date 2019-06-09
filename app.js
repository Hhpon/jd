let express = require('express')
let bodyParser = require('body-parser');
let Article = require('./db');

let app = express()

app.use(express.static('pubilc'));
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});

app.post('/sendArticle', function (req, res) {  // 新建的路由，以及此路由实现的功能
    Article.create({
        name: req.body.name,
        number: req.body.number,
        time: req.body.setTime
    }, (err, doc) => {
        if (err) {
            res.end('no')
        } else {
            res.end('ok');
        }
    });

})

app.get('/getArticle', function (req, res) {  // 新建的路由，以及此路由实现的功能
    Article.find({ number: req.query.number }, (err, doc) => {
        res.json(doc)
    });
})

app.get('/getArticle1', function (req, res) {  // 新建的路由，以及此路由实现的功能
    Article.find({}, (err, doc) => {
        res.json(doc)
    });
})

app.post('/delete', function (req, res) {  // 新建的路由，以及此路由实现的功能
    Article.findOneAndDelete({
        _id: req.body.id
    }, (err, doc) => {
        Article.find({}, (err, doc) => {
            res.json(doc)
        });
    });
})



app.listen(3011, function () { console.log('服务器正在监听 3011 端口') });