const express = require ('express')
const app = express()
const db = require('./src/data/database')

db.connect()

//usar as rotas

const titulo = require('./src/routes/titulos.routes')
const estudio = require('./src/routes/estudios.routes')

app.use(express.json ())

app.use('/titulos',titulo)
app.use('/estudios',estudio)




app.listen(3581, ()=> console.log('Servidor rodando'))    //subindo o servidor