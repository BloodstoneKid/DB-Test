import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Sections.css';

function ListaProductosCliente({idRegion}){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = idRegion;

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = getSearch(posts, searchQuery);

    const fetchItems = async () => {
        const data = await fetch(`/getinfoproductos/${id}`);
        const items = await data.json();
        setItems(items);
    };

    return(<section>

            <div class="container">
              <Buscar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
              </div>

        {items.map(item =>(
            <section id="new-arrivals" class="new-arrivals">
            <div class="container">
              <div class="section-header">
                <h2>Productos</h2>
              </div>
              <div class="new-arrivals-content">
                <div class="row">
                  <div class="col-md-3 col-sm-4">
                  <Link to={`/producto/${item.id_producto}`}>
                    <div class="single-new-arrival">
                      <div class="single-new-arrival-bg">
                        <img src="{item.imagen}" alt="new-arrivals images" />
                        <div class="single-new-arrival-bg-overlay"></div>
                        <div class="new-arrival-cart">
                          <p>
                            <span class="lnr lnr-cart"></span>
                            <a href="/getinfoproducto/${item.id_producto}">Más <span>  </span> información</a>
                          </p>
                          <p class="arrival-review pull-right">
                            <span class="lnr lnr-heart"></span>
                            <span class="lnr lnr-frame-expand"></span>
                          </p>
                        </div>
                      </div>
                      <h4><a href="/getinfoproducto/${item.id_producto}">{item.nombre}</a></h4>
                      <p class="arrival-product-price">{item.precio}$</p>
                    </div>
                    </Link>
                  </div>
                  </div>
              </div>
            </div>
          </section>
            ))}
    </section>);

}

export default ListaProductosCliente;