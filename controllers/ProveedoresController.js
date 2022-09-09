'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Proveedor = db.proveedores;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await Proveedor.findByPk(id)
        .then(usuario => res.send(usuario))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            nombre: form.nombre,
            telefono: form.telefono,
            estado: form.estado,
            
        }

        await Proveedor.create(datos).then(usuario =>{
            res.send(usuario)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body
        await Proveedor.update({
            nombre: form.nombre,
            telefono: form.telefono,
            estado: form.estado,
            
        },
        { where: {id: form.id }})
        .then(usuario => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await Proveedor.destroy({ where: {id: form.id }})
        .then(usuario => res.status(200).send('El registro ha sido eliminado'))
        .catch(error => res.status(400).send(error));
    }
}