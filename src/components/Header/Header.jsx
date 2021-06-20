import React from 'react';
import classes from './Header.module.css';
import Navbar from './Navbar/Navbar.jsx'
import { useRef } from "react";

const Header = (props) => {
    return(
        <div className={classes.wrapper}>
            <Navbar/>
            <h3 className={classes.head}>Гигиена - залог здоровья<br/>вашего питомца</h3>
            <div className={classes.button}><span><a className={classes.link} href="https://dikidi.net/386427?p=1.pi-po">Записаться</a></span></div>
        </div>
    )
}

export default Header;