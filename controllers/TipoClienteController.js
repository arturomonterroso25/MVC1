'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Tipo_Cliente = db.tipo_clientes;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Tipo_Cliente.findByPk(id)
        .then(tipo_cliente => res.send(tipo_cliente))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            Nombre: form.Nombre,
            createdAt: form.createdAt,
            updatedAt: form.updatedAt
        }

        await Tipo_Cliente.create(datos).then(tipo_cliente =>{
            res.send(tipo_cliente)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body
        await Tipo_Cliente.update({
            Nombre: form.Nombre,
            createdAt: form.createdAt,
            updatedAt: form.updatedAt
        },
        { where: {id: form.id }})
        .then(tipo_cliente => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Tipo_Cliente.destroy({ where: {id: form.id }})
        .then(tipo_cliente => res.status(200).send('El registro ha sido eliminado'))
        .catch(error => res.status(400).send(error));
    }
}