import React, { useEffect } from 'react';
import classes from './ImagesContainer.module.css';
import { connect } from "react-redux";
import { setPhotosAC } from "./../../../../Redux/imagesReducer";
import Image from "./Image/Image";

const ImagesContainer = (props) => {
    const setPhotos = photoData => {
        props.setPhotos(photoData)
    }
    useEffect(() => {
        const responce = async () => {
            await fetch('http://localhost:8888/images', {
                method: 'get'
            })
            .then(responce => responce.json())
            .then(data => setPhotos(data))
        }
        responce();
    }, [])

    const imagesArr = props.photos.map(photo => <Image url={photo} />)

    return (
        <div className={classes.wrapper}>
            <div className={classes.imgBox}>
                {imagesArr}
            </div>
        </div>
    )
}
// connect
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