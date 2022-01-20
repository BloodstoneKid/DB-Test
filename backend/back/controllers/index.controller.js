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
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Producto INNER JOIN AMY_Catalogo ON AMY_Producto.Catalogo_id_catalogo = AMY_Catalogo.id_catalogo INNER JOIN AMY_Region ON AMY_Catalogo.Region_id_region = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoCategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Categoria INNER JOIN AMY_P_C ON AMY_Categoria.id_categoria = AMY_P_C.categoria_id_categoria INNER JOIN AMY_Producto ON AMY_P_C.producto_id_producto = AMY_Producto.id_producto INNER JOIN AMY_Catalogo ON AMY_Producto.Catalogo_id_catalogo = AMY_Catalogo.id_catalogo INNER JOIN AMY_Region ON AMY_Catalogo.Region_id_region = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoTodasCategorias = async (req, res) => {
    const response = await pool.query('SELECT * FROM AMY_Categoria;');
    res.end(JSON.stringify(response.rows));
}
const getInfoOfertas = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Descuento INNER JOIN AMY_D_C ON AMY_Descuento.id_descuento = AMY_D_C.Descuento_id_descuento INNER JOIN AMY_Categoria ON AMY_Categoria.id_categoria = AMY_D_C.categoria_id_categoria INNER JOIN AMY_P_C ON AMY_Categoria.id_categoria = AMY_P_C.categoria_id_categoria INNER JOIN AMY_Producto ON AMY_P_C.producto_id_producto = AMY_Producto.id_producto INNER JOIN AMY_Catalogo ON AMY_Producto.Catalogo_id_catalogo = AMY_Catalogo.id_catalogo INNER JOIN AMY_Region ON AMY_Catalogo.Region_id_region = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoEventos = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Evento INNER JOIN AMY_Tienda ON AMY_Evento.Tienda_id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoMenu = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Menu_mes INNER JOIN AMY_Tienda ON AMY_Menu_mes.Tienda_id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoFacturas = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Factura INNER JOIN AMY_caja ON AMY_Factura.caja_id_caja = AMY_caja.id_caja INNER JOIN AMY_Tienda ON AMY_caja.Tienda_id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoTienda = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Tienda WHERE AMY_Tienda.id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoProducto = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Producto WHERE AMY_Producto.id_producto = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getProductosRelacionados = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT id_producto FROM AMY_Producto INNER JOIN AMY_Relacion ON (AMY_Producto.id_producto = AMY_Relacion.producto_id_producto) OR (AMY_Producto.id_producto = AMY_Relacion.producto_2_id_producto) INNER JOIN AMY_Producto ON ($1 = AMY_Relacion.producto_id_producto) OR ($1 = AMY_Relacion.producto_2_id_producto);',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoCategoria = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Categoria WHERE AMY_Categoria.id_categoria = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getSubCategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Categoria INNER JOIN AMY_Categoria ON AMY_Categoria.fk_categoria = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoOferta = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Descuento WHERE AMY_Descuento.id_descuento = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoEvento = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Evento WHERE AMY_Evento.id_evento = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoPlato = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Plato WHERE AMY_Plato.id_plato = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoSubcategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Categoria WHERE AMY_Categoria.nivel > 1;');
    res.end(JSON.stringify(response.rows));
}
const getCategoria = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Categoria WHERE AMY_Categoria.id_categoria = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getCatalogo = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Catalogo INNER JOIN AMY_Region.id_region ON AMY_Catalogo.Region_id_region = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getRegion = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Region WHERE AMY_Region.tipo = "Pais" ;');
    res.end(JSON.stringify(response.rows));
}
const getRegionCatalogo = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Region INNER JOIN AMY_Catalogo ON AMY_Region.id_region = AMY_Catalogo.Region_id_region = $1 ;',[id]);
    res.end(JSON.stringify(response.rows));
}




//Posts
const AfiliarCliente = async (req, res) => {
    const { fecha, cliente_id_cliente  } = req.body;
    const response = await pool.query('INSERT INTO AMY_Afiliado (fecha, cliente_id_cliente) VALUES ($1, $2)', [fecha, cliente_id_cliente]);
}

const crearCategoria = async (req, res) => {
    const { nombre, nivel, descripcion, fk_categoria  } = req.body;
    const response = await pool.query('INSERT INTO AMY_Categoria (nombre, nivel, descripcion, fk_categoria) VALUES ($1, $2, $3, $4)', [nombre, nivel, descripcion, fk_categoria]);
}

const crearPlato = async (req, res) => {
    const { nombre, tipo, descripcion } = req.body;
    const response = await pool.query('INSERT INTO AMY_Plato (nombre, tipo, descripcion) VALUES ($1, $2, $3)', [nombre, tipo, descripcion]);
}

