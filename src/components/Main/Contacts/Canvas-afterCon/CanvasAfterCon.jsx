import React from 'react';
import classes from './CanvasAfterCon.module.css';

class CanvasAfterCon extends React.Component {
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
            ctx.quadraticCurveTo(width * 0.08, height, width / 5 * 0.5, height * 0.94);
            ctx.quadraticCurveTo(width * 0.15, height * 0.9, width / 5 * 1, height * 0.64);
            ctx.quadraticCurveTo(width * 0.25, height * 0.3, width / 5 * 1.5, height * 0.36);
            ctx.quadraticCurveTo(width * 0.35, height * 0.4, width / 5 * 2.3, height * 0.7);
            ctx.quadraticCurveTo(width * 0.55, height * 0.8, width / 5 * 3, height * 0.5);
            ctx.quadraticCurveTo(width * 0.7, height * 0.1, width / 5 * 4.4, height * 0.7);
            ctx.quadraticCurveTo(width * 1, height * 0.7, width / 5 * 5, 0);
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

export default CanvasAfterCon;