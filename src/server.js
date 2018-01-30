/* eslint-disable no-console */
const ENV = require('./config/Env.js');
//
const express = require('express');
const app = express();
//
const bp = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use(express.json());
app.use(cors());

require('./routes.js')(app);


app.listen(ENV.port, (err, port) => {
	if (!err) {
		console.log('WE ROLLING! on: ', ENV.domain , ' port:' , ENV.port)
	}
});
