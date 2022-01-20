import React, { useEffect, useState } from 'react';
import '../Sections.css';

function ItemCarrito({idProd}){

    useEffect( () => {
      fetchItems();
    }, []);
  
    const [items, setItems] = useState([]);
    const id = idProd;
  
    const fetchItems = async () => {
      const data = await fetch(`/getinfoproducto/${id}`);
      const items = await data1.json();
      setItems(items);
    };
  
      return(<section>
        <article className="box grid-responsive">
          {items.map(item => (
              <section>
                  <h4>{item.nombre}</h4>
              </section>
          ))}
        </article>
      </section>);
  
  }
  
  export default ItemCarrito;