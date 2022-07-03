import React,{useContext} from 'react'
import '@styles/productItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import { AppContext } from "../context/AppContext";

export const ProductItem=({product})=>{
    const {addToCart}=useContext(AppContext);
	const handleProduct=item=>{
		addToCart(item);
	}
	return(
        <div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>handleProduct(product)}>
					<img src={addToCartIcon}alt="" />
				</figure>
			</div>
		</div>
    )
}   