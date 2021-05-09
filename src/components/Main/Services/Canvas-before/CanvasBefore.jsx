import React from 'react';
import classes from './CanvasBefore.module.css';
import v1 from '../../../../images/services/Vector_1.png';
import v2 from '../../../../images/services/Vector_2.png';
import v3 from '../../../../images/services/Vector_3.png';
import v4 from '../../../../images/services/Vector_4.png';
import v5 from '../../../../images/services/Vector_5.png';
import v6 from '../../../../images/services/Vector_6.png';
import v7 from '../../../../images/services/Vector_7.png';
import v8 from '../../../../images/services/Vector_8.png';

class CanvasBefore extends React.Component {

    componentDidMount() {
        const draw = () => {
            const canvas = this.refs.canvas;
            const ctx = canvas.getContext("2d");
            let width = window.innerWidth - 14;
            let height = 50;
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = "#FFC3E1";
            ctx.lineWidth = 0;
    
            const v1 = this.refs.v1;
            const v2 = this.refs.v2;
            const v3 = this.refs.v3;
            const v4 = this.refs.v4;
            const v5 = this.refs.v5;
            const v6 = this.refs.v6;
            const v7 = this.refs.v7;
            const v8 = this.refs.v8;

            ctx.moveTo(0, 15);
            ctx.quadraticCurveTo(30, 5, 80, 5);
            ctx.quadraticCurveTo(105, 5, 135, 12);
            ctx.quadraticCurveTo(210, 30, 240, 30);
            ctx.quadraticCurveTo(350, 30, 470, 10);
            ctx.quadraticCurveTo(550, 0, 600, 12);
            ctx.quadraticCurveTo(670, 30, width, 0);
            ctx.lineTo(width, 50);
            ctx.lineTo(0, 50);
            ctx.lineTo(0, 15);
            ctx.fill();

            // drawImage(image, x, y, width, height)
            ctx.drawImage(v1, 5, 10, 30, 20);
            ctx.drawImage(v2, 115, 20, 30, 20);
            ctx.drawImage(v3, 260, 30, 20, 20);
            ctx.drawImage(v4, 350, 31, 30, 20);
            ctx.drawImage(v5, 520, 9, 25, 25);
            ctx.drawImage(v7, 620, 25, 25, 25);
        }
        draw();
        window.addEventListener('resize', draw);
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <canvas ref='canvas' id={classes.draw}></canvas>
                <img ref='v1' src={v1} className={classes.iconsHidden} />
                <img ref='v2' src={v2} className={classes.iconsHidden} />
                <img ref='v3' src={v3} className={classes.iconsHidden} />
                <img ref='v4' src={v4} className={classes.iconsHidden} />
                <img ref='v5' src={v5} className={classes.iconsHidden} />
                <img ref='v6' src={v6} className={classes.iconsHidden} />
                <img ref='v7' src={v7} className={classes.iconsHidden} />
                <img ref='v8' src={v8} className={classes.iconsHidden} />
            </div>
        )
    }
}

export default CanvasBefore;