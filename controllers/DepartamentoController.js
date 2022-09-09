'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Departamento = db.departamentos;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Departamento.findByPk(id)
        .then(departamento => res.send(Departamento))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            Nombre: form.Nombre,
            createdAt: form.createdAt,
            updatedAt: form.updatedAt,
        }

        await Departamento.create(datos).then(departamento =>{
            res.send(departamento)
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
            createdAt: form.createdAt,
            updatedAt: form.updatedAt
        },
        { where: {id: form.id }})
        .then(departamento => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Departamento.destroy({ where: {ID: form.ID }});
    }
}