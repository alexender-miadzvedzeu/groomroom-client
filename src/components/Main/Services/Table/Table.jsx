import React from 'react';
import classes from './Table.module.css';
import { useRef, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { setTableAC } from "./../../../../Redux/servicesReducer";

const Table = props => {
    const navBar = useRef();
    const row = useRef();
    useEffect(() => {
        getTable('prices_1_deco');
        for (let tab of navBar.current.children) {
            tab.addEventListener('click', () => {
                for (let tab of navBar.current.children) {
                    tab.removeAttribute('id');
                }
                tab.classList.add('id');
                tab.id = classes.active;
            });
        }
    },[]);

    const getTable = async tabName => {
        await fetch(`${process.env.REACT_APP_URL}/services/${tabName}`, {
            method: 'GET'
        })
        .then(responce => responce.json())
        .then(data => props.setCurrentTable(data));
    }

    let currentTabe = props.currentTable.map((tableRowInfo, key) => {
        return (
            <div className={classes.tableRow} key={key}>
                <p className={classes.tableRow_name}>{tableRowInfo.service_name}</p>
                <p className={classes.tableRow_price}>{tableRowInfo.service_price} byn</p>
            </div>
        )
    });
    
    
    return (
        <div className={classes.wrapper}>
            <div className={classes.navBar} ref={navBar}>
                <div onClick={() => getTable('prices_1_deco')} className={classes.navButton} id={classes.active}>
                    <span className={classes.navButton_text}>Комплекс для декоративных собак</span>
                </div>
                <div onClick={() => getTable('prices_2_lite')} className={classes.navButton}>
                    <span className={classes.navButton_text}>Комплекс “лайт” для декоративных собак</span>
                </div>
                <div onClick={() => getTable('prices_3_trim')} className={classes.navButton}>
                    <span className={classes.navButton_text}>Комплекс для жёсткошерстных пород(с тримингом)</span>
                </div>
                <div onClick={() => getTable('prices_4_express')} className={classes.navButton}>
                    <span className={classes.navButton_text}>Комплекс с экспресс-линькой</span>
                </div>
                <div onClick={() => getTable('prices_5_cats')} className={classes.navButton}>
                    <span className={classes.navButton_text}>Коты</span>
                </div>
                <div onClick={() => getTable('prices_6_complementary')} className={classes.navButton}>
                    <span className={classes.navButton_text}>Комплекс с экспресс-линькой</span>
                </div>
            </div>
            <div className={classes.tableRowConteiner}>
                {currentTabe}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentTable: state.servicesReducer.currentTable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentTable: currentTable => {
            dispatch(setTableAC(currentTable))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);