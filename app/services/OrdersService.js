const Joi = require('joi');
const httpStatus = require('http-status');
const db = require('./../../db');
const ApiError = require('../utils/ApiError');

const TABLE_ORDERS = 'orders';
const MIN_COUNT_OF_MEALS = 1;

class OrdersService {
  /**
   * @param {Number} id
   */
  static async getItem(id) {
    // NOTICE: method first() throws exception if no items
    const order = (await db(TABLE_ORDERS)
      .select()
      .where({ id }))[0];

    if (!order) {
      return null;
    }

    return ({ meals: order.meals });
  }

  /**
   * @param {Array} data
   */
  static async create(data) {
    const { error } = Joi.validate(
      data,
      { meals: Joi.array().items(Joi.string()).min(MIN_COUNT_OF_MEALS).required() },
    );
    if (error) {
      throw new ApiError(error.details[0].message, httpStatus.BAD_REQUEST);
    }

    return db(TABLE_ORDERS).returning('id').insert(data);
  }
}

module.exports = OrdersService;
