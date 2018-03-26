const Express = require('express');
const arrayApiRest = require('array-api-rest');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = Express();

var data = [];

app.use(cors());
app.use(arrayApiRest(data, {
	ID : 'id',
	prefix : '',
	sufix : '',
	logRequest : true,
	restName : 'clientes'
}));

app.listen(port,() => console.log(`Server listening on port ${port}...`));