import React, { useEffect, useState } from 'react';
import classes from './ImagesContainerWrapper.module.css';
import ImagesContainer from "./ImagesContainer/ImagesContainer";

const ImagesContainerWrapper = (props) => {

    return (
        <div className={classes.wrapper}>
            <h3 className={classes.header}>Галерея</h3>
            <ImagesContainer />
        </div> 
    )
}

export default ImagesContainerWrapper;