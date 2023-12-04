const usersServices = require("./users.services");

class UsersController {
	async getAll(req, res, next) {
		try {
			const users = await usersServices.getAll();
			res.json(users);
		} catch (error) {
			next(error);
		}
	}

	async getById(req, res, next) {
		try {
			const id = req.params.id;
			const user = await usersServices.getById(id);
			if (!user) {
				throw new NotFoundError('User not found');
			}
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new UsersController();