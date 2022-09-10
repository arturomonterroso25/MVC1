'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Inventario = db.inventarios;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Inventario.findByPk(id)
        .then(inventario => res.send(inventario))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            product: form.product,
            cant: form.cant,
            date:form.date,
        }

        await Inventario.create(datos).then(inventario =>{
            res.send(inventario)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body
        await Inventario.update({
            product: form.product,
            cant: form.estado,
            date:form.date,
        },
        { where: {id: form.id }})
        .then(inventario => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Inventario.destroy({ where: {id: form.id }});
    }
}