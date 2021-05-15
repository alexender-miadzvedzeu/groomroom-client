import React from 'react';
import classes from './Main.module.css';
import Master from './Master/Master';
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";

const Main = () => {
    return (
        <div className={classes.wrapper}>
            <Master />
            <Services />
            <Gallery />
        </div>
    )
}

export default Main;