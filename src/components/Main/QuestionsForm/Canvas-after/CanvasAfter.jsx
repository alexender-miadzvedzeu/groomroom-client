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
            let width = null;
            
            if (window.innerWidth <= 675) {
                width = window.innerWidth;
            } else {
                width = window.innerWidth - 17;
            }

            let height = width * 0.05;
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = "#492D3C";
            ctx.lineWidth = 0;

            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(width * 0.1, height, width / 5 * 1, height * 0.9);
            ctx.quadraticCurveTo(width * 0.25, height * 0.9, width / 5 * 1.5, height * 0.7);
            ctx.quadraticCurveTo(width * 0.4, height * 0.2, width / 5 * 2.3, height * 0.4);
            ctx.quadraticCurveTo(width * 0.55, height * 0.8, width / 5 * 3, height * 0.4);
            ctx.quadraticCurveTo(width * 0.65, height * 0.1, width / 5 * 3.5, height * 0.3);
            ctx.quadraticCurveTo(width * 0.8, height * 0.8, width / 5 * 4.5, height * 0.4);
            ctx.quadraticCurveTo(width * 0.95, height * 0.1, width, 0);
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