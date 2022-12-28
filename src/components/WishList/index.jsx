import React, { useContext } from 'react';
import WishItem from '../../components/WishItem';
import { Context } from '../../context';
import EmptyWish from '../../components/EmptyWish';
import s from './index.module.sass'

export default function WishList() {

    const { products } = useContext(Context);

    const new_array = products.map(product => product.wish === true)
    console.log(new_array)
    const target = new_array.find(array => array === true)
    console.log(target)

    return (
        <div className={['wrapper', s.wish_container].join(' ')}>
            {
                target === undefined
                    ? <EmptyWish />
                    : products.map(product => <WishItem key={product.id} {...product} />)
            }
        </div>
    )
}