import React from 'react';
import classes from './CanvasAfterG.module.css';

class CanvasAfterG extends React.Component {
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
            ctx.quadraticCurveTo(width * 0.1, 15, width / 6 * 1, 30);
            ctx.quadraticCurveTo(width * 0.2, 40, width / 6 * 1.5, 35);
            ctx.quadraticCurveTo(width * 0.4, 5, width / 6 * 4.0, 5);
            ctx.quadraticCurveTo(width * 0.75, 5, width / 6 * 4.8, 42);
            ctx.quadraticCurveTo(width * 0.81, 50, width / 6 * 5.2, 43);
            ctx.quadraticCurveTo(width * 0.95, 25, width, 0);
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

export default CanvasAfterG;