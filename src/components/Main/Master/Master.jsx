import React from 'react';
import Canvas from './Canvas/Canvas';
import classes from './Master.module.css';

const Master = () => {
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.head}>Наш мастер</h3>
            <div className={classes.container}>
                <div className={classes.container__canvas}>
                    <Canvas />
                </div>
                <p className={classes.container__text}>Виктория профессиональный грумер, который всегда бережно и нежно поработает с Вашим питомцем, ведь она с самого детства всегда была окружена животными и их бесконечной любовью и лаской</p>
            </div>
            <div className={classes.background}></div>
        </div>
    )
}

export default Master;