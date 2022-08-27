const { Router } = require('express');
const router = Router();

const UsuarioController = require('../controllers/UsuarioController');

module.exports = (app) => {
     router.get('/usuario/get', UsuarioController.get);
     router.post('/usuario/create', UsuarioController.create);
     router.put('/usuario/update', UsuarioController.update);
     router.delete('/usuario/delete', UsuarioController.delete);

     
     app.use('/', router);
}