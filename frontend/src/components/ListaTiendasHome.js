import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sections.css';

function ListaTiendasHome(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/getinfotiendas');
        const items = await data.json();
        setItems(items);
    };

    return(<section>
        {items.map(item =>(
             <div class="container-fluid p-3 w-50">
             <div class="card-deck">
                 <div class="card">
                     <div class="card-body p-1">
                         <Link to={`/tienda/${item.id_tienda}`}>
                         <h6 class="card-title">{item.nombre}</h6>
                         </Link>
                         <p class="card-text">Ciudad: {item.AMY_Region.nombre}</p>
                         <p class="card-text">Horario: Desde X Hasta Y</p>
                         <p class="card-text">Fecha de apertura: {item.fecha_apertura}</p>
                         <p class="card-text">Estilo arquitectonico: {item.estilo_arquitectonico}</p>
                         <p class="card-text">Area (m²): {item.area_m2}</p>
                         <p class="card-text">Numero de pasillos: {item.num_pasillos}</p>
                         <p class="card-text">Area de almacenamiento: {item.area_almacenamiento}</p>
                         <p class="card-text">Direccion: {item.direccion}</p>
                         <p class="card-text">Telefono: {item.telefono}</p>
                         <p class="card-text">Areas infantiles: {item.ubicacion_area}</p>
                     </div>
                 </div>
             </div>
         </div>
        ))}
    </section>);

}

export default ListaTiendasHome;