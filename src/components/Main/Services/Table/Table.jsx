import React from 'react';
import classes from './Table.module.css';
import TableNavBar from "./TableNavBar/TableNavBar";
import TablesContainer from "./TablesContainer/TablesContainer";

const Table = (props) => {
    return (
        <div className={classes.wrapper}>
            <TableNavBar />
            <TablesContainer />
        </div>
    )
}

export default Table;