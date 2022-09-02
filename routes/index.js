const { Router } = require('express');
const router = Router();

const UsuarioController = require('../controllers/UsuarioController');
const TipoUsuarioController = require('../controllers/TipoUsuarioController')

module.exports = (app) => {
     router.get('/usuario/get', UsuarioController.get);
     router.post('/usuario/create', UsuarioController.create);
     router.put('/usuario/update', UsuarioController.update);
     router.delete('/usuario/delete', UsuarioController.delete);

     router.get('/tipo_usuario/get', UsuarioController.get);
     router.post('/tipo_usuario/create', UsuarioController.create);
     router.put('/tipo_usuario/update', UsuarioController.update);
     router.delete('/tipo_usuario/delete', UsuarioController.delete);

     
     app.use('/', router);
}