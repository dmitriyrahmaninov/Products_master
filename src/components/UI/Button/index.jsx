import React from 'react';
import s from './index.module.sass'

export default function Button({children, ...props}) {
    return (
        <button {...props} className={s.bnt}>{children}</button>
    )
}
