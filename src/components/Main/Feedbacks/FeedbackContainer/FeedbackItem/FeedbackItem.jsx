import React, { useRef } from 'react';
import classes from './FeedbackItem.module.css';

// class FeedbackItem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.props = props;
//     }
//     render() {
//         return(
//             <div className={classes.wrapper}>
//                 <h5 className={classes.name}>{this.props.data.feedback_name}</h5>
//                 <p className={classes.text}>{this.props.data.feedback_text}</p>
//             </div>
//         )
//     }
// }

const FeedbackItem = props => {
    return(
        <div className={classes.wrapper}>
            <h5 className={classes.name}>{props.data.feedback_name}</h5>
            <p className={classes.text}>{props.data.feedback_text}</p>
        </div>
    )
}


export default FeedbackItem;