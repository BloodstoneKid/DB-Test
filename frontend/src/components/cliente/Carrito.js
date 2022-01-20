import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../Sections.css';
import SeleccionarCliente from './SeleccionarCliente';
import ItemCarrito from './ItemCarrito';

function Carrito({arrayItems}){

  const productos = arrayItems;

    return(<section>
        <div>
      <h2>Carrito de Compras</h2>
      <article className="box grid-responsive">
        {productos.map(prod => (
          <ItemCarrito idProd = {prod}/>
        ))}
      </article>
      <button onClick={<SeleccionarCliente/>}>Reservar</button>
    </div>
    </section>);

}

export default Carrito;