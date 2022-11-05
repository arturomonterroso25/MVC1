'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Compra = db.compras;

module.exports = {
    async get(req, res) { //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Compra.findAll()
            .then(usuario => res.send(usuario))
            .catch(error => res.status(400).send(error))
    },

    async create(req, res) {
        let form = req.body;
        const datos = {
            id_proveedor: form.id_proveedor,
            cantidad: form.cantidad,
            precio: form.precio,

        }

        await Compra.create(datos).then(usuario => {
            res.send(usuario)
        }).catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || "Ocurrió un error"
            });
        });
    },

    async update(req, res) {
        let form = req.body
        await Compra.update({
                id_proveedor: form.id_proveedor,
                cantidad: form.cantidad,
                precio: form.precio,
            }, { where: { id: form.id } })
            .then(usuario => res.status(200).send('El registro ha sido actualizado'))
            .catch(error => res.status(400).send(error))
    },

    async delete(req, res) {
        let form = req.body
        await Compra.destroy({ where: { id: form.id } })
            .then(usuario => res.status(200).send('El registro ha sido eliminado'))
            .catch(error => res.status(400).send(error));
    }
}