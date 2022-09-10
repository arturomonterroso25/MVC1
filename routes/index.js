const { Router } = require('express');
const router = Router();

const UsuarioController = require('../controllers/UsuarioController');
const TipoUsuarioController = require('../controllers/TipoUsuarioController');
const EmpleadoController = require('../controllers/EmpleadoController');
const DepartamentoController = require('../controllers/DepartamentoController');
const ProveedorController = require('../controllers/ProveedorController');

module.exports = (app) => {
     router.get('/usuario/get', UsuarioController.get);
     router.post('/usuario/create', UsuarioController.create);
     router.put('/usuario/update', UsuarioController.update);
     router.delete('/usuario/delete', UsuarioController.delete);

     router.get('/tipo_usuario/get', TipoUsuarioController.get);
     router.post('/tipo_usuario/create', TipoUsuarioController.create);
     router.put('/tipo_usuario/update', TipoUsuarioController.update);
     router.delete('/tipo_usuario/delete', TipoUsuarioController.delete);

     router.get('/empleado/get', EmpleadoController.get);
     router.post('/empleado/create', EmpleadoController.create);
     router.put('/empleado/update', EmpleadoController.update);
     router.delete('/empleado/delete', EmpleadoController.delete);

     router.get('/departamento/get', DepartamentoController.get);
     router.post('/departamento/create', DepartamentoController.create);
     router.put('/departamento/update', DepartamentoController.update);
     router.delete('/departamento/delete', DepartamentoController.delete);

     router.get('/proveedor/get', ProveedorController.get);
     router.post('/proveedor/create', ProveedorController.create);
     router.put('/proveedor/update', ProveedorController.update);
     router.delete('/proveedor/delete', ProveedorController.delete);
     
     app.use('/', router);
}