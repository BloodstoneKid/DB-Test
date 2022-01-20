import React, { useEffect, useState } from 'react';
import '../Sections.css';
import FormaPago from './FormaPago';
import Afiliar from './Afiliar';

function SeleccionarCliente({listaProd}){
    useEffect( () => {
        fetchItems();
    }, []);

    const [cliente, setCliente] = useState('');

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch(`/getclientes`);
        const items = await data.json();
        setItems(items);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        <FormaPago listaProd={listaProd} comprador={cliente}/>
    
    }

    return(<section>
        {items.map(item => (<section>
            <h2>Seleccionar cliente</h2>
            <form onSubmit={handleSubmit}>
            <select name="cliente" 
            id="cliente" 
        required 
        onChange={(e) => setCliente(e.target.value)}>
        {items.map(item =>(
            <option value={item.id_cliente}>{item.nombre} {item.apellido} ({item.id_cliente})</option>
        ))}
       </select>
        <button>Listo</button>
            </form>
            </section>
        ))}
        <button onClick={<Afiliar listaProd={listaProd}/>}>Afiliarse</button>
    </section>);

}

export default SeleccionarCliente;