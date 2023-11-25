import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const StatusModel = sequelize.define("Status", {
	id_status: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	status_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	timestamps: false
});

export default StatusModel;
