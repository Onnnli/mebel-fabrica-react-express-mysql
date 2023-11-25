import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";
import FurnitureModel from './furniture.model.js';

const OrdersModel = sequelize.define("Order", {
	id_order: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	id_customer: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	id_furniture: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	id_employer: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	status_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	name_customer: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	timestamps: false
});
export default OrdersModel;
