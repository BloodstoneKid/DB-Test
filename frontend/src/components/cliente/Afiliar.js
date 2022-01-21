import React, { useEffect, useState } from 'react';
import '../Sections.css';
import AgregarHijo from './AgregarHijo';
import FormaPago from './FormaPago';

function Afiliar({listaProd}){
    const [identificacion, setIdentificacion] = useState('');
    const [nombre, setNombre] = useState('');
    const [segnombre, setSegNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [segapellido, setSegApellido] = useState('');
    const [fechanac, setFechaNac] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [items, setItems] = useState([]);

    const fechahoy = new Date();

    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('/getciudades');
        const items = await data.json();
        setItems(items);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cliente = { identificacion,nombre,apellido,
        segnombre,segapellido,fechanac,ciudad, fechahoy }
        
    

    fetch('/afiliarcliente', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente)
    });
    <FormaPago listaProd={listaProd} comprador={identificacion}/>
 };

    return(<section>
         <h2>Afiliarse</h2>
      <form onSubmit={handleSubmit}>
      <div class="card-body p-1">
        <label>Primer nombre:</label>
        <input 
          type="text" 
          required 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Segundo nombre (opcional):</label>
        <input 
          type="text" 
          value={segnombre}
          onChange={(e) => setSegNombre(e.target.value)}
        />
        <label>Apellido:</label>
        <input 
          type="text" 
          required 
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label>Segundo apellido (opcional):</label>
        <input 
          type="text" 
          value={segapellido}
          onChange={(e) => setSegApellido(e.target.value)}
        />
        <label>Numero de identificacion:</label>
        <input 
          type="number" 
          required 
          value={identificacion}
          onChange={(e) => setIdentificacion(e.target.value)}
        />
        <label>Fecha de nacimiento:</label>
        <input 
          type= "date" 
          required 
          value={fechanac}
          onChange={(e) => setFechaNac(e.target.value)}
        />
        <label>Ciudad de residencia:</label>
       <select name="ciudad" 
       id="ciudad" 
       required 
       onChange={(e) => setCiudad(e.target.value)}>
        {items.map(item =>(
            <option value={item.id_region}>{item.nombre}</option>
        ))}
       </select>
        <button>Afiliar</button>
        </div>
      </form>
      <AgregarHijo idPadre={identificacion}/>
    </section>);
}

export default Afiliar;