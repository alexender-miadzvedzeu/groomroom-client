import React from 'react';
import classes from './CanvasBeforeCon.module.css';

class CanvasBeforeCon extends React.Component {
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

            ctx.moveTo(0, height);
            ctx.quadraticCurveTo(width * 0.1, height * 0.1, width / 5 * 1, height * 0.1);
            ctx.quadraticCurveTo(width * 0.3, height * 0.1, width / 5 * 2, height * 0.7);
            ctx.quadraticCurveTo(width * 0.45, height * 0.9, width / 5 * 3.1, height * 0.3);
            ctx.quadraticCurveTo(width * 0.7, height * 0.1, width / 5 * 4.1, height * 0.5);
            ctx.quadraticCurveTo(width * 0.9, height * 0.7, width, 0);
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

export default CanvasBeforeCon;