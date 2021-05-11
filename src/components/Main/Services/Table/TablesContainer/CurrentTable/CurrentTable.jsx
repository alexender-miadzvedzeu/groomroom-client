import React from 'react';
import classes from './CurrentTable.module.css';

const CurrentTable = (props) => {
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.tableHead}>{props.table.tableHead}</h3>
            <div className={classes.tableContainer}>
                {props.table.table.map(elem => {
                    return (
                        <div className={classes.tableRow}>
                            <div className={classes.rowName}><span>{elem.service_name}</span></div>
                            <div className={classes.rowPrice}><span>{elem.service_price} byn</span></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CurrentTable;