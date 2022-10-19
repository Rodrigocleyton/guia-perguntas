const express = require("express")
const app = express()
const port =3000

//ejs como view engine
app.set('view engine', 'ejs');
//config para usar aequivos estáticos no express(css, imagens, etc)
app.use(express.static('public'))

app.get('/', (req,res)=>{
   
    res.render("index", {
      
    })
})





app.listen(port, ()=>{
    console.log("Servidor no ar na porta ", port)
})