import React from 'react';
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.imgcontainer}>
                <img className={classes.logo} src={window.location.origin + props.elem.src} />
            </div>
            <h5 className={classes.head}>{props.elem.text}</h5>
        </div>
    )
}

export default Logo;