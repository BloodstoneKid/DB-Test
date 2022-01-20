import React, { useEffect, useState } from 'react';
import '../Sections.css';

function ListaEventosCliente({idTienda}){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = idTienda;

    const fetchItems = async () => {
        const data = await fetch(`/getinfoeventos/${id}`);
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
                         <p class="card-text">Descripcion: {item.descripcion}</p>
                         <p class="card-text">Desde: {item.fecha_ini}</p>
                         <p class="card-text">Hasta: {item.fecha_final}</p>
                     </div>
                 </div>
             </div>
         </div>
        ))}
    </section>);

}

export default ListaEventosCliente;