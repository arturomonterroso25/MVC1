const { Router } = require('express');
const router = Router();

const UsuarioController = require('../controllers/UsuarioController');
const TipoUsuarioController = require('../controllers/TipoUsuarioController')
const ClientesController = require('../controllers/ClientesController')
const VentasController = require('../controllers/VentasController')
const ProductosController = require('../controllers/ProductosController')
const InventarioController = require('../controllers/InventarioController')
const ComprasController = require('../controllers/ComprasController')
const ProveedoresController = require('../controllers/ProveedoresController')

module.exports = (app) => {
     router.get('/usuario/get', UsuarioController.get);
     router.post('/usuario/create', UsuarioController.create);
     router.put('/usuario/update', UsuarioController.update);
     router.delete('/usuario/delete', UsuarioController.delete);

     router.get('/tipo_usuario/get', TipoUsuarioController.get);
     router.post('/tipo_usuario/create', TipoUsuarioController.create);
     router.put('/tipo_usuario/update', TipoUsuarioController.update);
     router.delete('/tipo_usuario/delete', TipoUsuarioController.delete);

     router.get('/cliente/get', ClientesController.get);
     router.post('/cliente/create', ClientesController.create);
     router.put('/cliente/update', ClientesController.update);
     router.delete('/cliente/delete', ClientesController.delete);

     router.get('/venta/get', VentasController.get);
     router.post('/venta/create', VentasController.create);
     router.put('/venta/update', VentasController.update);
     router.delete('/venta/delete', VentasController.delete);

     router.get('/producto/get', ProductosController.get);
     router.post('/producto/create', ProductosController.create);
     router.put('/producto/update', ProductosController.update);
     router.delete('/producto/delete', ProductosController.delete);

     router.get('/inventario/get', InventarioController.get);
     router.post('/inventario/create', InventarioController.create);
     router.put('/inventario/update', InventarioController.update);
     router.delete('/inventario/delete', InventarioController.delete);

     router.get('/compras/get', ComprasController.get);
     router.post('/compras/create', ComprasController.create);
     router.put('/compras/update', ComprasController.update);
     router.delete('/compras/delete', ComprasController.delete);

     router.get('/proveedores/get', ProveedoresController.get);
     router.post('/proveedores/create', ProveedoresController.create);
     router.put('/proveedores/update', ProveedoresController.update);
     router.delete('/proveedores/delete', ProveedoresController.delete);

     app.use('/', router);
}