import React, { useEffect, useState } from 'react';
import '../Sections.css';

function ListaProductosCliente(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;

    const fetchItems = async () => {
        const data = await fetch(`/getinfoproductos/${id}`);
        const items = await data.json();
        setItems(items);
    };

    return(<section>
        {items.map(item =>(
             <div class="container-fluid p-3 w-50">
             <div class="card-deck">
                 <div class="card">
                     <div class="card-body p-1">
                         <h6 class="card-title">{item.nombre}</h6>
                         {item.imagen}
                     </div>
                 </div>
             </div>
         </div>
        ))}
    </section>);

}

export default ListaProductosCliente;