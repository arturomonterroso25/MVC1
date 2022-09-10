const { Router } = require('express');
const router = Router();

const UsuarioController = require('../controllers/UsuarioController');
const ProveedorController = require('../controllers/ProveedorController');
const ComprasController = require('../controllers/ComprasController');
const InventarioController = require('../controllers/InventarioController');
const EmpleadoController = require('../controllers/EmpleadoController');
const ProductoController = require('../controllers/ProductosController');
module.exports = (app) => {
     router.get('/usuario/get', UsuarioController.get);
     router.post('/usuario/create', UsuarioController.create);
     router.put('/usuario/update', UsuarioController.update);
     router.delete('/usuario/delete', UsuarioController.delete);

     router.get('/proveedor/get', ProveedorController.get);
     router.post('/proveedor/create', ProveedorController.create);
     router.put('/proveedor/update', ProveedorController.update);
     router.delete('/proveedor/delete', ProveedorController.delete);

     
     router.get('/compra/get', ComprasController.get);
     router.post('/compra/create', ComprasController.create);
     router.put('/compra/update', ComprasController.update);
     router.delete('/compra/delete', ComprasController.delete);

     router.get('/inventario/get', InventarioController.get);
     router.post('/inventario/create', InventarioController.create);
     router.put('/inventario/update',InventarioController.update);
     router.delete('/inventario/delete', InventarioController.delete);

     router.get('/empleado/get', EmpleadoController.get);
     router.post('/empleado/create', EmpleadoController.create);
     router.put('/empleado/update',EmpleadoController.update);
     router.delete('/empleado/delete', EmpleadoController.delete);

     router.get('/producto/get', ProductoController.get);
     router.post('/producto/create', ProductoController.create);
     router.put('/producto/update',ProductoController.update);
     router.delete('/producto/delete', ProductoController.delete);

     app.use('/', router);
}
