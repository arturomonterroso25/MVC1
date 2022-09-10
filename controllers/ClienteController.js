'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Cliente = db.clientes;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Cliente.findByPk(id)
        .then(cliente => res.send(cliente))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            Nombre: form.Nombre,
            Apellido: form.Apellido,
            Telefono: form.Telefono,
            Direccion: form.Direccion,
            ID_Tipo_Cliente: form.ID_Tipo_Cliente,
            createdAt: form.createdAt,
            updatedAt: form.updatedAt
        }

        await Cliente.create(datos).then(cliente =>{
            res.send(cliente)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body
        await Cliente.update({
            Nombre: form.Nombre,
            Apellido: form.Apellido,
            Telefono: form.Telefono,
            Direccion: form.Direccion,
            ID_Tipo_Cliente: form.ID_Tipo_Cliente,
            createdAt: form.createdAt,
            updatedAt: form.updatedAt
        },
        { where: {id: form.id }})
        .then(cliente => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Cliente.destroy({ where: {id: form.id }})
        .then(cliente => res.status(200).send('El registro ha sido eliminado'))
        .catch(error => res.status(400).send(error));
    }
}