const { Router } = require('express');
const router = Router();

const UsuarioController = require('../controllers/UsuarioController');
const TipoUsuarioController = require('../controllers/TipoUsuarioController')
const Comprascontroller = require('../controllers/Comprascontroller')
const Proveedorescontroller = require('../controllers/Proveedorescontroller')
const ProductosController = require('../controllers/ProductosController')
const InventariosController = require('../controllers/InventariosController')
const ClientesController = require('../controllers/ClientesController')
const VentasController = require('../controllers/VentasController')

module.exports = (app) => {
    router.get('/usuario/get', UsuarioController.get);
    router.post('/usuario/create', UsuarioController.create);
    router.put('/usuario/update', UsuarioController.update);
    router.put('/usuario/delete', UsuarioController.delete);

    router.get('/tipo_usuario/get', TipoUsuarioController.get);
    router.post('/tipo_usuario/create', TipoUsuarioController.create);
    router.put('/tipo_usuario/update', TipoUsuarioController.update);
    router.put('/tipo_usuario/delete', TipoUsuarioController.delete);

    router.get('/proveedores/get', Proveedorescontroller.get);
    router.post('/proveedores/create', Proveedorescontroller.create);
    router.put('/proveedores/update', Proveedorescontroller.update);
    router.put('/proveedores/delete', Proveedorescontroller.delete);

    router.get('/compras/get', Comprascontroller.get);
    router.post('/compras/create', Comprascontroller.create);
    router.put('/compras/update', Comprascontroller.update);
    router.put('/compras/delete', Comprascontroller.delete);

    router.get('/productos/get', ProductosController.get);
    router.post('/productos/create', ProductosController.create);
    router.put('/productos/update', ProductosController.update);
    router.put('/productos/delete', ProductosController.delete);

    router.get('/inventario/get', InventariosController.get);
    router.post('/inventario/create', InventariosController.create);
    router.put('/inventario/update', InventariosController.update);
    router.delete('/inventario/delete', InventariosController.delete);

    router.get('/ventas/get', VentasController.get);
    router.post('/ventas/create', VentasController.create);
    router.put('/ventas/update', VentasController.update);
    router.put('/ventas/delete', VentasController.delete);

    router.get('/clientes/get', ClientesController.get);
    router.post('/clientes/create', ClientesController.create);
    router.put('/clientes/update', ClientesController.update);
    router.put('/clientes/delete', ClientesController.delete);

    app.use('/', router);
}