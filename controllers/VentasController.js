'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Ventas = db.ventas;

module.exports = {
    async get(req, res) { //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Ventas.findByPk(id)
            .then(usuario => res.send(usuario))
            .catch(error => res.status(400).send(error))
    },

    async create(req, res) {
        let form = req.body;
        const datos = {
            cantidad: form.cantidad,
            total: form.total,
            //id_productos: form.id_productos,
            id_clientes: form.id_clientes,
            descripcion: form.descripcion,
        }

        await Ventas.create(datos).then(usuario => {
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
        await Ventas.update({
                cantidad: form.cantidad,
                total: form.total,
                //id_productos: form.id_productos,
                id_clientes: form.id_clientes,
                descripcion: form.descripcion,
            }, { where: { id: form.id } })
            .then(usuario => res.status(200).send('El registro ha sido actualizado'))
            .catch(error => res.status(400).send(error))
    },

    async delete(req, res) {
        let form = req.body
        await Ventas.destroy({ where: { id: form.id } })
            .then(usuario => res.status(200).send('El registro ha sido eliminado'))
            .catch(error => res.status(400).send(error));
    }
}