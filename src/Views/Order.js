// src/Views/Order.js

import React from 'react';
import './Order.css';

const Order = () => {
  return (
    <section className="order-section" id="order">
      <h2>Order Online</h2>
      <p>Craving a cup? Place your order below and we’ll prep it fresh for pickup.</p>

      <form className="order-form">
        <label>
          Select Your Drink:
          <select required>
            <option value="">-- Choose one --</option>
            <option value="Sunrise Espresso">Sunrise Espresso</option>
            <option value="Velvet Cappuccino">Velvet Cappuccino</option>
            <option value="Cold Brew Rush">Cold Brew Rush</option>
          </select>
        </label>

        <label>
          Quantity:
          <input type="number" min="1" max="10" defaultValue="1" required />
        </label>

        <label>
          Your Name:
          <input type="text" placeholder="Full Name" required />
        </label>

        <label>
          Pickup Time:
          <input type="time" required />
        </label>

        <button type="submit">Place Order</button>
      </form>
    </section>
  );
};

export default Order;
