import express from "express";
import ProvidersModel from '../models/providers.model.js';

const router = express.Router();

router.get("/providers", async (req, res) => {
	try {
		const data = await ProvidersModel.findAll()

		res.json(data);
	} catch (e) {
		res.json(e);
	}
});

export default router;
