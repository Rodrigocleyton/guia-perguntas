const express = require("express")
const app = express()
const port =3000

const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const connection = require("./database/database")
//database 
connection.authenticate().then(()=>{
    console.log("conectado ao mysql!")
}).catch((err)=>{
    console.log("Não conectou ", err)
})


//ejs como view engine
app.set('view engine', 'ejs');
//config para usar aequivos estáticos no express(css, imagens, etc)
app.use(express.static('public'))

app.get('/', (req,res)=>{
    //then recebendo todas as perguntas
   Pergunta.findAll({raw:true, order:[
    //ordena pelo id decrescente, servetambém para ordem alfabética
    ['id', 'DESC']
   ]}).then(pergunta=>{
    //variável perguntas recebendo pergunta(vem do BD) para exibir no front
    
    res.render("index",{
    perguntas:pergunta 
    })
   })
    
})

app.get("/perguntar", (req, res)=>{
    res.render("perguntar")
})
//recebe os dados do formulário 
app.post("/salvarpergunta", (req, res)=>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    //salva no model pergunta
    Pergunta.create({
        titulo: titulo,
        descricao:descricao
    }).then(()=>{
        //Após a pergunta rediriciona o usuário para a pag principal
        res.redirect("/")
    })
})


app.get('/pergunta/:id', (req,res)=>{
    //recebe um id como parametro
    var id = req.params.id
    //busca um parametro específico, id, nome, etc
    Pergunta.findOne({
        //onde id é igual ao id digitado como parametro
        where: {id: id}
    }).then(pergunta =>{
        if(pergunta != undefined) {// pergunta achada

            Resposta.findAll({
                where: {perguntaId:pergunta.id},
                order : [['id', 'DESC'

                ]]
            }).then(respostas =>{
                res.render('pergunta', {
               pergunta: pergunta,
               respostas:respostas 
            })  
            })
        } else {// não encontrada
            res.redirect("/")
        }
    })
})

app.post('/responder', (req, res)=>{
    var corpo = req.body.corpo
    var perguntaId = req.body.pergunta
    Resposta.create({
        corpo:corpo,
        perguntaId:perguntaId
    }).then(()=>{
        res.redirect('/pergunta/'+ perguntaId)
    })
})


app.listen(port, ()=>{
    console.log("Servidor no ar na porta ", port)
})