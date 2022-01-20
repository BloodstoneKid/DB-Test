import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../Sections.css';

function Categoria(){
    useEffect( () => {
        fetchItems1();
        fetchItems2();
    }, []);

    const [items1, items2, setItems] = useState([]);
    const { id } = useParams();

    const fetchItems1 = async () => {
        const data1 = await fetch(`/getinfocategoria/${id}`);
        const items1 = await data1.json();
        setItems(items1);
    };
    const fetchItems2 = async () => {
        const data2 = await fetch(`/getsubcategorias/${id}`);
        const items2 = await data2.json();
        setItems(items2);
    };

    return(<section>
        {items1.map(item =>(
             <div class="container-fluid p-3 w-50">
             <div class="card-deck">
                 <div class="card">
                     <div class="card-body p-1">
                         <h6 class="card-title">{item.nombre}</h6>
                         <p class="card-text">Descripcion: {item.descripcion}</p>
                     </div>
                 </div>
             </div>
         </div>
        ))}
    </section>);

}

export default Categoria;