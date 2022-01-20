import React, { useEffect, useState, setState } from 'react';
import '../Sections.css';

function CrearProducto(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);


    const [nombre, setNombre] = useState('');
    const [imagen, setNombre] = useState('');
    const [caracteristicas, setCaracteristicas] = useState('');
    const [precio, setPrecio] = useState('');
    const [colores, setColores] = useState('');
    const [instrucciones, setInstrucciones] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [ancho, setAncho] = useState('');
    const [largo, setLargo] = useState('');
    const [requiere_montaje, setMontaje] = useState('');
    const [Catalogo_id_catalogo, setCatalogo] = useState('');

    //const [Categoria_id_categoria, setCategoria] = useState('');
    //const [Producto_id_producto, setP_c] = useState('');

    const fetchCatalogo = (e) => {
        const data = await fetch(`/getcatalogo/${id}`);
        const items = await data.json();
        setItems(items);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const producto = { nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo } ;
        //const p_c = {Categoria_id_categoria, Producto_id_producto}

    fetch(`/crearproducto`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    });
    window.location.reload();
    };
    return(<section>
        <h2>Agregar producto</h2>
        <Form className="create-form" onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Nombre del Producto</label>
                    <input placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Imagen</label>
                    <input type = "file" value={imagen} onChange={(e) => setImagen(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Caracteristicas</label>
                    <input  placeholder='Caracteristicas' value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <input type="number" placeholder='1' value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Colores</label>
                    <input  placeholder='Colores' value={colores} onChange={(e) => setColores(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Instrucciones</label>
                    <input  placeholder='Instrucciones' value={instrucciones} onChange={(e) => setInstrucciones(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descripcion</label>
                    <input  placeholder='Descripcion' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Ancho</label>
                    <input type="number" placeholder='1' value={ancho} onChange={(e) => setAncho(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Largo</label>
                    <input type="number" placeholder='1' value={largo} onChange={(e) => setLargo(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Requiere Montaje?</label>
                    <input type="radio" checked="checked" name="radio" value="true" onChange={(e) => setMontaje(e.target.value)}>Sí</input>
                    <input type="radio" name="radio" value="false" onChange={(e) => setMontaje(e.target.value)}>No</input>
                </Form.Field>
                <Form.Field>
                    <label>Catálogo</label>
                    <Select className="basic-single" classNamePrefix="select" onChange={(e) => setCatalogo(e.target.value)}>
                        {
                            items.map(item => (
                                <option value={item.id_catalogo}>{item.fecha_inicial} - {item.fecha_final}</option>
                              ))
                        }
                    </Select>
                </Form.Field>
                <Button type='submit'>Agregar</Button>
            </Form>
   </section>);
};

export default CrearProducto;