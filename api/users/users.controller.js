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

	async create(req, res, next) {
		try {
			const user = await usersServices.create(req.body);
			user.password = undefined;
			res.status(201).json(user);
		} catch (error) {
			next(error);
		}
	}

	async update(req, res, next) {
		try {
			const id = req.params.id;
			const data = req.body;
			const userModified = await usersServices.update(id, data);
			userModified.password = undefined;
			res.json(userModified);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new UsersController();