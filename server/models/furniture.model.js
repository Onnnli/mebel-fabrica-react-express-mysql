import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const FurnitureModel = sequelize.define("Furnitures", {
	id_furniture: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	barcode: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	furniture_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	id_category: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	id_details: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	id_provider: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING,
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false,
	}
}, {
	timestamps: false
});

export default FurnitureModel;
