'use strict'
const Express = require('express');
const bodyParser = require('body-parser');
const arrayApiRest = require('array-api-rest');
const cors = require('cors');
const jwt = require('jwt-simple');
const secret = Buffer.from('Esta es mi clave secreta', 'hex');

const port = process.env.PORT || 3000;

const app = Express();

var data = [];

app.use(cors());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
	if (req.url != '/login' && req.headers.authorization) {
		var chunks = req.headers.authorization.split(' ');
		try {
			var decode = jwt.decode(chunks[1], secret);
			next(); 
		} catch(e) {
			res.status(403).json({ message : e }).end();
		}
	} else {
		if (req.url != '/login' && !req.headers.authorization) {
			res.status(403).json({ message : e }).end();	
		} else {
			next();
		}
	}
});

app.use(arrayApiRest(data, {
	ID : 'id',
	prefix : '',
	sufix : '',
	logRequest : true,
	restName : 'clientes'
}));

app.post('/login', (req, res) => {
	if (req.body.username == 'admin' && req.body.password == 'admin') {
		var payload = {
			usuario : req.body.username
		};
		var token = jwt.encode(payload, secret);
		res.json({
			token
		}).end();
	} else {
		res.status(403).json({ message : 'Invalid username or password'});
	}
})

app.listen(port,() => console.log(`Server listening on port ${port}...`));