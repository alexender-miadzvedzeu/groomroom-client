import React from 'react';
import classes from './Image.module.css';

const Image = (props) => {
    return (
        <div className={classes.wrapper}>
            <p classes={classes.pos}></p>
            <img className={classes.image} src={props.url.image_url} alt={props.url.image_url} />
        </div>
    )
}

export default Image;