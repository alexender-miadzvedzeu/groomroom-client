import React from 'react';
import classes from './Canvas.module.css';
import ava from '../../../../../images/ava_question.jpg';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.myCanvas = React.createRef();
        this.myImg = React.createRef();
    }

    componentDidMount () {
        const draw = () => {
            const canvas = this.myCanvas.current;
            const ctx = canvas.getContext("2d");
            const img = this.myImg.current;
            
            let width = window.innerWidth / 3;
            let height = window.innerWidth / 3;

            if (window.innerWidth > 1200) {
                width = 1200 / 3;
                height = 1200 / 3;
            }
            
            canvas.width = width;
            canvas.height = height;
            
            ctx.shadowColor = 'black';
            ctx.shadowBlur = 5;
            ctx.shadowOffsetY = 3;
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#604051';
            ctx.moveTo(width / 2, height * 0.025);
            ctx.quadraticCurveTo(width * 0.2, height * 0.03, width * 0.15, height * 0.2);
            ctx.lineTo(width * 0.06, height * 0.85);
            ctx.quadraticCurveTo(width * 0.07, height * 1, width * 0.275, height * 0.9);
            ctx.quadraticCurveTo(width * 0.5, height * 0.75, width * 0.725, height * 0.9);
            ctx.quadraticCurveTo(width * 0.93, height * 1, width * 0.94, height * 0.85);
            ctx.lineTo(width * 0.85, height * 0.2);
            ctx.quadraticCurveTo(width * 0.8, height * 0.03, width / 2, height * 0.025);
            ctx.stroke();
            ctx.clip();
            ctx.drawImage(img, width * 0.05, - height * 0.2, width * 0.9, height * 1.15);

            img.onload = () => {
                ctx.drawImage(img, width * 0.05, - height * 0.2, width * 0.9, height * 1.15);
            }
        }
        draw();
        window.addEventListener('resize', draw);
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <canvas ref={this.myCanvas} id={classes.draw} width="320" height="360"></canvas>
                <img ref={this.myImg} id={classes.ava} className={classes.hidden} src={ava} />
            </div>
        )
    }
}

export default Canvas;