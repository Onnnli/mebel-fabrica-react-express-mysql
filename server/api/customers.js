import express from "express";
import UserModel from '../models/user.model.js';

const router = express.Router();

router.get("/customers", async (req, res) => {
	try {

		const data = await UserModel.findAll({
			where: {
				id_role: 1
			}
		})

		res.json(data)
	} catch (e) {
		res.json(e);
	}
});


router.get("/employers", async (req, res) => {
	try {

		const data = await UserModel.findAll({
			where: {
				id_role: 3
			}
		})

		res.json(data)
	} catch (e) {
		res.json(e);
	}
});

export default router;
