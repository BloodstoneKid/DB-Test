import React, { useEffect, useState } from 'react';
import '../Sections.css';

function AgregarOferta(){
    const [porcentaje, setPorcentaje] = useState('');
    const [fecha_ini, setFechaIni] = useState('');
    const [fecha_final, setFechaFinal] = useState('');
    const [categoria, setCategoria] = useState('');
    const [items, setItems] = useState([]);

    const id = 0;

    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch(`/getinfocategorias/${id}`);
        const items = await data.json();
        setItems(items);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const oferta = { porcentaje, fecha_ini, fecha_final, categoria} 
    

    fetch('/crearoferta', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(oferta)
    });
 };

    return(<section>
         <h2>Agregar oferta</h2>
      <form onSubmit={handleSubmit}>
      <div class="card-body p-1">
        <label>Porcentaje de descuento:</label>
        <input 
          type="number" 
          required 
          value={porcentaje}
          onChange={(e) => setPorcentaje(e.target.value)}
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
        <label>A que categoria?:</label>
       <select name="categoria" 
       id="categoria" 
       onChange={(e) => setCategoria(e.target.value)}>
        {items.map(item =>(
            <option value={item.id_categoria}>{item.nombre}</option>
        ))}
       </select>
        <button>Crear</button>
        </div>
      </form>
    </section>);
}

export default AgregarOferta;