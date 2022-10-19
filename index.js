const express = require("express")
const app = express()
const port =3000

//ejs como view engine
app.set('view engine', 'ejs');
//config para usar aequivos estáticos no express(css, imagens, etc)
app.use(express.static('public'))

app.get('/', (req,res)=>{
    var nome = "rodrigo"
    var profissao = "programador"
    res.render("index", {
        nome: nome,
        profissao : profissao
    })
})

app.get('/:nome/:profissao', (req,res)=>{
    var nome1 = req.params.nome;
    var profissao1 = req.params.profissao
    var exibirMsg = false

    var produtos = [
        {nome: "Chocolate", preco: 4.99},
        {nome: "Suco de Uva", preco: 11.99},
        {nome: "goiabada", preco: 7.99}
        
    ]


    res.render("index", {
        nome: nome1,
        profissao : profissao1,
        msg: exibirMsg,
        produtos: produtos
        
    })
})




app.listen(port, ()=>{
    console.log("Servidor no ar na porta ", port)
})