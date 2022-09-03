'user strict'


const Sequelize = require('sequelize');
const USR = require('../models/usuarios'); //Llamar al modelo

module.exports = {
    async get(req, res){ //asincronas significa que vamos a estar realizando todo en diferente tiempo
        //y conforme demanda
        const id = req.body.id;
        await USR.findByPk(id)
        .then(usuario => res.send(usuario))
        .catch(error => res.status(400).send(error))
    },

    async create(req, res){
        let form = req.body;
        const datos = {
            user: form.user,
            password: form.password,
            estado: form.estado,
        }

        await USR.create(datos).then(usuario =>{
            res.send(usuario)
        }).catch(err => {
            console.log(err)
        res.status(500).send({
            message:
            err.message || "Ocurrió un error"
        });});
    },

    async update(req, res){
        let form = req.body.form
        await USR.update({
            user: form.user,
            password: form.password,
            estado: form.estado
        },
        { where: {id: form.id }})
        .then(usuario => res.status(200).send('El registro ha sido actualizado'))
        .catch(error => res.status(400).send(error))
    },

    async delete(req, res){
        let form = req.body
        await USR.destroy({ where: {id: form.id }});
    }
}