import React from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import s from './style.module.sass'

export default function LogIn() {
    return (
        <div >
            <button className={s.container}>
                <UserAddOutlined className={s.logo} />
            </button>
        </div>
    ) 
}
