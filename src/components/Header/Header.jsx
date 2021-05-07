import React from 'react';
import classes from './Header.module.css';
import Navbar from './Navbar/Navbar.jsx'

const Header = (props) => {
    return(
        <div className={classes.wrapper}>
            <Navbar />
            <h3 className={classes.head}>Гигиена - залог здоровья<br/>вашего питомца</h3>
            <div className={classes.button}><span>Записаться</span></div>
        </div>
    )
}

export default Header;