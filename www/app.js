const { app } = require('../server');
const config = require('../config');
const mongoose = require('mongoose');

mongoose.connect(config.mongoUri)

const db = mongoose.connection;

db.on('error', (err) => {
	console.log(e)
});

db.on("open", () => {
	console.log(`MongoDB connected on ${config.mongoUri}`)
});

app.listen(config.port, () => {
	console.log(`Server listening on port ${config.port}`);
});