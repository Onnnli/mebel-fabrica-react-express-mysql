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
