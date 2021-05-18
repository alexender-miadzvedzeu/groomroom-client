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
            let width = window.innerWidth - 17;
            let height = 50;
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = "#E5DDCD";
            ctx.lineWidth = 0;

            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(width * 0.2, 40, width / 6 * 1.5, 19);
            ctx.quadraticCurveTo(width * 0.29, 7, width / 6 * 1.9, 13);
            ctx.quadraticCurveTo(width * 0.45, 45, width / 6 * 4, 10);
            ctx.quadraticCurveTo(width * 0.7, 5, width / 6 * 4.15, 25);
            ctx.quadraticCurveTo(width * 0.7, 45, width, 25);
            ctx.lineTo(width, 50);
            ctx.lineTo(0, 50);
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