import express from "express";
import categoryApi from './category.js';
import detailsApi from './details.js';
// import employersApi from './employers.js';
import providersApi from './providers.js';
import furnitureApi from './furniture.js';
import ordersApi from './orders.js';
import loginApi from './login.js'
import steps from './steps.js';
import customers from './customers.js';

const router = express.Router();

router.use(ordersApi);
router.use(customers);
router.use(furnitureApi);
router.use(loginApi);
router.use(categoryApi);
router.use(detailsApi);
// router.use(employersApi);
router.use(providersApi);
router.use(steps);

export default router;
