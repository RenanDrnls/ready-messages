const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

//Configura o APP para ler as requisições POST e
//guardar em formato JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Envio de arquivos estáticos por meio do módulo .static() dos Express
app.use(express.static(__dirname + '/static'))

//Setando EJS como View Engine
app.set('view engine', 'ejs')

//Para usar o módulo Router do Express apenas
app.use(require('./routes/router'))

//Redirect para http response 404 / Not Found
app.use((req, res, next) => {
    res.status(404).render('pages/404')
})

//Run Server
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})
