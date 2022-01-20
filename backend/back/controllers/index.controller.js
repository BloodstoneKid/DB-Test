const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'amy_ikea_proyecto'
})

//Gets
const getInfoTiendas = async (req, res) => {
    const response = await pool.query('SELECT * FROM ((AMY_Tienda INNER JOIN AMY_Region ON AMY_Tienda.Region_id_region = AMY_Region.id_region)INNER JOIN AMY_Horario ON AMY_Tienda.Region_id_region = AMY_Horario.Region_id_region);');
    res.end(JSON.stringify(response.rows));
}
const getInfoProductos = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Producto INNER JOIN AMY_Catalogo ON AMY_Producto.Catalogo_id_catalogo = AMY_Catalogo.id_catalogo INNER JOIN AMY_Region ON AMY_Catalogo.Region_id_region = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoCategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Categoria INNER JOIN AMY_P_C ON AMY_Categoria.id_categoria = AMY_P_C.categoria_id_categoria INNER JOIN AMY_Producto ON AMY_P_C.producto_id_producto = AMY_Producto.id_producto INNER JOIN AMY_Catalogo ON AMY_Producto.Catalogo_id_catalogo = AMY_Catalogo.id_catalogo INNER JOIN AMY_Region ON AMY_Catalogo.Region_id_region = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoTodasCategorias = async (req, res) => {
    const response = await pool.query('SELECT * FROM AMY_Categoria;');
    res.end(JSON.stringify(response.rows));
}
const getInfoOfertas = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Descuento INNER JOIN AMY_D_C ON AMY_Descuento.id_descuento = AMY_D_C.Descuento_id_descuento INNER JOIN AMY_Categoria ON AMY_Categoria.id_categoria = AMY_D_C.categoria_id_categoria INNER JOIN AMY_P_C ON AMY_Categoria.id_categoria = AMY_P_C.categoria_id_categoria INNER JOIN AMY_Producto ON AMY_P_C.producto_id_producto = AMY_Producto.id_producto INNER JOIN AMY_Catalogo ON AMY_Producto.Catalogo_id_catalogo = AMY_Catalogo.id_catalogo INNER JOIN AMY_Region ON AMY_Catalogo.Region_id_region = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoEventos = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Evento INNER JOIN AMY_Tienda ON AMY_Evento.Tienda_id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoMenu = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Plato INNER JOIN AMY_Menu_mes ON AMY_Plato.id_plato = AMY_Menu_mes.Plato_id_plato INNER JOIN AMY_Tienda ON AMY_Menu_mes.Tienda_id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoFacturas = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Factura INNER JOIN AMY_caja ON AMY_Factura.caja_id_caja = AMY_caja.id_caja INNER JOIN AMY_Tienda ON AMY_caja.Tienda_id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoDetalleFactura = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Det_factura INNER JOIN AMY_Factura ON $1 = AMY_Det_factura.Factura_id_factura INNER JOIN AMY_Producto ON AMY_Det_factura.Catalogo_id_catalogo = AMY_Producto.Catalogo_id_catalogo;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoTienda = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Tienda WHERE AMY_Tienda.id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoProducto = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Producto WHERE AMY_Producto.id_producto = $1 INNER JOIN AMY_D_P ON AMY_Producto.id_producto = AMY_D_P.Producto_id_producto INNER JOIN AMY_Diseñador ON AMY_Diseñador.id_dise = AMY_D_P.Diseñador_id_dise;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getProductosRelacionados = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT id_producto FROM AMY_Producto INNER JOIN AMY_Relacion ON (AMY_Producto.id_producto = AMY_Relacion.producto_id_producto) OR (AMY_Producto.id_producto = AMY_Relacion.producto_2_id_producto) INNER JOIN AMY_Producto ON ($1 = AMY_Relacion.producto_id_producto) OR ($1 = AMY_Relacion.producto_2_id_producto);',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoCategoria = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Categoria WHERE AMY_Categoria.id_categoria = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getSubCategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Categoria INNER JOIN AMY_Categoria ON AMY_Categoria.fk_categoria = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoOferta = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Descuento WHERE AMY_Descuento.id_descuento = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoEvento = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Evento WHERE AMY_Evento.id_evento = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoPlato = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM AMY_Plato WHERE AMY_Plato.id_plato = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getCiudades = async (req, res) => {
    const response = await pool.query('SELECT id_region, nombre FROM AMY_Region WHERE AMY_Region.tipo = "ciudad";');
    res.end(JSON.stringify(response.rows));
}
const getSuperCategorias = async (req, res) => {
    const response = await pool.query('SELECT id_categoria, nombre FROM AMY_Categoria WHERE AMY_Categoria.nivel = 1;');
    res.end(JSON.stringify(response.rows));
}
const getDisenador = async (req, res) => {
    const response = await pool.query('SELECT * FROM AMY_Diseñador;');
    res.end(JSON.stringify(response.rows));
}
//Posts
const AfiliarCliente = async (req, res) => {
    const { identificacion,nombre,apellido,
        segnombre,segapellido,fechanac,ciudad, fechahoy  } = req.body;
    const response = await pool.query('INSERT INTO AMY_Cliente (id_cliente, nombre, seg_nombre, apellido, seg_apellido, fecha_nacimiento, Region_id_region) VALUES ($1, $2, $4, $3, $5, $6, $7); INSERT INTO AMY_Afiliado (fecha, cliente_id_cliente) VALUES ($8, $1);', [identificacion,nombre,apellido,
        segnombre,segapellido,fechanac,ciudad, fechahoy]);
}
const AgregarHijo = async (req, res) => {
    const { nombre, apellido, genero, fechanac, id  } = req.body;
    const response = await pool.query('INSERT INTO AMY_Hijo (nombre, apellido, genero, fecha_nacimiento, cliente_id_cliente) VALUES ($1, $2, $3, $4, $5);', [nombre, apellido, genero, fechanac, id]);
}
const crearCategoria = async (req, res) => {
    const { nombre, nivel, descripcion, fk_categoria  } = req.body;
    const response = await pool.query('INSERT INTO AMY_Categoria (nombre, nivel, descripcion, fk_categoria) VALUES ($1, $2, $3, $4);', [nombre, nivel, descripcion, fk_categoria]);
}

