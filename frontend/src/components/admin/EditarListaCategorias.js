import React, { useEffect, useState } from 'react';
import '../Sections.css';
import EditarCategoria from './EditarCategoria';
import AgregarCategoria from './AgregarCategoria';

function EditarListaCategorias(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/getinfotodascategorias/');
        const items = await data.json();
        setItems(items);
    };
    const deleteItems = async () => {
        const response = await fetch('/deletecategoria', {
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
                         <p class="card-text">Descripcion: {item.descripcion}</p>
                         <EditarCategoria/>
                         <button onClick={deleteItems}>Eliminar</button>
                     </div>
                 </div>
             </div>
         </div>
        ))}
        <AgregarCategoria/>
    </section>);

}

export default EditarListaCategorias;