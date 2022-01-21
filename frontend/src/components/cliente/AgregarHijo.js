import React, { useEffect, useState } from 'react';
import '../Sections.css';


function AgregarHijo({idPadre}){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [genero, setGenero] = useState('');
    const [fechanac, setFechaNac] = useState('');

    const id = {idPadre};


    const handleSubmit = (e) => {
        e.preventDefault();
        const hijo = { nombre, apellido, genero, fechanac, id } 
    

    fetch('/agregarhijo', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hijo)
    });
 };

    return(<section>
         <h2>Agregar hijo</h2>
      <form onSubmit={handleSubmit}>
      <div class="card-body p-1">
        <label>Nombre:</label>
        <input 
          type="text" 
          required 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Apellido:</label>
        <input 
          type="text" 
          required 
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label>Genero:</label>
       <select name="genero" 
       id="genero" 
       required 
       onChange={(e) => setGenero(e.target.value)}>
        <option value={genero}>Masculino</option>
        <option value={genero}>Femenino</option>
       </select>
        <label>Fecha de nacimiento:</label>
        <input 
          type= "date" 
          required 
          value={fechanac}
          onChange={(e) => setFechaNac(e.target.value)}
        />
        <button>Afiliar</button>
        </div>
      </form>
    </section>);
}

export default AgregarHijo;