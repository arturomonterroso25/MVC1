'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Departamento = require('../models/usuarios/Departamento');
const Empleado = db.empleados;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Empleado.findByPk(id)
        .then(empleado => res.send(empleado))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            Nombre: form.Nombre,
            Apellido: form.Apellido,
            DPI: form.DPI,
            Telefono: form.Telefono,
            ID_Departamento: form.ID_Departamento,
            ID_Sucursal: form.ID_Sucursal
        }

        await Empleado.create(datos).then(empleado =>{
            res.send(empleado)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body.form
        await Empleado.update({
            Nombre: form.Nombre,
            Apellido: form.Apellido,
            DPI: form.DPI,
            Telefono: form.Telefono,
            ID_Departamento: form.ID_Departamento,
            ID_Sucursal: form.ID_Sucursal
        },
        { where: {id: form.id }})
        .then(empleado => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Departamento.destroy({ where: {id: form.id }})
        .then(empleado => res.status(200).send('El registro ha sido eliminado'))
        .catch(error => res.status(400).send(error));
    }
}