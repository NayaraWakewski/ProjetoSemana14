const mongoose = require("mongoose")
const Estudio = require("../models/estudio")




const mostraEstudios = async (req, res) => {

    try {
        const estudios = await Estudio.find();
        return res.status(200).json(estudios)
    } catch (error) {
        return res.status(500).json({
            error: message.error
        })
    }
}


const criaEstudio = async (req, res) => {

    const estudio = new Estudio({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome
    })

    const estudioExiste = await Estudio.findOne({ nome: req.body.nome }) // lowerCase ?
    if (estudioExiste) {
        return res.status(409).json({
            error: "Estudio ja cadastrado!"
        })
    }

    try {
        const novoEstudio = await estudio.save();
        return res.status(201).json(novoEstudio)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}


const alteraEstudio = async (req, res) => {
    const { nome } = req.body
    try {
        const estudio = await Estudio.findById(req.params.id);
        if (nome && typeof nome == "string") {
            estudio.nome = nome
            estudio.save()
            return res.status(200).json({
                mensagem: " Alterado com sucesso!",
                estudio: nome
            })
        }
    } catch (error) {
        return res.status(400).json({
            mensagem: error.message
        })
    }
}


const deletaEstudio = async (req, res) => {
    try {
        await Estudio.deleteOne({ _id : req.params.id })
        return res.status(200).json({
            message : "deletado com sucesso!"
        })
    } catch (error) {
        return res.status(200).json({
            message : error.message
        })
    }
}


module.exports = {
    mostraEstudios,
    criaEstudio,
    alteraEstudio,
    deletaEstudio
}
