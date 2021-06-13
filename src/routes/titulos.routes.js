const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')

//Cria um titulo -> POST -> save ()
router.post('/', controller.criaTitulo)

//Ler todos os titulos -> GET -> find ()
router.get('/', controller.mostraTitulos)

//Ler todos os títulos por estudio -> Get - find()
router.get(/marvel$|ghibli$|pixar$/, controller.titulosPorEstudio)

//Atualiza um título -> PATCH -> find()
router.patch('/id:', controller.updateTitulo)

//Deletar um título - > DELETE -> find()
router.delete('/id:', controller.deleteTitulo)


module.exports = router