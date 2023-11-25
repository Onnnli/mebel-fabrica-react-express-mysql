import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const DetailsModel = sequelize.define("Details", {
	id_detail: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	details_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	timestamps: false
});

export default DetailsModel;
