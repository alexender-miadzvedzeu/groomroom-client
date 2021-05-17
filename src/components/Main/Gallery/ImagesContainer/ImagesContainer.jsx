import React, { useEffect, useState } from 'react';
import classes from './ImagesContainer.module.css';
import { connect } from "react-redux";
import { setPhotosAC } from "./../../../../Redux/imagesReducer";
import CenterMode from "./Slick/Slick";
import Slider from "./Slider/Slider.jsx";

const ImagesContainer = (props) => {
    // useEffect(() => {
    //     const responce = async () => {
    //         await fetch('http://localhost:8888/images', {
    //             method: 'get'
    //         })
    //         .then(responce => responce.json())
    //         .then(data => setPhotos(data))
    //     }
    //     responce();
    // }, [])

    // const setPhotos = photoData => {
    //     props.setPhotos(photoData)
    // }
    return (
        <div className={classes.wrapper}>
            <div className={classes.imgBox}>
                {/* <CenterMode /> */}
                <Slider />
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