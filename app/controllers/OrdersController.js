const httpStatus = require('http-status');
const OrdersService = require('./../services/OrdersService');
const ApiError = require('../utils/ApiError');

class OrdersController {
  /**
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  static async getOrderInfo(req, res) {
    const order = await OrdersService.getItem(req.params.orderId);
    if (!order) {
      throw new ApiError('Order was not found', httpStatus.NOT_FOUND);
    }

    return res.json(order);
  }

  /**
   * @param req
   * @param res
   * @returns {Promise<*|void>}
   */
  static async createOrder(req, res) {
    const orderId = await OrdersService.create(req.body);

    return res.status(httpStatus.CREATED)
      .location(`/orders/${orderId}`)
      .send();
  }
}

module.exports = OrdersController;
