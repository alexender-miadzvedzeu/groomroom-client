import React from 'react';
import classes from './Navbar.module.css';
import logo from '../../../images/logo.png'
import { Link } from "react-scroll";
import { useRef, useEffect } from "react";
import phoneNumLogo from '../../../images/footer/phoneNumLogo.png';
import instagramLogo from '../../../images/footer/instagramLogo.png';
import adresLogo from '../../../images/footer/adresLogo.png';
import workTimeLogo from '../../../images/footer/workTimeLogo.png';

const Navbar = props => {

    const navWrapper = useRef();
    const navButtons = useRef();

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
    
    const toggleCloseClassNavbar = () => {
        navButtons.current.classList.toggle(classes.close);
    }

    return (
        <div className={classes.wrapper} ref={navWrapper}>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt="LOGO" />
            </div>
            <ul onClick={toggleCloseClassNavbar} className={classes.navButtons} ref={navButtons}>
                <li><Link onClick={toggleCloseClassNavbar} to="master" smooth={true}>Наш мастер</Link></li>
                <li><Link onClick={toggleCloseClassNavbar} to="services" smooth={true}>Услуги</Link></li>
                <li><Link onClick={toggleCloseClassNavbar} to="gallery" smooth={true}>Галерея</Link></li>
                <li><Link onClick={toggleCloseClassNavbar} to="feedback" smooth={true}>Отзывы</Link></li>
                <li id={classes.mobileHide}><Link to="contacts" smooth={true}>Контакты</Link></li>

                <div className={classes.contactContainer}>
                    <div className={classes.row}>
                        <div className={classes.iconsContainer}>
                            <img src={phoneNumLogo} alt="phoneNumLogo" />
                        </div>
                        <span className={classes.text}>8 (029) 796-99-66</span>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.iconsContainer}>
                            <img src={instagramLogo} alt="instagramLogo" />
                        </div>
                        <span className={classes.text}>groomroom.minsk</span>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.iconsContainer}>
                            <img src={adresLogo} alt="adresLogo" />
                        </div>
                        <span className={classes.text}>Самарский пер. 5</span>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.iconsContainer}>
                            <img src={workTimeLogo} alt="workTimeLogo" />
                        </div>
                        <span className={classes.text}>пн-вс(9:00-21:00)</span>
                </div>
            </div>
            </ul>
            <div onClick={toggleCloseClassNavbar} className={classes.menuButton}>
                <span className={classes.line}></span>
                <span className={classes.line}></span>
                <span className={classes.line}></span>
            </div>
        </div>
    )
}

export default Navbar;