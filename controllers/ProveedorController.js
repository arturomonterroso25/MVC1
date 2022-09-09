'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Proveedor = db.proveedores;

module.exports = {
    async get(req, res){ 
        const id = req.body.id;
        await Proveedor.findByPk(id)
        .then(proveedor => res.send(proveedor))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            name: form.name,
            phone: form.phone,
            type_paid: form.type_paid,
            days : form.days,
        }

        await Proveedor.create(datos).then(proveedor =>{
            res.send(proveedor)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body.form
        await Proveedor.update({
            name: form.name,
            phone: form.phone,
            type_paid: form.type_paid,
            days : form.days,
        },
        { where: {id: form.id }})
        .then(proveedor => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Proveedor.destroy({ where: {id: form.id }});
    }
}