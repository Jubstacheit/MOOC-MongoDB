const User = require("./users.model");

class userService {
	getAll() {
		return User.find({}, '-password');
	}
	get(id) {
		return User.findById(id);
	}
}

module.exports = new userService();