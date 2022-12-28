import React from 'react';
import s from './index.module.sass';
// import {Link} from 'react-router-dom'
import ButtonToList from '../UI/ButtonToList';

export default function EmptyBasket() {
    return (
        <div className={s.container_empty_basket}>
            <p>Ваша корзина пуста.</p>
            <ButtonToList>
                {/* <Link to='/list_products'>Продолжить покупки</Link> */}
                <a href="/list_products">Продолжить покупки</a>
            </ButtonToList>
        </div>
        
    )
}
