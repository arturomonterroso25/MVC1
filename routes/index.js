const { Router } = require('express');
const router = Router();

const UsuarioController = require('../controllers/UsuarioController');
const TipoUsuarioController = require('../controllers/TipoUsuarioController')
const Comprascontroller = require('../controllers/Comprascontroller')
const Proveedorescontroller = require('../controllers/Proveedorescontroller')

module.exports = (app) => {
    router.get('/usuario/get', UsuarioController.get);
    router.post('/usuario/create', UsuarioController.create);
    router.put('/usuario/update', UsuarioController.update);
    router.delete('/usuario/delete', UsuarioController.delete);

    router.get('/tipo_usuario/get', TipoUsuarioController.get);
    router.post('/tipo_usuario/create', TipoUsuarioController.create);
    router.put('/tipo_usuario/update', TipoUsuarioController.update);
    router.delete('/tipo_usuario/delete', TipoUsuarioController.delete);

    router.get('/proveedores/get', Proveedorescontroller.get);
    router.post('/proveedores/create', Proveedorescontroller.create);
    router.put('/proveedores/update', Proveedorescontroller.update);
    router.delete('/proveedores/delete', Proveedorescontroller.delete);

    router.get('/compras/get', Comprascontroller.get);
    router.post('/compras/create', Comprascontroller.create);
    router.put('/compras/update', Comprascontroller.update);
    router.delete('/compras/delete', Comprascontroller.delete);

    app.use('/', router);
}