import React from 'react';
import classes from './Canvas.module.css';
import ava from '../../../../images/vika2.jpg';

class Canvas extends React.Component {

    componentDidMount () {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const img = this.refs.image;

        img.onload = () => {
            ctx.shadowColor = 'black';
            ctx.shadowBlur = 5;
            ctx.shadowOffsetY = 3;
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#604051';
            ctx.moveTo(150, 2);
            ctx.quadraticCurveTo(50, 0, 35, 80);
            ctx.lineTo(10, 300);
            ctx.quadraticCurveTo(10, 370, 80, 340);
            ctx.quadraticCurveTo(160, 300, 240, 340);
            ctx.quadraticCurveTo(310, 370, 310, 300);
            ctx.lineTo(280, 80);
            ctx.quadraticCurveTo(270, 0, 150, 2);
            ctx.stroke();
            ctx.clip();
            ctx.drawImage(img, 0, 0);
        }
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <canvas ref='canvas' id={classes.draw} width="320" height="360"></canvas>
                <img ref='image' id={classes.ava} className={classes.hidden} src={ava} />
            </div>
        )
    }
}

export default Canvas;