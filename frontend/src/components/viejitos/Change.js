import React, { useEffect, useState } from 'react';
import './Sections.css';

function Change(){
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [items, setItems] = useState([]);

    useEffect( () => {
        fetchItems();
    }, []);
 
    const fetchItems = async () => {
        const data = await fetch('/getmembers');
        const items = await data.json();
        setItems(items);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const miembro = { nombre, apellido, edad } 

    fetch(`/updatemember/${cedula}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(miembro)
    });
    window.location.reload();
    };
    return(<section>
        <h2>Editar miembro</h2>
     <form onSubmit={handleSubmit}>
     <div class="card-body p-1">
       <label>Cedula:</label>
       <select name="cedula" 
       id="cedula" 
       required 
       onChange={(e) => setCedula(e.target.value)}>
        {items.map(item =>(
            <option value={item.cedula}>{item.cedula}</option>
        ))}
       </select>
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
       <label>Edad:</label>
       <input 
         type="number" 
         required 
         value={edad}
         onChange={(e) => setEdad(e.target.value)}
       />
       <button>Cambiar</button>
       </div>
     </form>
   </section>);
};

export default Change;