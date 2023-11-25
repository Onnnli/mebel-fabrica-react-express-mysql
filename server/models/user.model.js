import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const UserModel = sequelize.define("User", {
	id_user: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	id_role: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	}
}, {
	timestamps: false
});

export default UserModel;
