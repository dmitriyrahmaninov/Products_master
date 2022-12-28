import React from 'react';
import s from './index.module.sass';
import {HeartFilled} from '@ant-design/icons';

export default function EmptyWish() {
    return (
        <div className={['wrapper', s.empty_wish_list].join(' ')}>
            <p>В избранном пусто</p>
            <p>Добавляйте товары с помощью  <HeartFilled style={{color: '#e74c3c'}} /></p>
        </div>
    )
}
