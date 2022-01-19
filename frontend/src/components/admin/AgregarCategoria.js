import React, { useEffect, useState } from 'react';
import '../Sections.css';

function AgregarCategoria(){

    const [nombre, setNombre] = useState('');
    const [nivel, setNivel] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [catrelacionada, setCatRelacionada] = useState('');
    const [items, setItems] = useState([]);


    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('/getsupercategorias');
        const items = await data.json();
        setItems(items);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const categoria = { nombre, nivel, descripcion, catrelacionada } 
    

    fetch('/crearcategoria', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(categoria)
    });
 };

    return(<section>
         <h2>Agregar categoria</h2>
      <form onSubmit={handleSubmit}>
      <div class="card-body p-1">
        <label>Nombre:</label>
        <input 
          type="text" 
          required 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Nivel:</label>
       <select name="nivel" 
       id="nivel" 
       required 
       onChange={(e) => setNivel(e.target.value)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
       </select>
        <label>Descripcion:</label>
        <input 
          type="text" 
          required 
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label>Supercategoria (opcional):</label>
       <select name="catrelacionada" 
       id="catrelacionada" 
       onChange={(e) => setCatRelacionada(e.target.value)}>
        {items.map(item =>(
            <option value={item.id_categoria}>{item.nombre}</option>
        ))}
       </select>
        <button>Crear</button>
        </div>
      </form>
    </section>);
}

export default AgregarCategoria;