const crearPlato = async (req, res) => {
    const { nombre, tipo, descripcion, fecha_ini, fecha_final, precio,  id } = req.body;
    const response = await pool.query('INSERT INTO AMY_Plato (nombre, tipo, descripcion) VALUES ($1, $2, $3); INSERT INTO AMY_Menu_mes(fecha_inicio, fecha_final, precio, Tienda_id_tienda) VALUES($4, $5, $6, $7);', [nombre, tipo, descripcion, fecha_ini, fecha_final, precio,  id]);
}

const crearProducto = async (req, res) => {
    const { nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo, disenador } = req.body;
    const response = await pool.query('INSERT INTO AMY_Producto (nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id; INSERT INTO AMY_D_P(Diseñador_id_dise, Producto_id_producto) VALUES($12, id)', [nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo, disenador]);
}

const crearEvento = async (req, res) => {
    const { fecha_ini, fecha_final, descripcion, nombre, Tienda_id_tienda } = req.body;
    const response = await pool.query('INSERT INTO AMY_Evento (fecha_ini, fecha_final, descripcion, nombre, Tienda_id_tienda) VALUES ($1, $2, $3, $4, $5);', [fecha_ini, fecha_final, descripcion, nombre, Tienda_id_tienda]);
}

const crearMenu = async (req, res) => {
    const { fecha_inicio, fecha_final, precio, Tienda_id_tienda, Plato_id_plato } = req.body;
    const response = await pool.query('INSERT INTO AMY_Menu_mes (fecha_inicio, fecha_final, precio, Tienda_id_tienda, Plato_id_plato) VALUES ($1, $2, $3, $4, $5);', [fecha_inicio, fecha_final, precio, Tienda_id_tienda, Plato_id_plato]);
}

const crearOferta = async (req, res) => {
    const { porcentaje, fecha_inicio, fecha_fin, categoria } = req.body;
    const response = await pool.query('INSERT INTO AMY_Descuento (porcentaje, fecha_inicio, fecha_fin) VALUES ($1, $2, $3) RETURNING id; INSERT INTO AMY_D_C(Descuento_id_descuento, Categoria_id_categoria) VALUES(id, $4);', [porcentaje, fecha_inicio, fecha_fin, categoria]);
}

const crearFactura = async (req, res) => {
    const { necesita_transporte, fecha, total, forma_pago, caja_id_caja, Instrumento_id_instrumento } = req.body;
    const response = await pool.query('INSERT INTO AMY_Factura (necesita_transporte, fecha, total, forma_pago, caja_id_caja, Instrumento_id_instrumento) VALUES ($1, $2, $3, $4, $5, $6);', [necesita_transporte, fecha, total, forma_pago, caja_id_caja, Instrumento_id_instrumento]);
}



//Puts
const updateCatalogo = async (req, res) => {
    const id_catalogo = parseInt(req.params.id_catalogo);
    const { fecha_inicial, fecha_final, Region_id_region } = req.body;

    const response =await pool.query('UPDATE AMY_Catalogo SET fecha_inicial = $1, fecha_final = $2 , Region_id_region = $3 WHERE id_catalogo = $4;', [
        fecha_inicial, fecha_final, Region_id_region, id_catalogo
    ]);
};

