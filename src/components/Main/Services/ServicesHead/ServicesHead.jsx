import React from 'react';
import classes from './ServicesHead.module.css';
import CanvasBefore from "./Canvas-before/CanvasBefore";
import LogoContainer from "./LogoContainer/LogoContainer";
import CanvasAfter from "./Canvas-after/CanvasAfter";
import BGIconContainer from "./BGIconContainer/BGIconContainer";

const ServicesHead = (props) => {
    return (
        <div className={classes.wrapper}>
            <CanvasBefore />
            <LogoContainer />
            <CanvasAfter />
            <BGIconContainer />
        </div>
    )
}

export default ServicesHead;