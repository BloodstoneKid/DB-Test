import React, { useEffect, useState } from 'react';
import '../Sections.css';
import DetalleFactura from './DetalleFactura';

function VerFacturas(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;

    const fetchItems = async () => {
        const data = await fetch(`/getinfofacturas/${id}`);
        const items = await data.json();
        setItems(items);
    };

    return(<section>
        {items.map(item =>(
             <div class="container-fluid p-3 w-50">
             <div class="card-deck">
                 <div class="card">
                     <div class="card-body p-1">
                         <h6 class="card-title">{item.id_factura}</h6>
                         <p class="card-text">Fecha: {item.fecha}</p>
                         <p class="card-text">Caja: {item.caja_id_caja}</p>
                         <DetalleFactura/>
                         <p class="card-text">Total: {item.total}</p>
                         <p class="card-text">Transporte?: {item.necesita_transporte}</p>
                         <p class="card-text">Forma de pago: {item.forma_pago}</p>
                     </div>
                 </div>
             </div>
         </div>
        ))}
    </section>);

}  


export default VerFacturas;