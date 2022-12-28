import React from 'react';
import s from './index.module.sass'

export default function ButtonDelete({children, ...props}) {
    return (
        <button {...props} className={s.btn_detele}>{children}</button>
    )
}
