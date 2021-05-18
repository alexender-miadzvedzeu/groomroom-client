import React from 'react';
import classes from './Main.module.css';
import Master from './Master/Master';
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";
import Questions from "./Questions/Questions";

const Main = () => {
    return (
        <div className={classes.wrapper}>
            <Master />
            <Services />
            <Gallery />
            <Questions />
        </div>
    )
}

export default Main;