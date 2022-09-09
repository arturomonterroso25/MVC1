'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Usuario = db.usuarios;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Usuario.findByPk(id)
        .then(usuario => res.send(usuario))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            Nombre: form.Nombre,
            Apellido: form.Apellido,
            ID_Tipo: form.ID_Tipo,
            createdAt: form.createdAt,
            updatedAt: form.updatedAt,
        }

        await Usuario.create(datos).then(usuario =>{
            res.send(usuario)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body.form
        await Usuario.update({
            Nombre: form.Nombre,
            Apellido: form.Apellido,
            ID_Tipo: form.ID_Tipo,
            createdAt: form.createdAt,
            updatedAt: form.updatedAt
        },
        { where: {ID: form.ID }})
        .then(usuario => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Usuario.destroy({ where: {ID: form.ID }});
    }
}