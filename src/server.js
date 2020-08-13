//servidor
const express = require('express')
const server = express() //devolve um objeto

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")


const nunjucks = require('nunjucks')
//configurar o nunjucks (template engine)
nunjucks.configure('src/views', { //pasta onde estão os arquivos html
    express: server,   
    noCache: true
})

//inicio e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start no sevidor
.listen(5500) 