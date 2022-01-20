import React, { useEffect, useState } from 'react';
import '../Sections.css';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

//id_producto, nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo

function EditarProducto(){
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

    useEffect( () => {
        fetchItems();
    }, []);
 
    const fetchItems = async () => {
        const data = await fetch('/getinfoproductos');
        const items = await data.json();
        setItems(items);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const producto = { nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje, Catalogo_id_catalogo } 

    fetch(`/updateproducto/${id_producto}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    });
    window.location.reload();
    };
    return(<section>
        <h2>Editar producto</h2>
        <Form className="create-form" onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Nombre del Producto</label>
                    <input placeholder='{nombre}' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Imagen</label>
                    <input type = "file" onChange={(e) => setImagen(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Caracteristicas</label>
                    <input  placeholder='{caracteristicas}' value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <input type="number" placeholder='{Precio}' value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Colores</label>
                    <input  placeholder='{Colores}' value={colores} onChange={(e) => setColores(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Instrucciones</label>
                    <input  placeholder='{Instrucciones}' value={instrucciones} onChange={(e) => setInstrucciones(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descripcion</label>
                    <input  placeholder='{Descripcion}' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Ancho</label>
                    <input type="number" placeholder='{Ancho}' value={ancho} onChange={(e) => setAncho(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Largo</label>
                    <input type="number" placeholder='{Largo}' value={largo} onChange={(e) => setLargo(e.target.value)}/>
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
                <Button type='submit'>Modificar</Button>
            </Form>
   </section>);
};

export default EditarProducto;