import React,{useState,useContext} from 'react';
import '../styles/orderItem.scss';
import icon_close from '@icons/icon_close.png';
import { AppContext } from "../context/AppContext";
export const OrderItem=({product})=>{
	const {removeFromCart}=useContext(AppContext);
    return(
        <div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img 
			src={icon_close}
			alt="close" 
			onClick={()=>removeFromCart(product)}
			/>
		</div>
    )
}