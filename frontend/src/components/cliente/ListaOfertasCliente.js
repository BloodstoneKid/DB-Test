import React, { useEffect, useState } from 'react';
import '../Sections.css';

function ListaOfertasCliente(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;

    const fetchItems = async () => {
        const data = await fetch(`/getinfoofertas/${id}`);
        const items = await data.json();
        setItems(items);
    };

    return(<section>
        {items.map(item =>(
             <div class="container-fluid p-3 w-50">
             <div class="card-deck">
                 <div class="card">
                     <div class="card-body p-1">
                         <h6 class="card-title">En: {item.AMY_Categoria.nombre}</h6>
                         <p class="card-text">{item.porcentaje}</p>
                     </div>
                 </div>
             </div>
         </div>
        ))}
    </section>);

}

export default ListaOfertasCliente;