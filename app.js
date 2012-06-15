var connect = require('connect');
var app = connect();

app.use(connect.static(__dirname + '/public'));
app.use(function (req, res) {
    if (req.method == "POST") { // echo the body
        req.on('data', function (data) { res.write(data); });
        req.on('end', function () { setTimeout(function () { res.end(); }, Math.floor(Math.random() * 100)); });
    } else {
        res.end("hi"); // end the request for non-POST requests
    }
});

app.listen(3000);
console.log("listening on http://localhost:3000");