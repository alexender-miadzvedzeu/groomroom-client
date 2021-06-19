import React from 'react';
import classes from './Gallery.module.css';
import CanvasBeforeG from "./Canvas-beforeG/CanvasBeforeG";
import CanvasAfterG from "./Canvas-afterG/CanvasAfterG";
import BGIconContainerG from "./BGIconGContainer/BGIconContainerG";
import ImagesContainerWrapper from "./ImagesContainerWrapper/ImagesContainerWrapper";


const Gallery = () => {
    return (
        <div className={classes.wrapper} id="gallery">
            <BGIconContainerG />
            <CanvasBeforeG />
            <ImagesContainerWrapper />
            <CanvasAfterG />
        </div>
    )
}

export default Gallery;