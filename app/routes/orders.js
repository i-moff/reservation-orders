const express = require('express');
const asyncHandler = require('./../middlewares/async');
const ordersCtrl = require('../controllers/OrdersController');

const router = express.Router();
router.route('/orders').post(asyncHandler(ordersCtrl.createOrder));

router.route('/orders/:orderId')
  .get(asyncHandler(ordersCtrl.getOrderInfo));

module.exports = router;
