import express from "express";
import StatusModel from '../models/status.model.js';

const router = express.Router();

router.get("/statuses", async (req, res) => {
	try {
		const data = await StatusModel.findAll({
			order: ['id_status']
		})

		res.json(data);
	} catch (e) {
		res.json(e);
	}
});

export default router;
