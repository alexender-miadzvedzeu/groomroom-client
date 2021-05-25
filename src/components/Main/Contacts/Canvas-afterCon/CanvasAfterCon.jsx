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
            let width = window.innerWidth - 17;
            let height = 50;
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = "#E5DDCD";
            ctx.lineWidth = 0;

            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(width * 0.08, 50, width / 5 * 0.5, 47);
            ctx.quadraticCurveTo(width * 0.15, 45, width / 5 * 1, 32);
            ctx.quadraticCurveTo(width * 0.25, 15, width / 5 * 1.5, 18);
            ctx.quadraticCurveTo(width * 0.35, 20, width / 5 * 2.3, 35);
            ctx.quadraticCurveTo(width * 0.55, 40, width / 5 * 3, 25);
            ctx.quadraticCurveTo(width * 0.7, 5, width / 5 * 4.4, 35);
            ctx.quadraticCurveTo(width * 1, 35, width / 5 * 5, 0);
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