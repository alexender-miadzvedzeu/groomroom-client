import React from 'react';
import classes from './Questions.module.css';
import Question from "./Question/Question";
import { connect } from 'react-redux';

const Questions = (props) => {
    let questionArr = props.questionsData.map((question, key) => <Question data={question} key={key} />);
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.header}>Часто задаваемые вопросы</h3>
            <div className={classes.container}>
                {questionArr} 
            </div>
            <div className={classes.background}></div>
        </div>
    )
}

let mapStateToProps = (store) => {
    return {
        questionsData: store.questionsReducer.questionsData
    }
}


export default connect(mapStateToProps)(Questions);