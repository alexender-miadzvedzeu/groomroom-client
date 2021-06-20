import React, { useEffect, useRef, useState, useCallback } from 'react';
import classes from './Image.module.css';
import SampleNextArrow from "../SampleArrows/SampleNextArrow.jsx";
import SamplePrevArrow from "../SampleArrows/SamplePrevArrow.jsx";
import ImageViewer from "react-simple-image-viewer";

const Image = props => {

    const imagesList = useRef();

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


    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [];
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    return (
        <div className={classes.wrapper}>
            <div ref={imagesList} className={classes.imageList}>
                {props.photos.map((elem, key) => {
                    images.push(elem.image_url)
                    return (
                        <div className={classes.imageWrapper} key={key} >
                            <div className={classes.imgConteiner}>
                                <img onClick={() => openImageViewer(key)} key={key} className={classes.image} src={elem.image_url} alt={elem.image_url} />
                            </div>
                        </div>
                    )
                })}

                {isViewerOpen && (
                    <div className={classes.viewer}>
                        <ImageViewer
                            src={images}
                            currentIndex={currentImage}
                            onClose={closeImageViewer}
                            backgroundStyle={{
                                position: 'fixed',
                                top: '60px',
                                zIndex: '120',
                                backgroundColor: "rgba(0,0,0,0.9)"
                            }}
                        />
                    </div>
                )}

            </div>
            <div className={classes.arrowBox}>
                <SampleNextArrow onClick={() => moveimagesList(-150)} />
                <SamplePrevArrow onClick={() => moveimagesList(150)} />
            </div>
        </div>
    )
}

export default Image;