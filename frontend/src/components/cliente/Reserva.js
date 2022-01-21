import React, { useEffect, useState } from 'react';
import '../Sections.css';

function Reserva({listaProd, instrumento}){
    const productos = listaProd;
    const inst =instrumento;
    useEffect( () => {
        fetchItems();
    }, []);
    
    const [items, setItems] = useState([]);
    const postGetFactura = async () => {
        const data = await fetch('/crearfactura');
        const items = await data.json();
        setItems(items);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        
    }


    return(<section>
        <div>
      <h2>Carrito de Compras</h2>
      <article className="box grid-responsive">
        {productos.map(prod => (
          <></>
        ))}
      </article>
    
    </div>
    </section>);
}

export default Reserva;