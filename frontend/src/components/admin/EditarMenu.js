import React, { useEffect, useState } from 'react';
import '../Sections.css';
import EditarPlato from './EditarPlato';
import AgregarPlato from './AgregarPlato';

function EditarMenu(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;

    const fetchItems = async () => {
        const data = await fetch(`/getinfomenu/${id}`);
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
                         <p class="card-text">Tipo: {item.tipo}</p>
                         <p class="card-text">Descripcion: {item.descripcion}</p>
                         <p class="card-text">Precio: {item.precio}</p>
                        <EditarPlato/>
                     </div>
                 </div>
             </div>
         </div>
        ))}
        <AgregarPlato/>
    </section>);

}

export default EditarMenu;