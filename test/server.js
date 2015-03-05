var express = require('express');
var app = express();

app.get('/jsonp', function(req, res){ res.jsonp({ user: 'tobi' }); });
app.get('/get', function(req, res){ res.jsonp({ user: 'tobi' }); });
app.post('/post', function(req, res){ res.jsonp({ user: 'tobi' }); });

app.use(express.static('test'));
app.use(express.static('build'));

app.listen(3000);