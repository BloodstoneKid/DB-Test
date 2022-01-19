import React, { useEffect, useState } from 'react';
import '../Sections.css';

function DetalleFactura(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;

    const fetchItems = async () => {
        const data = await fetch(`/getinfodetallefactura/${id}`);
        const items = await data.json();
        setItems(items);
    };

    return(<section>
        {items.map(item =>(
             <div class="container-fluid p-3 w-50">
             <div class="card-deck">
                 <div class="card">
                     <div class="card-body p-1">
                         <p class="card-text">{item.AMY_Producto.nombre}</p>
                         <p class="card-text">{item.cantidad}</p>
                     </div>
                 </div>
             </div>
         </div>
        ))}
    </section>);
}

export default DetalleFactura;