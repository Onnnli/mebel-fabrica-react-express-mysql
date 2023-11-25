import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const RolesModel = sequelize.define("Roles", {
	id_role: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	role_name: {
		type: DataTypes.STRING(45),
		allowNull: false,
	},
}, {
	timestamps: false
});

export default RolesModel;
