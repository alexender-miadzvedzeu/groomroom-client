import React from 'react';
import classes from './Feedbacks.module.css';
import FeedbackContainer from "./FeedbackContainer/FeedbackContainer";

const Feedbacks = () => {
    return (
        <div className={classes.wrapper} id="feedback">
            <h3 className={classes.header}>Отзывы</h3>
            <FeedbackContainer />
        </div>
    )
}

export default Feedbacks;