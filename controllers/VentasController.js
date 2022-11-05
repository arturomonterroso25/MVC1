'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Venta = db.ventas;
const Cliente = db.clientes;
module.exports = {
    async get(req, res) { //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Venta.findAll({
            include: [
                Cliente
              ]
            })
            .then(venta => res.send(venta))
            .catch(error => res.status(400).send(error))
    },

    async create(req, res) {
        let form = req.body;
        const datos = {
            monto: form.monto,
            estado: form.estado,
            id_clinte: form.id_clinte
        }

        await Venta.create(datos).then(venta => {
            res.send(venta)
        }).catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error"
            });
        });
    },

    async update(req, res) {
        let form = req.body
        await Venta.update({
            monto: form.monto,
            estado: form.estado,
            id_clinte: form.id_clinte
        },
            { where: { id: form.id } })
            .then(venta => res.status(200).send('El registro ha sido actualizado'))
            .catch(error => res.status(400).send(error))
    },

    async delete(req, res) {
        let form = req.body
        await Venta.destroy({ where: { id: form.id } })
            .then(venta => res.status(200).send('El registro ha sido eliminado'))
            .catch(error => res.status(400).send(error));
    }
}