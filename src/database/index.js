const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

const connetion = new Sequelize(dbConfig);

User.init(connetion);
Address.init(connetion);
Tech.init(connetion);

User.associate(connetion.models);
Address.associate(connetion.models);
Tech.associate(connetion.models);

module.exports = connetion;