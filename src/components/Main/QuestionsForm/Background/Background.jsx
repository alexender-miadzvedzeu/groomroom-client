import React from 'react';
import classes from './Background.module.css';

const Background = props => <div className={classes.wrapper} style={{height: props.formBoxHeight}} ></div>

export default Background;