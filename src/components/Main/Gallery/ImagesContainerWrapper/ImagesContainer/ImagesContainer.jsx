import React from 'react';
import classes from './ImagesContainer.module.css';
import { connect } from "react-redux";
import Image from "./Image/Image";
import { setPhotosAC } from "./../../../../../Redux/imagesReducer";

const ImagesContainer = (props) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.imgBox}>
                <Image setPhotos={props.setPhotos} photos={props.photos}/>                
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