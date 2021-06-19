import React from 'react';
import classes from './Feedbacks.module.css';
import FeedbackContainer from "./FeedbackContainer/FeedbackContainer";

const Feedbacks = props => {
    return (
        <div className={classes.wrapper} id="feedback">
            <h3 className={classes.header}>Отзывы</h3>
            <FeedbackContainer setActive={props.setActive} />
        </div>
    )
}

export default Feedbacks;