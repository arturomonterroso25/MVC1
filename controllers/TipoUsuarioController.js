'user strict'
const Sequelize = require('sequelize');
//Llamar al modelo
const db = require("../models");
const Tipo_Usuario = db.tipo_usuarios;

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        
        await Tipo_Usuario.findAll()
        .then(usuario => res.send(usuario))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            nombre: form.nombre,
            //Aqui poner los demas atributos para su registro
            estado: 1,
        }

        await Tipo_Usuario.create(datos).then(usuario =>{
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
        await Tipo_Usuario.update({
            nombre: form.nombre,
            //Aqui poner los demas atributos para actualizar
            estado: 1
        },
        { where: {id: form.id }})
        .then(usuario => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    delete(req, res){
        let form = req.body
        Tipo_Usuario.destroy({
            where: {
              id: form.id
            },
            force: true
          })
        .then(usuario => res.status(200).send('El registro ha sido eliminado'))
        .catch(error => res.status(400).send(error));
    }
}