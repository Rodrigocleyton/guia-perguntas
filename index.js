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


//ejs como view engine
app.set('view engine', 'ejs');

app.listen(port, ()=>{
    console.log("Servidor no ar na porta ", port)
})