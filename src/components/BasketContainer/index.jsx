import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import BasketItem from '../BasketItem';
import s from './index.module.sass';
import EmptyBasket from '../EmptyBasket'
import ButtonToList from '../UI/ButtonToList';

export default function BasketContainer() {

    const { orders } = useContext(Context);

    const sum_total = orders.reduce((prev, { price, count}) => prev + price * count, 0);
    const count_total = orders.reduce((prev, { count }) => prev + count, 0);


    return (
        <>
            {
                orders.length === 0
                    ? <EmptyBasket />
                :
                    <>
                        <div className={['wrapper', s.basket_container].join(' ')}>
                            {orders.map(order => <BasketItem key={order.id} {...order} />)}
                        </div>
                        <div className={['wrapper', s.total_sum].join(' ')}>
                            <p style={{fontWeight: 700}}>Итого {sum_total.toFixed(2)} €</p>
                            <p style={{color: '#8b8b8b'}}>Товары, {count_total} шт.</p>
                            <ButtonToList>Заказать</ButtonToList>
                        </div>
                    </>
            }
        </>
    )
}
