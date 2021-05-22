import React, { useEffect, useState } from 'react';
import classes from './Image.module.css';

const Image = props => {
    const textRef = React.createRef();
    const [pos, setPos] = useState(0);
    useEffect(() => {
        const position = textRef.current.getBoundingClientRect();
        console.log(position)
        setPos(position);
    }, []);
    const checkSize = () => {

    };
    return (
        <div className={classes.wrapper}>
            <p classes={classes.positionTest} ref={textRef} >{Math.round(pos.x)}</p>
            <img className={classes.image} src={props.url.image_url} alt={props.url.image_url} />
        </div>
    )
}

export default Image;