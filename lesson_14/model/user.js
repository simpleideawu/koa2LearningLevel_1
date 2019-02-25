const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('users',{
        username:Sequelize.STRING,
        password:Sequelize.STRING
    },
    {
        freezeTableName:true
    }
)

sequelize.sync({ force: false })
    .then(() => User.create({
        username: 'jade123',
        password: '123456'
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });
