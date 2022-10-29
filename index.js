const express = require("express")
const app = express()
const port =3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//ejs como view engine
app.set('view engine', 'ejs');
//config para usar aequivos estáticos no express(css, imagens, etc)
app.use(express.static('public'))

app.get('/', (req,res)=>{
   
    res.render("index", {
      
    })
})

app.get("/perguntar", (req, res)=>{
    res.render("perguntar")
})
//recebe os dados do formulário 
app.post("/salvarpergunta", (req, res)=>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send(titulo + " " + descricao)
})





app.listen(port, ()=>{
    console.log("Servidor no ar na porta ", port)
})