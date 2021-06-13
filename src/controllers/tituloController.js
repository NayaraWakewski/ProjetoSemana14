const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const criaTitulo = async (req, res) => {
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero: req.body.genero,
        descricao: req.body.descricao,
        estudio: req.body.estudio
    })

    //lembrar de fazer a regra que nao permite criar um titulo que ja existe
    const existeTitulo = await Titulo.findOne({ nome: req.body.nome })
    if (existeTitulo) {
        return res.status(409).json({
            mensagem: "O filme já se encontra cadastrado, mas olha pelo lado bom, não precisa cadastrar de novo"
        })
    }

    try {
        const novoTitulo = await titulo.save()
        return res.status(201).json(novoTitulo)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const mostraTitulos = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    return res.status(200).json(titulos)
}


const titulosPorEstudio = async (req, res) => {
    const estudio = req.url.replace("/", "");
    try {
        const titulos = await Titulo.find().populate('estudio')
        const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome.toLowerCase() == estudio.toLowerCase())
        return res.status(200).json(titulosFiltrado)
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }

}

const deleteTitulo = async (req, res) => {

    try {
        const titulo = await Titulo.findById(req.params.id)
        titulo.remove();
        return res.status(200).json({
            mensagem: "titulo deletado com sucesso!"
        })
    } catch (error) {
        return res.status(400).json({
            mensagem: "titulo não encontrado!"
        })
    }
}

const updateTitulo = async (req, res) => {

    const { nome, genero, descricao } = req.body
    const update = { nome, genero, descricao}

    const titulo = await Titulo.findById(req.params.id)

    if (!titulo) {
        return res.status(400).json({
            "mensagem" : "titulo não econtrado!"
        })
    }

   
    try {
        const titulo = await Titulo.updateOne({_id : req.params.id}, update)
        res.status(200).json(titulo)
    } catch (error) {
        return res.status(400).json({
            mensagem : error.message
        })
    }
}



module.exports = {
    criaTitulo,
    mostraTitulos,
    titulosPorEstudio,
    deleteTitulo,
    updateTitulo
}