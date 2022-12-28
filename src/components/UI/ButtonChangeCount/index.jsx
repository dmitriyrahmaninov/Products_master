import React from 'react';
import s from './index.module.sass';

export default function ButtonChangeCount({children, ...props}) {
    return (
        <button {...props} className={s.btn}>{children}</button>
    )
}
