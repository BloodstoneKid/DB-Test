import React, { useEffect, useState } from 'react';
import '../Sections.css';
import { addToCart } from './elementos_carrito/shoppingAction';

function Producto(){
    useEffect( () => {
        fetchItems1();
        fetchItems2();
    }, []);

    const [items1, items2, setItems] = useState([]);
    const id = 0;

    const fetchItems1 = async () => {
        const data1 = await fetch(`/getinfoproducto/${id}`);
        const items1 = await data1.json();
        setItems(items1);
    };
    const fetchItems2 = async () => {
        const data2 = await fetch(`/getproductosrelacionados/${id}`);
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
                         {item.imagen}
                         <p class="card-text">Caracteristicas: {item.caracteristicas}</p>
                         <p class="card-text">Precio: {item.precio}</p>
                         <p class="card-text">Colores: {item.colores}</p>
                         <p class="card-text">Instrucciones: {item.instrucciones}</p>
                         <p class="card-text">Descripcion: {item.descripcion}</p>
                         <p class="card-text">Ancho: {item.ancho}</p>
                         <p class="card-text">Largo: {item.largo}</p>
                         <p class="card-text">Requiere montaje?: {item.requiere_montaje}</p>
                         <p class="card-text">Diseñador: {item.AMY_Diseñador.nombre} {item.AMY_Diseñador.apellido}</p>
                         <button onClick={() => addToCart(item.id_producto)}>Agregar</button>
                     </div>
                 </div>
             </div>
         </div>
        ))}
    </section>);

}

export default Producto;