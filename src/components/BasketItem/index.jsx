import React, {useContext} from 'react';
import s from './index.module.sass';
import ButtonChangeCount from '../UI/ButtonChangeCount';
import { Context } from '../../context';
import ButtonDelete from '../UI/ButtonDelete';

export default function BasketItem({ id, title, price, image, basket, count }) {
    
    const { deleteProductInBasket, incrementCount, decrementCount } = useContext(Context);

    return (
        <div>
            {
                basket === true
            ? 
            <div className={s.basket_item}>
                <img src={image} alt="photo_product" />
                <p style={{width: 400}}>{title}</p>
                <div className={s.container_change_count}>
                    <div className={s.container_count}>
                        <ButtonChangeCount onClick={() => decrementCount(id)}>-</ButtonChangeCount>
                            {count}
                        <ButtonChangeCount onClick={() => incrementCount(id)}>+</ButtonChangeCount>        
                    </div>   
                    <div className={s.btn_delete}>
                        <ButtonDelete onClick={() => deleteProductInBasket(id)}>Удалить</ButtonDelete>
                    </div>
                </div>
                <p style={{ fontSize: 25, fontWeight: 700 }}>{(price * count).toFixed(2)} €</p>
            </div>
            : ' '
            }
        </div>
    )
}
