import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Review.css';
import Card from './Card';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';


const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
const Review = () => {
    return (
        <div className="container">
            <div
                className="testimonial"
                style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
                >
                <div style={{ width: "50%", textAlign: "center" }}>
                    <h1 style={{ margin: '20px 0' }}>Review's</h1>
                    <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
                    </Slider>
                </div>
            </div>
        </div>
    );
};


export default Review;