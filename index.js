const express = require("express")
const app = express()
const port =3000


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
    res.render("index", {
        nome: nome1,
        profissao : profissao1
    })
})


//ejs como view engine
app.set('view engine', 'ejs');

app.listen(port, ()=>{
    console.log("Servidor no ar na porta ", port)
})