import express from "express";
import CategoryModel from '../models/category.model.js';

const router = express.Router();

router.get("/categories", async (req, res) => {
	try {
		const data = await CategoryModel.findAll()

		res.json(data);
	} catch (e) {
		res.json(e);
	}
});

export default router;
