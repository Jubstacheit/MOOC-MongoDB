class NotFoundError extends Error {
	status = 404;
	constructor(message = 'Not found') {
	super(message);
	}
}

module.exports = NotFoundError;