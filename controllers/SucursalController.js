'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Sucursal = db.sucursales;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Sucursal.findByPk(id)
        .then(sucursal => res.send(sucursal))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            Nombre: form.Nombre,
            createdAt: form.createdAt,
            updatedAt: form.updatedAt,
            Direccion: form.Direccion,
        }

        await Sucursal.create(datos).then(sucursal =>{
            res.send(sucursal)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body.form
        await Sucursal.update({
            Nombre: form.Nombre,
            createdAt: form.createdAt,
            updatedAt: form.updatedAt,
            Direccion: form.Direccions
        },
        { where: {id: form.id }})
        .then(sucursal => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Sucursal.destroy({ where: {id: form.id }})
        .then(sucursal => res.status(200).send('El registro ha sido eliminado'))
        .catch(error => res.status(400).send(error));
    }
}