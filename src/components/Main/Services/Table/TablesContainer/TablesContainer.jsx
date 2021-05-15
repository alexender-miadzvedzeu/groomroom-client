import React from 'react';
import classes from './TablesContainer.module.css';
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CurrentTable from "./CurrentTable/CurrentTable.jsx";
import { setTableAC } from "./../../../../../Redux/servicesReducer";

class TablesContainer extends React.Component {
    render() {
        return (
            <div className={classes.wrapper}>
                {/* <Route path="*" render={() => <CurrentTable store={this.props} table={this.props.tables.prices_1_deco} />} /> */}
                <Route default path="/prices_1_deco" render={() => <CurrentTable store={this.props} table={this.props.tables.prices_1_deco} />} />
                <Route path="/prices_2_lite" render={() => <CurrentTable store={this.props} table={this.props.tables.prices_2_lite} />} />
                <Route path="/prices_3_trim" render={() => <CurrentTable store={this.props} table={this.props.tables.prices_3_trim} />} />
                <Route path="/prices_4_express" render={() => <CurrentTable store={this.props} table={this.props.tables.prices_4_express} />} />
                <Route path="/prices_5_cats" render={() => <CurrentTable store={this.props} table={this.props.tables.prices_5_cats} />} />
                <Route path="/prices_6_complementary" render={() => <CurrentTable store={this.props} table={this.props.tables.prices_6_complementary} />} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tables: state.servicesReducer.tablesData
    }
}
const mapDispathToProps = dispatch => {
    return {
        setTable: (tableName, tableData) => {
            dispatch(setTableAC(tableName, tableData))
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(TablesContainer);