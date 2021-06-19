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
            ctx.quadraticCurveTo(width * 0.1, height * 0.3, width / 6 * 1, height * 0.6);
            ctx.quadraticCurveTo(width * 0.2, height * 0.8, width / 6 * 1.5, height * 0.7);
            ctx.quadraticCurveTo(width * 0.4, height * 0.1, width / 6 * 4.0, height * 0.1);
            ctx.quadraticCurveTo(width * 0.75, height * 0.1, width / 6 * 4.8, height * 0.84);
            ctx.quadraticCurveTo(width * 0.81, height, width / 6 * 5.2, height * 0.86);
            ctx.quadraticCurveTo(width * 0.95, height * 0.5, width, 0);
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