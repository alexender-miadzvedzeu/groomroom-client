import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import classes from './FeedbackContainer.module.css';
import { setFeedBackDataAC } from "./../../../../Redux/feedbackReducer";
import FeedbackItem from "./FeedbackItem/FeedbackItem";
import { Button } from 'react-bootstrap';

const FeedbackContainer = props => {
    const box = useRef()
    useEffect(async () => {
        await fetch('http://localhost:8888/feedback', {
            method: 'get'
        })
        .then(res => res.json())
        .then(data => props.setFeedBackData(data))
    }, []);
    const test = () => {
        let childrens = box.current.childNodes;
        for (let child of childrens) {
            child.getBoundingClientRect().x < 550 ? child.style.transform = 'scale(1)' : null
            child.getBoundingClientRect().x > 550 ? child.style.transform = 'scale(0.9)' : null
            child.getBoundingClientRect().x < 250 ? child.style.transform = 'scale(0.9)' : null
        }
    }
    return (
        <div className={classes.wrapper}>
            <div ref={box} onScroll={test} className={classes.itemBox}>
                <div className={classes.empty}></div>
                {props.feedbackData.map((item, key) => <FeedbackItem key={key} data={item} />)}
            </div>
            <Button style={{position: 'absolute', right: '10%', background: '#FFC3E1', color: '#000', padding: '10px 50px', fontFamily: 'Prosto One', border: 'none', borderRadius: '10px' }} variant="primary" >Написать отзыв</Button>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        feedbackData: state.feedbackReducer.feedbackData
    }
}

let mapDispatchToProps = dispatch => {
    return {
        setFeedBackData: data => {
            dispatch(setFeedBackDataAC(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackContainer);