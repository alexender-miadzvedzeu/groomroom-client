import React from 'react';
import classes from './LogoContainer.module.css';
import { connect } from "react-redux";
import Logo from "./Logo/Logo";

class LogoContainer extends React.Component {
    render() {
        let data = this.props.services.servicesReducer.servicesData;
        return (
            <div className={classes.wrapper}>
                <h3 className={classes.head}>Услуги</h3>
                <div className={classes.container}>
                    {data.map(elem => {
                        return <Logo elem={elem} />
                    })}
                </div>
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