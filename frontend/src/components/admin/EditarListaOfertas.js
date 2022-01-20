import React, { useEffect, useState } from 'react';
import '../Sections.css';
import EditarOferta from './EditarOferta';
import AgregarOferta from './AgregarOferta';

function EditarListaOfertas(){
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
                         <h6 class="card-title">{item.id_descuento}</h6>
                         <p class="card-text">Descuento: {item.porcentaje}</p>
                         <p class="card-text">Fecha inicio: {item.fecha_inicio}</p>
                         <p class="card-text">Fecha fin: {item.fecha_fin}</p>
                         <EditarOferta/>
                         <button onClick={deleteItems}>Eliminar</button>
                     </div>
                 </div>
             </div>
         </div>
        ))}
        <AgregarOferta/>
    </section>);

}

export default EditarListaOfertas;