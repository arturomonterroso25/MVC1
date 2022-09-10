'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Producto = db.productos;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Producto.findByPk(id)
        .then(producto => res.send(producto))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            name: form.name,
            date_exp: form.date_exp,
            price:form.price,
            cost:form.cost,
        }

        await Producto.create(datos).then(producto =>{
            res.send(producto)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body.form
        await Producto.update({
            name: form.name,
            date_exp: form.date_exp,
            price:form.price,
            cost:form.cost,
        },
        { where: {id: form.id }})
        .then(producto => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Producto.destroy({ where: {id: form.id }});
    }
}