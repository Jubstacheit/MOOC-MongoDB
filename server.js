const express = require('express');
const NotFoundError = require('./errors/not-found');
const app = express();
const cors = require('cors');

app.use(cors());

app.use((req, res, next) => {
	next(new NotFoundError());
});

app.use((error, req, res, next) => {
	const status = error.status || 500;
	const message = error.message || 'Internal server error';
	res.status(status)
	res.json({
		status,
		message
	})
	});

module.exports = {
	app
}