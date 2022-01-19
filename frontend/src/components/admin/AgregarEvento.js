import React, { useEffect, useState } from 'react';
import '../Sections.css';

function AgregarEvento(){
    const [nombre, setNombre] = useState('');
    const [fecha_ini, setFechaIni] = useState('');
    const [fecha_final, setFechaFinal] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const id = 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const evento = { fecha_ini, fecha_final, descripcion, nombre,  id } 
    

    fetch('/crearevento', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(evento)
    });
 };

    return(<section>
         <h2>Agregar evento</h2>
      <form onSubmit={handleSubmit}>
      <div class="card-body p-1">
        <label>Nombre:</label>
        <input 
          type="text" 
          required 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Fecha de inicio:</label>
        <input 
          type="date" 
          required 
          value={fecha_ini}
          onChange={(e) => setFechaIni(e.target.value)}
        />
        <label>Fecha final:</label>
        <input 
          type="date" 
          required 
          value={fecha_final}
          onChange={(e) => setFechaFinal(e.target.value)}
        />
        <label>Descripcion:</label>
        <input 
          type="text" 
          required 
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button>Crear</button>
        </div>
      </form>
    </section>);
}

export default AgregarEvento;