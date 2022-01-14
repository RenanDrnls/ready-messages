const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Message = require('./database/Message')
const { Sequelize } = require('./database/db')
const port = 3000
const Op = Sequelize.Op

//Configura o APP para ler as requisições POST e
//guardar em formato JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Setando EJS como View Engine
app.set('view engine', 'ejs')

//Para usar o módulo Router do Express apenas
const router = express.Router()
app.use('/', router)

//Rota raíz
router.get('/', (req, res) => {
    res.redirect('/home')
})

router.get('/home', (req, res) => {
    res.render('pages/home')
})

//Retorna todas as mensagens do banco
router.get('/allmessages', (req, res) => {
    Message.findAll({
        attributes: ['id_message', 'title_message', 'content_message']
    }).then((messages) => {
        res.render('pages/allmessages', {messages: messages})
    }).catch((err) => {
        res.send(`Error on catch all messages from database: ${err}`)
    })
})

//Retorna mensagens com base em pesquisa
//usando operador LIKE
router.get('/searchmessages', (req, res) => {
    if(req.query.search){
        Message.findAll({
            where: {
                title_message: {
                    [Op.like]: `%${req.query.search}%`
                }
            }
        }).then((messages) => {
            res.render('pages/searchresult', {messages: messages})
        }).catch((err) => {
            res.send(`Error on search: ${err}`);
        })
    } else {
        res.redirect('/allmessages')
    }
})

//Cria uma nova mensagem
router.post('/addmessage', (req, res) => {
    Message.create({
        title_message: req.body.title,
        content_message: req.body.content
    }).then(() => {
        res.redirect('/home')
    }).catch((err) => {
        res.send(`Error on create a new message: ${err}`)
    })
})

app.get('/deletemessage/:id', (req, res) => {
    Message.destroy({
        where: {
            id_message: req.params.id
        }
    }).then(() => {
        res.send('Mensagem deletada com sucesso')
    }).catch((err) => {
        res.send(`Erro ao deletar a mensagem: ${err}`)
    })
})

//Run Server
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})