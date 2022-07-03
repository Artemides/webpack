import React from 'react';
import { Header } from '../components/Header';
import { ProductList } from '../containers/ProductList';

export const Home=()=>{
    return(
        <React.Fragment>
            <ProductList/>
        </React.Fragment>
    )
}