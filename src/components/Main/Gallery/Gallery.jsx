import React from 'react';
import classes from './Gallery.module.css';
import ImagesContainer from "./ImagesContainer/ImagesContainer";
import CanvasBeforeG from "./Canvas-beforeG/CanvasBeforeG";
import CanvasAfterG from "./Canvas-afterG/CanvasAfterG";
import BGIconContainerG from "./BGIconGContainer/BGIconContainerG";


const Gallery = () => {
    return (
        <div className={classes.wrapper} id="gallery">
            <CanvasBeforeG />
            <ImagesContainer />
            <CanvasAfterG />
            <BGIconContainerG />
        </div>
    )
}

export default Gallery;