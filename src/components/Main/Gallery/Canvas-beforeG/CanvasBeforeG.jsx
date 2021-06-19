import React from 'react';
import classes from './CanvasBeforeG.module.css';

class CanvasBeforeG extends React.Component {
    constructor(props) {
        super(props);
        this.myCanvas = React.createRef();
    }
    componentDidMount() {
        const draw = () => {
            const canvas = this.myCanvas.current;
            const ctx = canvas.getContext("2d");
            let width = null;
            
            if (window.innerWidth <= 675) {
                width = window.innerWidth;
            } else {
                width = window.innerWidth - 17;
            }

            let height = width * 0.05;
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = "#E5DDCD";
            ctx.lineWidth = 0;

            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(width * 0.2, height * 0.8, width / 6 * 1.5, height * 0.38);
            ctx.quadraticCurveTo(width * 0.29, height * 0.14, width / 6 * 1.9, height * 0.26);
            ctx.quadraticCurveTo(width * 0.45, height * 0.9, width / 6 * 4, height * 0.2);
            ctx.quadraticCurveTo(width * 0.7, height * 0.1, width / 6 * 4.15, height * 0.5);
            ctx.quadraticCurveTo(width * 0.7, height * 0.9, width, height * 0.5);
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.fill();
        }
        draw();
        window.addEventListener('resize', draw);
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <canvas ref={this.myCanvas} id={classes.draw}></canvas>
            </div>
        )
    }
}

export default CanvasBeforeG;