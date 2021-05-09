import React from 'react';
import classes from './Services.module.css';
import CanvasBefore from "./Canvas-before/CanvasBefore";
import { connect } from 'react-redux';
import LogoContainer from "./LogoContainer/LogoContainer";
import CanvasAfter from "./Canvas-after/CanvasAfter";

const Services = () => {
    return (
        <div className={classes.wrapper}>
            <CanvasBefore />
            <LogoContainer />
            <CanvasAfter />
        </div>
    )
}

export default Services;