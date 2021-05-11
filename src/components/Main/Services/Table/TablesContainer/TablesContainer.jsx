import React from 'react';
import classes from './TablesContainer.module.css';
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CurrentTable from "./CurrentTable/CurrentTable.jsx";
import reRender from "./../../../../../index";
import CanvasAfter from "./../../ServicesHead/Canvas-after/CanvasAfter";

class TablesContainer extends React.Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <Route path="/prices_1_deco" render={ () => <CurrentTable table={this.props.tables.prices_1_deco}/> } />
                <Route path="/prices_2_lite" render={ () => <CurrentTable table={this.props.tables.prices_2_lite}/> } />
                <Route path="/prices_3_trim" render={ () => <CurrentTable table={this.props.tables.prices_3_trim}/> } />
                <Route path="/prices_4_express" render={ () => <CurrentTable table={this.props.tables.prices_4_express}/> } />
                <Route path="/prices_5_cats" render={ () => <CurrentTable table={this.props.tables.prices_5_cats}/> } />
                <Route path="/prices_6_complementary" render={ () => <CurrentTable table={this.props.tables.prices_6_complementary}/> } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tables: state.servicesReducer.tablesData
    }
}

export default connect(mapStateToProps, null)(TablesContainer);