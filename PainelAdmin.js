const Express = require("express")
const Rotas = Express.Router()

//Rota Principal para o painel Administrativo
    Rotas.get("/", (req, res)=>{
        res.render("/admin/index")
    })
    Rotas.get("/posts", (req, res)=>{
        res.send("Pagina de Posts")
    })
    Rotas.get("/Categorias",(req, res)=>{
       res.send("Pagina de Categorias") 
    })
//


module.exports = Rotas