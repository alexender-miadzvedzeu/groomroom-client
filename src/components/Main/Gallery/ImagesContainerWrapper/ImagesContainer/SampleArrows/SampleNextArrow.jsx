import React from 'react';
import classes from './SampleArrows.module.css'

class SampleNextArrow extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.props.onClick;
        this.myCanvas = React.createRef();
        this.className = this.props.className;
    }

    componentDidMount() {
        const canvas = this.myCanvas.current;
        const ctx = canvas.getContext("2d");

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#F44C9D';
        ctx.fillStyle = "#FFC3E1";
        ctx.moveTo(3, 25);
        ctx.quadraticCurveTo(3, 20, 23, 17);
        ctx.quadraticCurveTo(43, 5, 35, 25);
        ctx.quadraticCurveTo(43, 45, 23, 33);
        ctx.quadraticCurveTo(3, 30, 3, 25)
        ctx.stroke();
        ctx.clip();
        ctx.fill();
    }

    render() {
        return (
            <div
                className={classes.nextArrow}
                // style={{
                //     ...this.style,
                //     position: 'relative',
                //     bottom: '0',
                //     left: '45%',
                //     zIndex: 5,
                //     display: "block",
                //     width: '50px'
                // }}
                onClick={this.onClick}
            >
                <canvas ref={this.myCanvas} id={classes.draw} width="50" height="50"></canvas>
            </div>
        )
    }
}

export default SampleNextArrow;