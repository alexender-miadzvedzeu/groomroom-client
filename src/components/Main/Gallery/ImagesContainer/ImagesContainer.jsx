import React, { useEffect, useState } from 'react';
import classes from './ImagesContainer.module.css';
import { connect } from "react-redux";
import { setPhotosAC } from "./../../../../Redux/imagesReducer";
import Image from "./Image/Image";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ImagesContainer = (props) => {
    const imgBoxRef = React.createRef()
    useEffect(() => {
        const responce = async () => {
            await fetch('http://localhost:8888/images', {
                method: 'get'
            })
            .then(responce => responce.json())
            .then(data => setPhotos(data))
        }
        responce();

        const width = imgBoxRef.current.getBoundingClientRect().width;
        console.log(width);
    }, [])

    const setPhotos = photoData => {
        props.setPhotos(photoData)
    }

    const imagesArr = props.photos.map((photo, key) => <Image url={photo} key={key} />)

    return (
        <div className={classes.wrapper}>
            <div className={classes.imgBox} ref={imgBoxRef}>
                {/* {imagesArr} */}
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        photos: state.imagesReducer.photoData
    }
}

let mapDispatchToProps = dispatch => {
    return {
        setPhotos: photoData => {
            dispatch(setPhotosAC(photoData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);