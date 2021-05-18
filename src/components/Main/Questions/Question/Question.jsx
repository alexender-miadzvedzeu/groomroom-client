import React from 'react';
import classes from './Question.module.css';
import logo from '../../../../images/qestions/qestions_logo.png'

const Question = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.iconBlock}>
                <img className={classes.icon} src={logo} />
            </div>
            <div className={classes.questionBlock}>
                <h3 className={classes.question}>{props.data.question}</h3>
                <p className={classes.answer}>{props.data.answer}</p>
            </div>
        </div>
    )
}

export default Question;