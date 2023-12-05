const User = require("./users.model");

class userService {
	getAll() {
		return User.find({}, '-password');
	}
	get(id) {
		return User.findById(id);
	}

	create(data) {
		const user = new User(data);
		return user.save();
	}

	update(id, data) {
		return User.findByIdAndUpdate(id, data, {
			new: true
		});
	}
}

module.exports = new userService();