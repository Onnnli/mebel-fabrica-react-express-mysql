import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const BarcodeModel = sequelize.define("Barcodes", {
	id_barcode: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	barcode: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
}, {
	timestamps: false
});

export default BarcodeModel;
