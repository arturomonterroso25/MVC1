'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Cliente = db.clientes;

module.exports = {
    async get(req, res) { //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Cliente.findByPk(id)
            .then(usuario => res.send(usuario))
            .catch(error => res.status(400).send(error))
    },

    async create(req, res) {
        let form = req.body;
        const datos = {
            nombre: form.nombre,
            Apellido: form.Apellido,
            Direccion: form.Direccion,
            Edad: form.Edad,
            Nit: form.Nit,

        }

        await Cliente.create(datos).then(usuario => {
            res.send(usuario)
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
        await Cliente.update({
            nombre: form.nombre,
            Apellido: form.Apellido,
            Direccion: form.Direccion,
            Edad: form.Edad,
            Nit: form.Nit,
        },
            { where: { id: form.id } })
            .then(usuario => res.status(200).send('El registro ha sido actualizado'))
            .catch(error => res.status(400).send(error))
    },

    async delete(req, res) {
        let form = req.body
        await Cliente.destroy({ where: { id: form.id } })
            .then(usuario => res.status(200).send('El registro ha sido eliminado'))
            .catch(error => res.status(400).send(error));
    }
}