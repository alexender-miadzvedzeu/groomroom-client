import React from 'react';
import classes from './LogoContainer.module.css';
import { connect } from "react-redux";
import Logo from "./Logo/Logo";

class LogoContainer extends React.Component {
    render() {
        let data = this.props.services.servicesReducer.servicesData;
        return (
            <div className={classes.wrapper}>
                {data.map(elem => {
                    return <Logo elem={elem}/>
                })}
            </div>
        )
    }
}

let mapStateToProps = (store) => {
    return {
        services: store
    }
}

export default connect(mapStateToProps)(LogoContainer);