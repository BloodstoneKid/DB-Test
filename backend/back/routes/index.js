const { Router } = require('express');
const router = Router();
//const {} = require('../controllers/index.controller');

//Gets
router.get('/getinfotiendas', getInfoTiendas);
router.get('/getinfoproductos/:id', getInfoProductos);
router.get('/getinfocategorias/:id', getInfoCategorias);
router.get('/getinfotodascategorias', getInfoTodasCategorias);
router.get('/getinfoofertas/:id', getInfoOfertas);
router.get('/getinfoeventos/:id', getInfoEventos);
router.get('/getinfomenu/:id', getInfoMenu);
router.get('/getinfofacturas/:id', getInfoFacturas);
router.get('/getinfotienda/:id', getInfoTienda);
router.get('/getinfoproducto/:id', getInfoProducto);
router.get('/getproductosrelacionados/:id', getProductosRelacionados);
router.get('/getinfocategoria/:id', getInfoCategoria);
router.get('/getsubcategorias/:id', getSubCategorias);
router.get('/getinfooferta/:id', getInfoOferta);
router.get('/getinfoevento/:id', getInfoEvento);
router.get('/getinfoplato/:id', getInfoPlato);
router.get('/getcategoria/:id', getCategoria);
router.get('/getcatalogo/:id', getCatalogo);
router.get('/getregion', getRegion);
router.get('/getregioncatalogo', getRegionCatalogo);
//Posts
router.post('/afiliarcliente', AfiliarCliente);
router.post('/crearfactura', crearFactura);
router.post('/crearcategoria', crearCategoria);
router.post('/crearproducto', crearProducto);
router.post('/crearplato', crearPlato);
router.post('/crearoferta', crearOferta);
router.post('/crearevento', crearEvento);
//Puts
router.put('/updatecategoria/:id', updateCategoria);
router.put('/updateproducto/:id', updateProducto);
router.put('/updateplato/:id', updatePlato);
router.put('/updateoferta/:id', updateOferta);
router.put('/updateevento/:id', updateEvento);
//Deletes
router.delete('/deletecategoria',deleteCategoria);
router.delete('/deleteproducto',deleteProducto);
router.delete('/deleteplato',deletePlato);
router.delete('/deleteoferta',deleteOferta);
router.delete('/deleteevento',deleteEvento);

module.exports = router;