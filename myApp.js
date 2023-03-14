let express = require('express');
let app = express();

viewsPath = __dirname + '/views/index.html'
app.get('/', function(req, res) {
    res.sendFile(viewsPath);
});

publicPath = __dirname + '/public';
app.use('/public', express.static(publicPath));

app.get('/json', function(req, res) {
    res.json({"message": "Hello json"});
});

app.listen(3001, function() {
    console.log("Listening on 3001.");
});






















 module.exports = app;
