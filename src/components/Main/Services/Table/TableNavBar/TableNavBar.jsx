import React from 'react';
import classes from './TableNavBar.module.css';
import { NavLink, Link } from 'react-router-dom';

const TableNavBar = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.navButton}>
                <NavLink to="/prices_1_deco" activeClassName={classes.activeLInk}>Комплекс для декоративных собак</NavLink>
            </div>
            <div className={classes.navButton}>
                <NavLink to="/prices_2_lite" activeClassName={classes.activeLInk}>Комплекс “лайт” для декоративных собак</NavLink>
            </div>
            <div className={classes.navButton}>
                <NavLink to="/prices_3_trim" activeClassName={classes.activeLInk}>Комплекс для жёсткошерстных пород(с тримингом)</NavLink>
            </div>
            <div className={classes.navButton}>
                <NavLink to="/prices_4_express" activeClassName={classes.activeLInk}>Комплекс с экспресс-линькой</NavLink>
            </div>
            <div className={classes.navButton}>
                <NavLink to="/prices_5_cats" activeClassName={classes.activeLInk}>Коты</NavLink>
            </div>
            <div className={classes.navButton}>
                <NavLink to="/prices_6_complementary" activeClassName={classes.activeLInk}>Комплекс с экспресс-линькой</NavLink>
            </div>            
        </div>
    )
}

export default TableNavBar;