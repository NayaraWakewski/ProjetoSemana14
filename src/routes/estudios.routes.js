const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')


//Criar Estudios("/")
router.post('/', controller.criaEstudio)

//Monstrar Estudios("/")
router.get('/', controller.mostraEstudios)

//Alterar Estudios("/:id")
router.patch('/:id', controller.alteraEstudio)

//Deletar Estudios("/:id")
router.delete('/:id', controller.deletaEstudio)

module.exports = router
