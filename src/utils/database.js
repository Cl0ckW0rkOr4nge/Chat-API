const { Sequelize } = require("sequelize");
const configs = require("../../config");
const db = new Sequelize(configs.db[configs.api.nodeEnv]);

module.exports = db