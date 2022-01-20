import React, { useEffect, useState } from 'react';
import '../Sections.css';
import EditarProducto from './EditarProducto';
import AgregarProducto from './AgregarPlato';

function CatalogoCiudadAdmin(){
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

    const deleteItems = async () => {
        const response = await fetch('/deleteproducto', {
       method: 'DELETE', 
       headers: {
         'Content-Type': 'application/json'
       },
       body: null
   });
    }

    return(<section>
        {items.map(item =>(
             <div class="container-fluid p-3 w-50">
             <div class="card-deck">
                 <div class="card">
                     <div class="card-body p-1">
                         <h6 class="card-title">{item.nombre}</h6>
                         {item.imagen}
                         <p class="card-text">Caracteristicas: {item.caracteristicas}</p>
                         <p class="card-text">Precio: {item.precio}</p>
                         <p class="card-text">Colores: {item.colores}</p>
                         <p class="card-text">Instrucciones: {item.instrucciones}</p>
                         <p class="card-text">Descripcion: {item.descripcion}</p>
                         <p class="card-text">Ancho: {item.ancho}</p>
                         <p class="card-text">Largo: {item.largo}</p>
                         <p class="card-text">Requiere montaje?: {item.requiere_montaje}</p>
                         <EditarProducto/>
                         <button onClick={deleteItems}>Eliminar</button>
                     </div>
                 </div>
             </div>
         </div>
        ))}
        <AgregarProducto/>
    </section>);

}

export default CatalogoCiudadAdmin;