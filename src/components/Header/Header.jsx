import React from 'react';
import classes from './Header.module.css';
import Navbar from './Navbar/Navbar.jsx'
import { useRef } from "react";

const Header = (props) => {
    return(
        <div className={classes.wrapper}>
            <Navbar/>
            <h3 className={classes.head}>Гигиена - залог здоровья<br/>вашего питомца</h3>
            <div className={classes.button}><span><a className={classes.link} href="https://l.instagram.com/?u=https%3A%2F%2Fdikidi.online%2F386427&e=ATNkpDb0M8E0JIQsDpZIQrEC3dCn3IItPkCrpwVuTo7jy5JuPJaXHyjNFhQDXrBTMyI4i-nvaeuZCfT8J6IdfQ&s=1">Записаться</a></span></div>
        </div>
    )
}

export default Header;