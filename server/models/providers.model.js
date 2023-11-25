import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const ProvidersModel = sequelize.define("Providers", {
	id_provider: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	provider_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	timestamps: false
});

export default ProvidersModel;
