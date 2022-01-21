import React, { useEffect, useState } from 'react';
import '../Sections.css';
import Reserva from './Reserva';
import AgregarInstrumento from './AgregarInstrumento';

function FormaPago({listaProd, comprador}){
    useEffect( () => {
        fetchItems();
    }, []);

   const comprador_instrumento = comprador;
   const [instrumento, setInstrumento] = useState('');

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch(`/getinstrumento/${comprador_instrumento}`);
        const items = await data.json();
        setItems(items);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        <Reserva listaProd={listaProd} instrumento={instrumento}/>
    }

    return(<section>
        {items.map(item => (<section>
            <h2>Seleccionar instrumento de pago</h2>
            <form onSubmit={handleSubmit}>
            <select name="instrumento" 
            id="instrumento" 
        required 
        onChange={(e) => setInstrumento(e.target.value)}>
        {items.map(item =>(
            <option value={item.id_instrumento}>{item.id_instrumento} - {item.tipo}</option>
        ))}
       </select>
        <button>Listo</button>
            </form>
            </section>
        ))}
        <button onClick={<AgregarInstrumento idDueno={comprador_instrumento}/>}>Agregar instrumento</button>
    </section>);

}

export default FormaPago;