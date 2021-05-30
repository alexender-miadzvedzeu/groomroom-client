import React, { useEffect } from 'react';
import classes from './CurrentTable.module.css';

const CurrentTable = props => {
    const setTable = (tableName, tableData) => {
        props.store.setTable(tableName, tableData);
    };
    useEffect(() => {
        let tableName = props.table.tableName;
        const responce = async () => {
            await fetch(`${process.env.REACT_APP_URL}/services/${tableName}`, {
                method: 'get'
            })
            .then(req => req.json())
            .then(data => setTable(tableName, data));
        }
        responce();
    }, [])
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.tableHead}><span>{props.table.tableHead}</span></h3>
            <div className={classes.tableContainer}>
                {props.table.table.map((elem, key) => {
                    return (
                        <div className={classes.tableRow} key={key}>
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