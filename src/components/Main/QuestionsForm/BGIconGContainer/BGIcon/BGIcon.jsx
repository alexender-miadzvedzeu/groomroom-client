import React from 'react';
import classes from './BGIcon.module.css';
const BGIcon = (props) => {
    
    return (
        <div
            className = {classes.icon}
            style = {{
                background: `url(${window.location.origin + props.elem.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain"
            }}
        ></div>
    )
}

export default BGIcon;