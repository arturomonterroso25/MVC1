'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Inventairo = db.inventairo;

module.exports = {
    async get(req, res) { //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Inventairo.findByPk(id)
            .then(usuario => res.send(usuario))
            .catch(error => res.status(400).send(error))
    },

    async create(req, res) {
        let form = req.body;
        const datos = {
            cantidad: form.cantidad,
            producto: form.producto,
            id_producto: form.id_producto,
            cantidad: form.cantidad,
            categoria: form.categoria,
            tipo: form.tipo,
            descripcion: form.descripcion,

        }

        await Inventairo.create(datos).then(usuario => {
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
        await Inventairo.update({
            cantidad: form.cantidad,
            producto: form.producto,
            id_producto: form.id_producto,
            cantidad: form.cantidad,
            categoria: form.categoria,
            tipo: form.tipo,
            descripcion: form.descripcion,

            }, { where: { id: form.id } })
            .then(usuario => res.status(200).send('El registro ha sido actualizado'))
            .catch(error => res.status(400).send(error))
    },

    async delete(req, res) {
        let form = req.body
        await Inventairo.destroy({ where: { id: form.id } })
            .then(usuario => res.status(200).send('El registro ha sido eliminado'))
            .catch(error => res.status(400).send(error));
    }
}