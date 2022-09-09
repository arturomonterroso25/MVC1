'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Compra = db.compras;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Compra.findByPk(id)
        .then(compra => res.send(compra))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            product: form.product,
            category: form.category,
            cant: form.estado,
            total:form.total,
            date:form.date,
        }

        await Compra.create(datos).then(compra =>{
            res.send(compra)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body.form
        await Compra.update({
            product: form.product,
            category: form.category,
            cant: form.estado,
            total:form.total,
            date:form.date,
        },
        { where: {id: form.id }})
        .then(usuario => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Usuario.destroy({ where: {id: form.id }});
    }
}