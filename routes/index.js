const { Router } = require('express');
const router = Router();

const UsuarioController = require('../controllers/UsuarioController');
const TipoUsuarioController = require('../controllers/TipoUsuarioController')

module.exports = (app) => {
     router.get('/usuario/get', UsuarioController.get);
     router.post('/usuario/create', UsuarioController.create);
     router.put('/usuario/update', UsuarioController.update);
     router.delete('/usuario/delete', UsuarioController.delete);

     router.get('/tipo_usuario/get', TipoUsuarioController.get);
     router.post('/tipo_usuario/create', TipoUsuarioController.create);
     router.put('/tipo_usuario/update', TipoUsuarioController.update);
     router.put('/tipo_usuario/delete', TipoUsuarioController.delete);

     
     app.use('/', router);
}