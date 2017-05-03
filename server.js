var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var forms = [];
var currentId = 0;

app.get('/', function(req, res) {

});

app.get('/getlist', function(req, res) {
	console.log('forms requested');
	res.send(forms);
});

app.get('/getOneForm/:id', function(req, res) {
	console.log("one form requested");
	var id = req.params.id;
	var form = forms[id];
	res.send(form);
});

app.post('/addform', function(req, res) {
	console.log('adding form (post)');
	var form = req.body;
	form.id = currentId;
	currentId++;
	forms.push(req.body);
	res.send('success');
});

app.put('/acceptForm/:id', function(req, res) {
	console.log('accept form');
	var id = req.params.id;
	forms[id].status = "2";
	res.send(forms[id]);
});

app.put('/denyForm/:id', function(req, res) {
	console.log('deny form');
	var id = req.params.id;
	forms[id].status = "1";
	res.send(forms[id]);
});

var port = Number(process.env.PORT || 3000);

app.listen(port, function() {
	console.log('listening to ' + port);
});