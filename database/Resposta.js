const Sequelizer = require('sequelize')
const connection = require('./database')

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelizer.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelizer.INTEGER,
        allowNull: false
    }

})

Resposta.sync({force:false}).then(()=>{
    console.log("Tabela Resposta criada com sucesso! ")
}).catch((err)=>{
    console.log("Tabela resposta não criada!" + err)
})

module.exports = Resposta