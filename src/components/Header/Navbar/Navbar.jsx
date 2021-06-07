import React from 'react';
import classes from './Navbar.module.css';
import logo from '../../../images/logo.png'
import { Link } from "react-scroll";
import { useRef, useEffect } from "react";

const Navbar = props => {

    const navWrapper = useRef();

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 50) {
                navWrapper.current.classList.add('id');
                navWrapper.current.id = classes.scroll;
            } else if (window.scrollY == 0) {
                navWrapper.current.removeAttribute('id');
            }
        });
    },[]);
    
    return (
        <div className={classes.wrapper} ref={navWrapper}>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt="LOGO" />
            </div>
            <ul className={classes.navButtons}>
                <li><Link to="master" smooth={true}>Наш мастер</Link></li>
                <li><Link to="services" smooth={true}>Услуги</Link></li>
                <li><Link to="gallery" smooth={true}>Галерея</Link></li>
                <li><Link to="feedback" smooth={true}>Отзывы</Link></li>
                <li><Link to="contacts" smooth={true}>Контакты</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;