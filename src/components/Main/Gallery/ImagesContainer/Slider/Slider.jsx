import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import classes from './Slider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                // className={this.className}
                style={{
                    ...this.style,
                    position: 'relative',
                    bottom: '0',
                    left: '43%',
                    zIndex: 5,
                    display: "block",
                    width: '50px'
                }}
                onClick={this.onClick}
            >
                <canvas ref={this.myCanvas} id={classes.draw} width="50" height="50"></canvas>
            </div>
        )
    }
}



// const SampleNextArrow = props => {
//     const { className, style, onClick } = props;
//     const canvas = useRef().current;
//     console.log(canvas);
//     // const ctx = canvas.getContext("2d");

//     return (
//         <div
//             className={className}
//             style={{ ...style, 
//                 position: 'relative',
//                 bottom: '0',
//                 left: '45%', 
//                 zIndex: 5, 
//                 display: "block", 
//                 // background: "red" 
//             }}
//             onClick={onClick}
//         >
//             <canvas ref={canvas} id={classes.draw} width="320" height="360"></canvas>
//         </div>
//     );
// }

class SamplePrevArrow extends React.Component {
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
                // className={className}
                style={{
                    ...this.style,
                    position: 'relative',
                    top: '308px',
                    left: '50%',
                    zIndex: 5,
                    display: "block",
                    width: '50px' 
                }}
                onClick={this.onClick}
            >
                <canvas style={{transform: 'rotate(180deg)'}} ref={this.myCanvas} id={classes.draw} width="50" height="50"></canvas>
            </div>
        );
    }

}


const CenterMode = props => {
    const [photoArr, setphotoArr] = useState([]);
    useEffect(() => {
        const responce = async () => {
            await fetch("http://localhost:8888/images", {
                method: 'get'
            })
                .then(res => res.json())
                .then(data => setphotoArr(data));
        }
        responce();
    }, []);
    const settings = {
        className: "center",
        centerMode: true,
        // infinite: true,
        // centerPadding: "50px",
        slidesToShow: 4,
        speed: 500,
        lazyLoad: "progressive",
        // adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className={classes.wrapper}>
            <h3 className={classes.header}>Галерея</h3>
            <Slider {...settings}>
                {photoArr.map((elem, key) => <div className={classes.imgBox} key={key}><img className={classes.img} src={elem.image_url} /></div>)}
            </Slider>
        </div>
    );
}

export default CenterMode;