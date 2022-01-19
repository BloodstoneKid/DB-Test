import React, { useEffect, useState } from 'react';
import '../Sections.css';
import EditarEvento from './EditarEvento';
import AgregarEvento from './AgregarEvento';

function EditarListaEventos(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;

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
                         <p class="card-text">Fecha inicio: {item.fecha_inicio}</p>
                         <p class="card-text">Fecha fin: {item.fecha_fin}</p>
                         <EditarEvento/>
                     </div>
                 </div>
             </div>
         </div>
        ))}
        <AgregarEvento/>
    </section>);

}

export default EditarListaEventos;