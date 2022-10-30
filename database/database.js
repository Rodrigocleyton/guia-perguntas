const Sequelize = require('sequelize')

const connection = new Sequelize('guia_perguntas', 'root', 'password' , {
    host:'localhost',
    //tipo do banco de dados
    dialect: 'mysql'

})

module.exports = connection