//definição do model de perguntas
const Sequelizer = require('sequelize')
const connection = require('./database')

//pergunta minúscula é nome da tabela
const Pergunta = connection.define('pergunta', {
    titulo:{
        type:Sequelizer.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelizer.TEXT,
        allowNull: false
    }
})

//sincroniza o model com o banco de dados, force: false significa que caso a tabela exista, ele não forçará a criação da tabela
Pergunta.sync({force:false}).then(()=>{
    console.log("Tabela criada com sucesso!")
}).catch((err)=>{
    console.log("Erro, taabela não criada!")
})