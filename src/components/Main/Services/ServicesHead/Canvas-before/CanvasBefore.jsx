import React from 'react';
import classes from './CanvasBefore.module.css';

class CanvasBefore extends React.Component {
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
            ctx.fillStyle = "#FFC3E1";
            ctx.lineWidth = 0;

            ctx.moveTo(0, 50);
            ctx.quadraticCurveTo(width * 0.1, 5, width / 5 * 1, 5);
            ctx.quadraticCurveTo(width * 0.3, 5, width / 5 * 2, 35);
            ctx.quadraticCurveTo(width * 0.45, 45, width / 5 * 3.1, 15);
            ctx.quadraticCurveTo(width * 0.7, 5, width / 5 * 4.1, 25);
            ctx.quadraticCurveTo(width * 0.9, 35, width, 0);
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

export default CanvasBefore;