const express = require('express');
const NotFoundError = require('./errors/not-found');
const cors = require('cors');
const userRouter = require('./api/users/users.router');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

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
	app,
}