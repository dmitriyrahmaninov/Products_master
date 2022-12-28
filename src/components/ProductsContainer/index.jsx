import React, { useContext } from 'react'
import { Context } from '../../context'
import ProductItem from '../ProductItem'
import s from './index.module.sass'

export default function ProductsContainer() {

    const { products } = useContext(Context);

    return (
        <div className={['wrapper', s.products_container].join(' ')}>
            {
                products.map(product =>
                    <ProductItem
                        key={product.id}
                        {...product}
                    />)
            }
        </div>
    )
}
