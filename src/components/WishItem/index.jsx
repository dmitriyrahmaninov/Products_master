import React from 'react';
import s from './index.module.sass';
import Button from '../UI/Button';
import { useContext } from 'react';
import { Context } from '../../context';
import { CloseCircleFilled } from '@ant-design/icons';


export default function WishItem({ id, title, price, description, image, wish }) {
    
    const { addToBasket, delete_wish } = useContext(Context);
    
    return (
        !wish
            ? ' '
            : <div className={s.wish_container}>
                <div className={s.close} onClick={() => delete_wish(id)}>
                    <CloseCircleFilled  />
                </div>
                <img src={image} alt="photo_product" />
                <div className={s.wish_main_info}>
                    <p style={{ fontWeight: 900, fontSize: 25, textAlign: 'center'}}>{price} €</p>
                    <p style={{fontWeight: 900, fontSize: 18}}>{title}</p>
                    <div className={s.descr}>
                        <p style={{ color: 'rgb(139, 139, 139)' }}>{description}</p>
                    </div>
                    <Button onClick={() => addToBasket(id, title, price, image)}>Добавить в корзину</Button>
                </div>
            </div>
        
    )
}
