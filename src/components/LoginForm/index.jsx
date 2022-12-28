import React, { useState } from 'react';
import s from './index.module.sass';
import { registration } from '../../requests/reqres';
import { setCookie, AUTH_TOKEN_NAME } from '../../requests/cookie_tools';


export default function LoginForm() {
    const [message, setMessage] = useState('Specify authentication data');

    const submit = event => {
        event.preventDefault();
        const { name, password } = event.target;
        const auth_data = {
            name: name.value,
            password: password.value
        }
        registration(auth_data,
            token_value => {
                setCookie(AUTH_TOKEN_NAME, token_value.token);
                setMessage('Ок')
            },
            setMessage
        );
        name.value = '';
        password.value = '';
    }

    return (
        <form onSubmit={submit} className={s.form_container}>
            <input type="text" placeholder='Name' name="name" />
            <input type="password" placeholder='Password' name="password" />
            <button>Войти в аккаунт</button>
            <p className={s.info_text}>{message}</p>
        </form>
    )
}
