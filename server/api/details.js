import express from "express";
import DetailsModel from '../models/details.model.js';

const router = express.Router();

router.get("/details", async (req, res) => {
	try {
		const data = await DetailsModel.findAll()

		res.status(200).json(data);
	} catch (e) {
		res.status(500).json(e);
	}
});

export default router;
