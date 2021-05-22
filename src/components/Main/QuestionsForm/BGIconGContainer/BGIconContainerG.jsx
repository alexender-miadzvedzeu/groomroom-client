import React from 'react';
import classes from './BGIconContainerG.module.css';
import { connect } from "react-redux";
import BGIcon from "./BGIcon/BGIcon.jsx";

class BGIconContainerG extends React.Component {
    render() {
        console.log(this.props.services.servicesReducer.bgIconsData);
        console.log(this.props.services.questionsReducer.bgIconsData);
        let data = this.props.services.questionsReducer.bgIconsData;
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

export default connect(mapStateToProps)(BGIconContainerG);