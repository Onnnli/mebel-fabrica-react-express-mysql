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
