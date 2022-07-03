import React from 'react';
import { ProductInfo } from '../components/ProductInfo';
import '../styles/productDetail.scss';
export const ProductDetail=()=>{
    return(
        <aside className="ProdutcDetail">
            <div className="ProductDetail-close">
            <img src="./icons/icon_close.png" alt="close" />
            </div>
            <ProductInfo/>
        </aside>
    )
}