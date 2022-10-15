const express = require("express")
const app = express()
const port =3000

app.get('/', (req,res)=>{
    res.send("Bem vindo a meu site!")
})


app.listen(port, ()=>{
    console.log("Servidor no ar na porta ", port)
})