import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import LogIn from '../LogIn';
import s from './index.module.sass';
import LoginForm from '../LoginForm'


export default function NavMenu() {
    const registration_menu_ref = useRef();

    const open_log_menu = () => {
        registration_menu_ref.current.classList.toggle(s.active);
    }

    return (
        <nav className={['wrapper', s.nav_menu].join(' ')}>
            <Link to='/list_wish'>Избранное</Link>
            <Link to='/list_products'>Список товаров</Link>
            <Link to='/basket_products'>Корзина</Link>
            <div className={s.log_menu}>
                <button onClick={() => open_log_menu()} className={s.log_btn}>
                    <LogIn />
                </button>
                <div className={s.form} ref={registration_menu_ref}>
                    <LoginForm />
                </div>
            </div>
        </nav>
    )
}
