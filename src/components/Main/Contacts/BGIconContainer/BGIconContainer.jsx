import React from 'react';
import classes from './BGIconContainer.module.css';
import { connect } from "react-redux";
import BGIcon from "./BGIcon/BGIcon.jsx";

class BGIconContainer extends React.Component {
    render() {
        let data = this.props.services.servicesReducer.bgIconsData;
        return (
            <div className={classes.wrapper}>
                {data.map((elem, key) => <BGIcon elem={elem} key={key} />)}
            </div>
        )
    }
}

let mapStateToProps = (store) => {
    return {
        services: store
    }
}

export default connect(mapStateToProps)(BGIconContainer);