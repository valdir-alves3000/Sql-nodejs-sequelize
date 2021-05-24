const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    // Encontrar todos usuários que tem email que terminam com os dados iguais
    // Desses usuários, busque todos que moram na mesma rua
    // Desse usuários, busque todas tecnologias que começam com React

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where:{
       email: {
        [Op.like]: '%vsalves.com'
       }
      },
      include: [
        { 
          association: 'addresses',
          attributes: ['street', 'zipcode'],
          where: { street: 'Rua Lourival Portal' } },
        {
          association: 'techs',
          attributes: ['name'],
          through: {
            attributes: []
          },
          required: false,
          where: {
            name: {
              [Op.like]: 'React%'
            }
          }
        },
      ]
    });

    return res.json(users);
  }
}