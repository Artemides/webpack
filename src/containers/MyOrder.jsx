import React,{useContext} from "react";
import { OrderItem } from "../components/OrderItem";
import arrow_icon from '@icons/flechita.svg';
import '../styles/myOrder.scss';
import { AppContext } from "../context/AppContext";

export const MyOrder = () => {
  const {state} =useContext(AppContext);
  const orders=state.cart;
  const totalPrice=()=>{
      return orders.reduce((total,product)=>total+product.price,0);
  }
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow_icon} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {orders.map(product=>(
          <OrderItem product={product} key={`product-${product.id}`}/>
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${totalPrice()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};
