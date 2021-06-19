import React, { useEffect, useState } from 'react';
import classes from './ImagesContainerWrapper.module.css';
import ImagesContainer from "./ImagesContainer/ImagesContainer";

const ImagesContainerWrapper = (props) => {

    return (
        <div className={classes.wrapper}>
            <ImagesContainer />
        </div> 
    )
}

export default ImagesContainerWrapper;