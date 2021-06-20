import React from 'react';
import classes from './Footer.module.css';
import logo from '../../images/footer/logo.png'
import phoneNumLogo from '../../images/footer/phoneNumLogo.png';
import instagramLogo from '../../images/footer/instagramLogo.png';
import adresLogo from '../../images/footer/adresLogo.png';
import workTimeLogo from '../../images/footer/workTimeLogo.png';

const Footer = () => {
    let date = new Date()
    return (
        <div className={classes.wrapper}>
            <div className={classes.containerLeft}>
                <div className={classes.logoBox}>
                    <img className={classes.logo} src={logo} alt="logo" />
                </div>
                <div>
                    <p className={classes.name}>{`© ${date.getFullYear()} Groomroom.by`}</p>
                    <a className={classes.linkSachko} href="https://www.instagram.com/sachko.design/">Designed by @alexandr.sachko</a>
                </div>
                
            </div>
            <div className={classes.containerMiddle}>
                <a className={classes.link} href="#">Наш мастер</a>
                <a className={classes.link} href="#">Услуги</a>
                <a className={classes.link} href="#">Галерея</a>
                <a className={classes.link} href="#">Часто задаваемые вопросы</a>
                <a className={classes.link} href="#">Отзывы</a>
                <a className={classes.link} href="#">Контакты</a>
            </div>
            <div className={classes.containerRight}>
                <div className={classes.row}>
                    <div className={classes.logoContainer}>
                        <img src={phoneNumLogo} alt="phoneNumLogo" />
                    </div>
                    <span className={classes.text}><a href="tel:+375(29)796-99-66">+375(29)796-99-66</a></span>
                </div>
                <div className={classes.row}>
                    <div className={classes.logoContainer}>
                        <img src={instagramLogo} alt="instagramLogo" />
                    </div>
                    <span className={classes.text}><a href="https://www.instagram.com/groomroom.minsk/">groomroom.minsk</a></span>
                </div>
                <div className={classes.row}>
                    <div className={classes.logoContainer}>
                        <img src={adresLogo} alt="adresLogo" />
                    </div>
                    <span className={classes.text}>Самарский пер. 5</span>
                </div>
                <div className={classes.row}>
                    <div className={classes.logoContainer}>
                        <img src={workTimeLogo} alt="workTimeLogo" />
                    </div>
                    <span className={classes.text}>пн-вс(9:00-21:00)</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;