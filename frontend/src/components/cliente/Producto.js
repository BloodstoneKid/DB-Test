import React, { useEffect, useState } from 'react';
import '../Sections.css';

function Producto(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items1, setItems] = useState([]);
    const [items2, setItems] = useState([]);
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
            <section>
            <div class="container">
            <div class="welcome-hero-content">
              <div class="row">
                <div class="col-sm-7">
                  <div class="single-welcome-hero">
                    <div class="welcome-hero-txt">
                      <h4>{item.nombre}</h4>
                      <h2>{item.colores}</h2>
                      <h1>{item.ancho}x{item.largo}</h1>
                      <p>
                        <b>Descripción</b> <br></br>
                        <br></br> {item.descripcion} <br></br>
                        <br></br><b>Características</b> <br></br>
                        <br></br>{item.caracteristicas} <br></br>
                        <br></br><b>Instrucciones</b> <br></br>
                        <br></br>{item.instrucciones} <br></br>
                      </p>
                      <div class="packages-price">
                        <p>
                          $ {item.precio}
                        </p>
                      </div>
                      <button class="btn-cart welcome-add-cart" onclick="window.location.href='#'">
                        <span class="lnr lnr-plus-circle"></span>
                        Añadir <span>al</span> Carro
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="single-welcome-hero">
                    <div class="welcome-hero-img">
                      <img src="{item.imagen}" alt="slider image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
        ))}

        
        {items2.map(item =>(
            <section id="populer-products" class="populer-products">
            <div class="container">
              <div class="populer-products-content">
                <div class="row">
                  <div class="col-md-3">
                    <div class="single-populer-products">
                      <div class="single-populer-product-img mt40">
                        <img src="{item.imagen}" alt="populer-products images" />
                      </div>
                      <h2><a href="#">{item.nombre}</a></h2>
                      <div class="single-populer-products-para">
                        <p>{item.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}


    </section>);

}

export default Producto;