import React, { useEffect, useRef } from 'react';
import classes from './Image.module.css';
import SampleNextArrow from "../SampleArrows/SampleNextArrow.jsx";
import SamplePrevArrow from "../SampleArrows/SamplePrevArrow.jsx";

const Image = props => {
    
    const imagesList = useRef()

    const setPhotos = photos => {
        props.setPhotos(photos);
    }
    
    const moveimagesList = value => {
        imagesList.current.scrollLeft += value;
    }

    useEffect(async () => {
        await fetch(`${process.env.REACT_APP_URL}/images`)
            .then(response => response.json())
            .then(data => setPhotos(data))
    }, []);

    return (
        <div className={classes.wrapper}>
            <div ref={imagesList} className={classes.imageList}>
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
            <div className={classes.arrowBox}>
                <SampleNextArrow onClick={() => moveimagesList(-150)} />
                <SamplePrevArrow onClick={() => moveimagesList(150)} />
            </div>
        </div>
    )
}

export default Image;