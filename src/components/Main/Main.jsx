import React from 'react';
import classes from './Main.module.css';
import Master from './Master/Master';
import Services from "./Services/Services";

const Main = () => {
    return (
        <div className={classes.wrapper}>
            <Master />
            <Services />
        </div>
    )
}

export default Main;