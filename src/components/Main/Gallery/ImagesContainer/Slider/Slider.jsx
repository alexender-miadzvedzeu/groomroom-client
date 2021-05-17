import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import classes from './Slider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = props => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, 
                position: 'relative',
                bottom: '0',
                left: '45%', 
                zIndex: 5, 
                display: "block", 
                background: "red" 
            }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = props => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, 
                position: 'relative',
                top: '274px', 
                left: '50%',
                zIndex: 5, 
                display: "block", 
                background: "green" 
            }}
            onClick={onClick}
        />
    );
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