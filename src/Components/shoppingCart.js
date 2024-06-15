import React from 'react';
import './shoppingCart.css';

import { Button } from 'primereact/button';
        
function ShoppingCart({ cart, handleAdd, handleSubtract }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <div className="shopping-cart">
      {/* <h3>Your Choices</h3> */}
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul className="cart-items">
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </div>
              <div className="quantity-controls">
                <button className="btn btn-secondary" onClick={() => handleSubtract(item)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button className="btn btn-secondary" onClick={() => handleAdd(item)}>+</button>
              </div>
            </li>
          ))}
        </ul>

      )}
      <p className="cart-total">Total: ${total.toFixed(2)}</p>
    </div>
    <div className='checkout-container'> 
      
      <button label='Checkout' className='checkout-button'>Checkout
        </button></div>
   
    </>
  );
}

export default ShoppingCart;
