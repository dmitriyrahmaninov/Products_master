import React from 'react';
import ProductsContainer from '../../components/ProductsContainer';
import s from './index.module.sass';

export default function index() {
    return (
    <div className={['wrapper', s.container_products].join(' ')}>
        <p>What's right for you?</p>
        <ProductsContainer />
    </div>
    )
}
