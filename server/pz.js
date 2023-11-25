// order model

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

// order Api

import express from "express";
import OrdersModel from '../models/orders.model.js';
import UserModel from '../models/user.model.js';

const router = express.Router();

router.get("/orders", async (req, res) => {
	try {
		if(req.query.id) {
			const data = await OrdersModel.findAll({
				where: {id_employer: req.query.id}
			})

			return res.json(data);
		}

		const data = await OrdersModel.findAll()

		return res.json(data);
	} catch (e) {
		res.json(e);
	}
});


router.post("/order", async (req, res) => {
	try {
		const {
			customerId,
			furnitures,
			address,
			nameCustomer
		} = req.body


		const employer = await UserModel.findAll({
			where: {id_role: 3}
		})

		furnitures.map(async el => {
			const data = await OrdersModel.create({
				id_customer: customerId,
				address,
				name_customer: nameCustomer,
				id_furniture: el.id_furniture,
				id_employer: employer[1].dataValues.id_user,
				status_name: 'Оформлен',
			})

			return res.status(200).json(data);
		})


	} catch (e) {
		res.json(e);
	}
});


router.put("/order", async (req, res) => {
	try {
		const {
			orderId,
			statusName,
		} = req.body


		console.log(statusName, 'status.');

		const data = await OrdersModel.update({status_name: statusName}, {
			where: { id_order: orderId }
		})


		console.log(data);

		return res.status(200).json(data);

	} catch (e) {
		res.json(e);
	}
});


router.delete('/order', async (req, res) => {
	try{
		const response = await OrdersModel.destroy({
			where: { id_order: req.query.id  }
		})

		console.log(response, 'response');

		res.json(response)
	}catch (e) {
		console.log(e, 'e');
	}
})

export default router;


// furnitures Api

import express from "express";
import FurnitureModel from '../models/furniture.model.js';
import BarcodeModel from '../models/barcode.model.js';

const router = express.Router();

router.get("/catalog", async (req, res) => {
	try {

		if(req.query.filter && req.query.filter !== '0') {

			const data = await FurnitureModel.findAll({
				where: {
					id_category: req.query.filter
				}
			})

			return res.json(data);
		}

		const data = await FurnitureModel.findAll()

		return res.json(data);
	} catch (e) {
		res.json(e);
	}
});


router.post("/addFurniture", async (req, res) => {
	try {
		const {
			barcode,
			furniture_name,
			category,
			details,
			provider,
			image,
			price
		} = req.body



		const [code, created] = await BarcodeModel.findOrCreate({
			where: { barcode: barcode },
			defaults: {
				barcode: barcode
			}
		}).catch(e => console.log(e))

		if(created) {
			details.map(async el => {
				await FurnitureModel.create({
					barcode,
					furniture_name,
					id_category: category,
					id_details: el.id_detail,
					id_provider: provider,
					image,
					price,
				})
			})

			return res.status(200).json('Furniture was created');
		}

		if(code) {
			return res.status(500).json({code: 'barcode already exists' });
		}

	} catch (e) {
		res.status(500).json({message: 'Something went wrong'});
	}
});


router.put("/editFurniture", async (req, res) => {
	try {
		const {
			barcode,
			furniture_name,
			category,
			details,
			provider,
			image,
			price
		} = req.body

		console.log(req.body);

		const [code, created] = await BarcodeModel.findOrCreate({
			where: { barcode: barcode },
			defaults: {
				barcode: barcode
			}
		}).catch(e => console.log(e))


		if(created || code) {
			await FurnitureModel.destroy({
				where: { barcode: barcode }
			})

			details.map(async el => {
				await FurnitureModel.create({
					barcode,
					furniture_name,
					id_category: category,
					id_details: el.id_detail,
					id_provider: provider,
					image,
					price,
				})
			})

			return res.status(200).json({message: 'Furniture was updated'});
		}

	} catch (e) {
		res.status(500).json({message: 'Something went wrong'});
	}
});


export default router;
