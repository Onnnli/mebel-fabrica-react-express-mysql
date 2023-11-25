import express from "express";
import UserModel from '../models/user.model.js';
import RolesModel from '../models/roles.model.js';

const router = express.Router();

router.post("/login", async (req, res) => {
	try {

		const data = await UserModel.findOne({
				where: {
					email: req.body.email,
					password: req.body.password
				}
		})

		if(!data) {
			return res.status(401).json('User not found!');
		}

		const { role_name } = await RolesModel.findOne({
			where: {
				id_role: data.id_role,
			}
		})

		console.log(data);

	return res.status(200).json( {
		...data, token: `${data.id_role}_${data.name}_${data.password}`, role: role_name, idCustomer:  data.dataValues.id_user});
	} catch (e) {
		res.json(e);
	}
});

export default router;
