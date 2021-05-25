import React from 'react';
import classes from './ContactsContainer.module.css';
import phoneNumLogo from '../../../../images/contacts/phoneNumLogo.png';
import instagramLogo from '../../../../images/contacts/instagramLogo.png';
import adresLogo from '../../../../images/contacts/adresLogo.png';
import workTimeLogo from '../../../../images/contacts/workTimeLogo.png';

const ContactsContainer = () => {
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.header}>Контакты</h3>
            <div className={classes.box}>
                <div className={classes.info}>
                    <div className={classes.contactsInfo}>
                        <div classes={classes.iconBox}>
                            <img className={classes.icon} src={phoneNumLogo} alt="phoneNumLogo" />
                        </div>
                        <div className={classes.textBox}>
                            <span className={classes.text}>8 (029) 796-99-66</span>
                        </div>
                    </div>
                    <div className={classes.contactsInfo}>
                        <div classes={classes.iconBox}>
                            <img className={classes.icon} src={instagramLogo} alt="instagramLogo" />
                        </div>
                        <div className={classes.textBox}>
                            <span className={classes.text}>groomroom.minsk</span>
                        </div>
                    </div>
                    <div className={classes.contactsInfo}>
                        <div classes={classes.iconBox}>
                            <img className={classes.icon} src={adresLogo} alt="adresLogo" />
                        </div>
                        <div className={classes.textBox}>
                            <span className={classes.text}>Самарский пер.5</span>
                        </div>
                    </div>
                    <div className={classes.contactsInfo}>
                        <div classes={classes.iconBox}>
                            <img className={classes.icon} src={workTimeLogo} alt="workTimeLogo" />
                        </div>
                        <div className={classes.textBox}>
                            <span className={classes.text}>пн-вс(9:00-21:00)</span>
                        </div>
                    </div>
                </div>
                <div className={classes.mapContainer}>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A92d2c6d4e8df4161db81ee76e7cd19cb5610659413bbcefb728326edecd76c5e&amp;source=constructor" frameBorder="0">
                    </iframe>
                </div>
            </div>

        </div>
    )
}

export default ContactsContainer;