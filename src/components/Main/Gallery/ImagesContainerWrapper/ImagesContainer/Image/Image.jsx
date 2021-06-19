import React, { useEffect, useState } from 'react';
import classes from './Image.module.css';

const Image = props => {
    const textRef = React.createRef();
    const [pos, setPos] = useState(0);

    const setPhotos = photos => {
        props.setPhotos(photos);
    }
    useEffect(async () => {
        await fetch(`${process.env.REACT_APP_URL}/images`)
            .then(response => response.json())
            .then(data => setPhotos(data))

    }, []);
    
    return (
        <div className={classes.wrapper}>
            <div className={classes.imageList}>
                {props.photos.map((elem, key) => {
                    return (
                        <div className={classes.imageWrapper} key={key} >
                            <div className={classes.imgConteiner}>
                                <img className={classes.image} src={elem.image_url} alt={elem.image_url} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Image;