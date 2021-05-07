import React from 'react';
import classes from './Navbar.module.css';
import logo from '../../../images/logo.png'

const Navbar = (props) => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt="LOGO" />
            </div>
            <ul className={classes.navButtons}>
                    <li>Наш мастер</li>
                    <li>Услуги</li>
                    <li>Галерея</li>
                    <li>Отзывы</li>
                    <li>Контакты</li>
                </ul>
        </div>
    )
}

export default Navbar;