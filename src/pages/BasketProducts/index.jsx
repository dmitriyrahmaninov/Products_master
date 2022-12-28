import React from 'react';
import BasketContainer from '../../components/BasketContainer';
import s from './index.module.sass'


export default function BasketProducts() {
  return (
    <div className={['wrapper', s.container].join(' ')}>
      <BasketContainer/>
    </div>
  )
}
