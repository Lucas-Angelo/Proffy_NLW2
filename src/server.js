// Dados da aplicação:
const proffys = [
    { 
        name: "Lucas Ângelo", 
        avatar: "https://avatars3.githubusercontent.com/u/49598959?s=460&u=d090d4d79ea60b977b84f844712615b62092d5e9&v=4", 
        whatsapp: "37999277530", 
        bio: "Entusiasta das melhores tecnologias de física avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Física", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    { 
        name: "Mayk", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatasapp: "999999", 
        bio: "Entusiasta das melhores tecnologias de Química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "30", 
        weekday: [1], 
        time_from: [420], 
        time_to: [1820]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química", 
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject (subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

// Funcionalidades da aplicação:
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    // Pegar os dados inseridos
    const data = req.query
    // Adicionar os data a lista de proffys[]
    //Verificar se não são data vazios
    const isNotEmpty = Object.keys(data).length != 0
    if(isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}


// Servidor da aplicação:
const express = require('express')
const server = express()

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// configurar arquivos estáticos
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)