const crearProducto = async (req, res) => {
    const { nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo } = req.body;
    const response = await pool.query('INSERT INTO AMY_Producto (nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo]);
}

const crearEvento = async (req, res) => {
    const { fecha_ini, fecha_final, descripcion, nombre, Tienda_id_tienda } = req.body;
    const response = await pool.query('INSERT INTO AMY_Evento (fecha_ini, fecha_final, descripcion, nombre, Tienda_id_tienda) VALUES ($1, $2, $3, $4, $5)', [fecha_ini, fecha_final, descripcion, nombre, Tienda_id_tienda]);
}

const crearMenu = async (req, res) => {
    const { fecha_inicio, fecha_final, precio, Tienda_id_tienda, Plato_id_plato } = req.body;
    const response = await pool.query('INSERT INTO AMY_Menu_mes (fecha_inicio, fecha_final, precio, Tienda_id_tienda, Plato_id_plato) VALUES ($1, $2, $3, $4, $5)', [fecha_inicio, fecha_final, precio, Tienda_id_tienda, Plato_id_plato]);
}

const crearOferta = async (req, res) => {
    const { porcentaje, fecha_inicio, fecha_fin } = req.body;
    const response = await pool.query('INSERT INTO AMY_Descuento (porcentaje, fecha_inicio, fecha_fin) VALUES ($1, $2, $3)', [porcentaje, fecha_inicio, fecha_fin]);
}

const crearFactura = async (req, res) => {
    const { necesita_transporte, fecha, total, forma_pago, caja_id_caja, Instrumento_id_instrumento } = req.body;
    const response = await pool.query('INSERT INTO AMY_Factura (necesita_transporte, fecha, total, forma_pago, caja_id_caja, Instrumento_id_instrumento) VALUES ($1, $2, $3, $4, $5, $6)', [necesita_transporte, fecha, total, forma_pago, caja_id_caja, Instrumento_id_instrumento]);
}



//Puts
const updateCatalogo = async (req, res) => {
    const id_catalogo = parseInt(req.params.id_catalogo);
    const { fecha_inicial, fecha_final, Region_id_region } = req.body;

    const response =await pool.query('UPDATE AMY_Catalogo SET fecha_inicial = $1, fecha_final = $2 , Region_id_region = $3 WHERE id_catalogo = $4', [
        fecha_inicial, fecha_final, Region_id_region, id_catalogo
    ]);
};

const updateCategoria = async (req, res) => {
    const id_categoria = parseInt(req.params.id_categoria);
    const { nombre, nivel, descripcion, fk_categoria } = req.body;

    const response =await pool.query('UPDATE AMY_Categoria SET nombre = $1, nivel = $2 , descripcion = $3, fk_categoria = $4 WHERE id_categoria = $5', [
        nombre, nivel, descripcion, fk_categoria, id_categoria
    ]);
};

const updateMenu = async (req, res) => {
    const fecha_inicio = parseInt(req.params.fecha_inicio);
    const { fecha_final, precio, Tienda_id_tienda, Plato_id_plato } = req.body;

    const response =await pool.query('UPDATE AMY_Menu_mes SET fecha_final = $1, precio = $2, Tienda_id_tienda = $3, Plato_id_plato = $4 WHERE fecha_inicio = $5', [
        fecha_final, precio, Tienda_id_tienda, Plato_id_plato, fecha_inicio
    ]);
};

const updateEvento = async (req, res) => {
    const id_evento = parseInt(req.params.id_evento);
    const { fecha_ini, fecha_final, descripcion, nombre, Tienda_id_tienda } = req.body;

    const response =await pool.query('UPDATE AMY_Evento SET fecha_ini = $1, fecha_final = $2, descripcion = $3, nombre = $4, Tienda_id_tienda = $5 WHERE id_evento = $6', [
        fecha_ini, fecha_final, descripcion, nombre, Tienda_id_tienda, id_evento
    ]);
};

const updateOferta = async (req, res) => {
    const id_descuento = parseInt(req.params.id_descuento);
    const { porcentaje, fecha_inicio, fecha_fin } = req.body;

    const response =await pool.query('UPDATE AMY_Descuento SET porcentaje = $1, fecha_inicio = $2, fecha_fin = $3 WHERE id_descuento = $5', [
        porcentaje, fecha_inicio, fecha_fin, id_descuento
    ]);
};

const updatePlato = async (req, res) => {
    const id_plato = parseInt(req.params.id_plato);
    const { nombre, tipo, descripcion } = req.body;

    const response =await pool.query('UPDATE AMY_Plato SET nombre = $1, tipo = $2 , descripcion = $3 WHERE id_plato = $4', [
        nombre, tipo, descripcion, id_plato
    ]);
};

const updateProducto = async (req, res) => {
    const id_producto = parseInt(req.params.id_producto);
    const { nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo } = req.body;

    const response =await pool.query('UPDATE AMY_Producto SET nombre = $1, imagen = $2, caracteristicas = $3, precio = $4, colores = $5, instrucciones = $6, descripcion = $7, ancho = $8, largo = $9, requiere_montaje = $10, Catalogo_id_catalogo = $11 WHERE id_producto = $12', [
        nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo, id_producto
    ]);
};




//Deletes




/*
GET
const getMembers = async (req, res) => {
    const response = await pool.query('SELECT * FROM miembro;');
    res.end(JSON.stringify(response.rows));
}

POST
const createMember = async (req, res) => {
    const { cedula, nombre, apellido, edad } = req.body;
    const response = await pool.query('INSERT INTO miembro (cedula, nombre, apellido, edad) VALUES ($1, $2, $3, $4)', [cedula, nombre, apellido, edad]);
}

PUT
const updateMember = async (req, res) => {
    const cedula = parseInt(req.params.cedula);
    const { nombre, apellido, edad } = req.body;

    const response =await pool.query('UPDATE miembro SET nombre = $1, apellido = $2 , edad = $3 WHERE cedula = $4', [
        nombre, apellido, edad, cedula
    ]);
};

module.exports = {
    getMembers,
    createMember,
    updateMember
}
*/