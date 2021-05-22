import React, { useEffect, useState } from 'react';
import classes from './ImagesContainer.module.css';
import { connect } from "react-redux";
import { setPhotosAC } from "./../../../../Redux/imagesReducer";
import Slider from "./Slider/Slider.jsx";

const ImagesContainer = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.imgBox}>
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