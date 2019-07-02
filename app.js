const express = require('express');
const bodyParser = require('body-parser');
const _ = require('underscore');
const app = express();

let port = 5555;

app.use(bodyParser.raw({
    inflate: true,
    limit: '100kb',
    type: '*/*'
}));

app.use(function (req, res, next) {

    let data = {
        method: req.method,
        url: req.url,
        path: req.path,
        query: req.query,
        headers: req.headers,
        body: _.isEmpty(req.body) ? "" : req.body.toString()
    }

    res.send(data);

});

app.listen(port, function () {
    console.log('EchoServer listening on port', port);
});