import React from 'react';
import classes from './CanvasAfter.module.css';

class CanvasAfter extends React.Component {
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
            ctx.fillStyle = "#492D3C";
            ctx.lineWidth = 0;

            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(width * 0.1, 50, width / 5 * 1, 45);
            ctx.quadraticCurveTo(width * 0.25, 45, width / 5 * 1.5, 35);
            ctx.quadraticCurveTo(width * 0.4, 10, width / 5 * 2.3, 20);
            ctx.quadraticCurveTo(width * 0.55, 40, width / 5 * 3, 20);
            ctx.quadraticCurveTo(width * 0.65, 10, width / 5 * 3.5, 15);
            ctx.quadraticCurveTo(width * 0.8, 40, width / 5 * 4.5, 20);
            ctx.quadraticCurveTo(width * 0.95, 5, width, 0);
            ctx.lineTo(width, 0);
            ctx.lineTo(0, 0);
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

export default CanvasAfter;