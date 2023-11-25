import express from "express";
import RolesModel from '../models/roles.model.js';

const router = express.Router();

router.get("/roles", async (req, res) => {
	try {
		const data = await RolesModel.findAll()

		res.json(data);
	} catch (e) {
		res.json(e);
	}
});

export default router;
