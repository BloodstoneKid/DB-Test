import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Sections.css';

function ListaCategoriasCliente({idRegion}){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = idRegion;

    const fetchItems = async () => {
        const data = await fetch(`/getinfocategorias/${id}`);
        const items = await data.json();
        setItems(items);
    };
    return(<section>
        {items.map(item =>(
             <div class="container-fluid p-3 w-50">
             <div class="card-deck">
                 <div class="card">
                     <div class="card-body p-1">
                        <Link to={`/categoria/${item.id_categoria}`}>
                         <h6 class="card-title">{item.nombre}</h6>
                         </Link>
                         <p class="card-text">Descripcion: {item.descripcion}</p>
                     </div>
                 </div>
             </div>
         </div>
        ))}
    </section>);

}

export default ListaCategoriasCliente;