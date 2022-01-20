import React, { useEffect, useState, setState } from 'react';
import '../Sections.css';
import Select from 'react-select'
import React, { Component } from 'react';

function AgregarCategoria(){
    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('/getinfotodascategorias');
        const items = await data.json();
        setItems(items);
    };

    const [nombre, setNombre] = useState('');
    const [nivel, setNivel] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fk_categoria, setFK_Categoria] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const categoria = { nombre, nivel, descripcion, fk_categoria } 

    fetch(`/crearcategoria/`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(categoria)
    });
    window.location.reload();
    };
    return(<section>
        <h2>Agregar categoría</h2>
        <Form className="create-form" onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Nombre de la Categoría</label>
                    <input placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nivel de Categoría</label>
                    <input  placeholder='1' value={nivel} onChange={(e) => setNivel(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descripción</label>
                    <input type="number" placeholder='Descripcion' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Subcategoría</label>
                    <Select className="basic-single" classNamePrefix="select" onChange={(e) => setFK_Categoria(e.target.value)}>
                        {
                            items.map(item => (
                                <option value={item.id_categoria}>{item.nombre}</option>
                              ))
                        }
                    </Select>
                </Form.Field>
                <Button type='submit'>Agregar</Button>
            </Form>
   </section>);
};

export default AgregarCategoria;