import React from 'react';
import classes from './Services.module.css';
import ServicesHead from "./ServicesHead/ServicesHead";
import Table from "./Table/Table";

const Services = (props) => {
    return (
        <div className={classes.wrapper}>
            <ServicesHead />
            <Table />
        </div>
    )
}

export default Services;