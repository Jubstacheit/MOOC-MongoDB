const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const userSchema = Schema({
	name: String,
	password: {
		type: String,
		required: [true, "password required"],
		minlength: 8,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: isEmail,
			message: (props) => `${props.value} is not a valid email !`,
		}
	},
	date: {
		type: Date,
		default: Date.now,
	},
	role: {
		type: String,
		default: "user",
		enum: {
			values: ["user", "admin"],
			message: "{VALUE} is not supported",
		},
	},
});

module.exports = model("User", userSchema);