const updateCategoria = async (req, res) => {
    const id_categoria = parseInt(req.params.id_categoria);
    const { nombre, nivel, descripcion, fk_categoria } = req.body;

    const response =await pool.query('UPDATE AMY_Categoria SET nombre = $1, nivel = $2 , descripcion = $3, fk_categoria = $4 WHERE id_categoria = $5;', [
        nombre, nivel, descripcion, fk_categoria, id_categoria
    ]);
};

const updateMenu = async (req, res) => {
    const fecha_inicio = parseInt(req.params.fecha_inicio);
    const { fecha_final, precio, Tienda_id_tienda, Plato_id_plato } = req.body;

    const response =await pool.query('UPDATE AMY_Menu_mes SET fecha_final = $1, precio = $2, Tienda_id_tienda = $3, Plato_id_plato = $4 WHERE fecha_inicio = $5;', [
        fecha_final, precio, Tienda_id_tienda, Plato_id_plato, fecha_inicio
    ]);
};

const updateEvento = async (req, res) => {
    const id_evento = parseInt(req.params.id_evento);
    const { fecha_ini, fecha_final, descripcion, nombre, Tienda_id_tienda } = req.body;

    const response =await pool.query('UPDATE AMY_Evento SET fecha_ini = $1, fecha_final = $2, descripcion = $3, nombre = $4, Tienda_id_tienda = $5 WHERE id_evento = $6;', [
        fecha_ini, fecha_final, descripcion, nombre, Tienda_id_tienda, id_evento
    ]);
};

const updateOferta = async (req, res) => {
    const id_descuento = parseInt(req.params.id_descuento);
    const { porcentaje, fecha_inicio, fecha_fin } = req.body;

    const response =await pool.query('UPDATE AMY_Descuento SET porcentaje = $1, fecha_inicio = $2, fecha_fin = $3 WHERE id_descuento = $5;', [
        porcentaje, fecha_inicio, fecha_fin, id_descuento
    ]);
};

const updatePlato = async (req, res) => {
    const id_plato = parseInt(req.params.id_plato);
    const { nombre, tipo, descripcion } = req.body;

    const response =await pool.query('UPDATE AMY_Plato SET nombre = $1, tipo = $2 , descripcion = $3 WHERE id_plato = $4;', [
        nombre, tipo, descripcion, id_plato
    ]);
};

const updateProducto = async (req, res) => {
    const id_producto = parseInt(req.params.id_producto);
    const { nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo } = req.body;

    const response =await pool.query('UPDATE AMY_Producto SET nombre = $1, imagen = $2, caracteristicas = $3, precio = $4, colores = $5, instrucciones = $6, descripcion = $7, ancho = $8, largo = $9, requiere_montaje = $10, Catalogo_id_catalogo = $11 WHERE id_producto = $12;', [
        nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo, id_producto
    ]);
};




//Deletes

const deleteCategoria = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('DELETE FROM AMY_Categoria WHERE AMY_Categoria.id_categoria = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const deleteProducto = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('DELETE FROM AMY_Producto WHERE AMY_Producto.id_producto = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const deletePlato = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('DELETE FROM AMY_Plato WHERE AMY_Plato.id_plato = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const deleteOferta = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('DELETE FROM AMY_Descuento WHERE AMY_Descuento.id_descuento = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const deleteEvento = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('DELETE FROM AMY_Evento WHERE AMY_Evento.id_evento = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}





module.exports = {
    getInfoCategoria,
    getInfoCategorias,
    getInfoEvento,
    getInfoEventos,
    getInfoFacturas,
    getInfoDetalleFactura,
    getInfoMenu,
    getInfoOferta,
    getInfoOfertas,
    getInfoPlato,
    getInfoProducto,
    getInfoProductos,
    getInfoTienda,
    getInfoTiendas,
    getInfoTodasCategorias,
    getProductosRelacionados,
    getSubCategorias,
    AfiliarCliente,
    AgregarHijo,
    crearCategoria,
    crearEvento,
    crearFactura,
    crearMenu,
    crearOferta,
    crearPlato,
    crearProducto,
    updateCatalogo,
    updateCategoria,
    updateEvento,
    updateMenu,
    updateOferta,
    updatePlato,
    updateProducto,
    deleteCategoria,
    deleteEvento,
    deleteOferta,
    deletePlato,
    deleteProducto,
    getCiudades,
    getSuperCategorias,
    getDisenador
}
