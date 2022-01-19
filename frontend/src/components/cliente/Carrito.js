import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../Sections.css';
import Afiliar from './Afiliar';
import LoginCliente from './LoginCliente';
import FormaPago from './FormaPago';
import { addToCart, clearCart, delFromCart } from "./elementos_carrito/shoppingAction";
import CartItem from "./elementos_carrito/CartItem";
import Producto from './Producto';

function Carrito(){
    const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { products, cart } = state.shopping;

    return(<section>
        <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <Producto
            key={product.id_producto}
            data={product}
            addToCart={() => dispatch(addToCart(product.id_producto))}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </article>
    </div>
        <Afiliar/>
        <LoginCliente/>
        <FormaPago/>
    </section>);

}

export default Carrito;