import React from 'react';
import { Header } from '../components/Header';

export const Layout=({children})=>{
    return(
        <div className="layout">
            <Header/>
            {children}
        </div>
    );
}