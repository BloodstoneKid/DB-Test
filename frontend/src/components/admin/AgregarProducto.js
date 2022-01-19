import React, { useEffect, useState } from 'react';
import '../Sections.css';

function AgregarProducto(){
    const [nombre, setNombre] = useState('');
    const [imagen, setImagen] = useState('');
    const [caracteristicas, setCaracteristicas] = useState('');
    const [precio, setPrecio] = useState('');
    const [colores, setColores] = useState('');
    const [instrucciones, setInstrucciones] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [ancho, setAncho] = useState('');
    const [largo, setLargo] = useState('');
    const [requiere_montaje, setMontaje] = useState('');

    const id = 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const producto = { nombre, imagen, caracteristicas, precio, colores, instrucciones, descripcion, ancho, largo, requiere_montaje,  id } 
    

    fetch('/crearproducto', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    });
 };

    return(<section>
         <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
      <div class="card-body p-1">
        <label>Nombre:</label>
        <input 
          type="text" 
          required 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Imagen:</label>
        <input 
          type="file" 
          required 
          accept='image/*'
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        <label>Caracteristicas:</label>
        <input 
          type="text" 
          required 
          value={caracteristicas}
          onChange={(e) => setCaracteristicas(e.target.value)}
        />
        <label>Precio:</label>
        <input 
          type="number" 
          required 
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <label>Colores:</label>
        <input 
          type="text" 
          required 
          value={colores}
          onChange={(e) => setColores(e.target.value)}
        />
        <label>Instrucciones:</label>
        <input 
          type="text" 
          required 
          value={instrucciones}
          onChange={(e) => setInstrucciones(e.target.value)}
        />
        <label>Descripcion:</label>
        <input 
          type="text" 
          required 
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label>Ancho:</label>
        <input 
          type="number" 
          required 
          value={ancho}
          onChange={(e) => setAncho(e.target.value)}
        />
        <label>Largo:</label>
        <input 
          type="number" 
          required 
          value={largo}
          onChange={(e) => setLargo(e.target.value)}
        />
        <label>Requiere montaje?:</label>
       <select name="reqmontaje" 
       id="reqmontaje" 
       onChange={(e) => setMontaje(e.target.value)}>
            <option value="true">Si</option>
            <option value="false">No</option>
       </select>
        <button>Crear</button>
        </div>
      </form>
    </section>);
}

export default AgregarProducto;