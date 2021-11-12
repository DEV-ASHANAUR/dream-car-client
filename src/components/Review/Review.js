import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Review.css';
import Card from './Card';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const PreviousBtn = (props) => {

    //console.log(props);
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
  const [loading,setLoading] = useState(true);
  const [review,setReview] = useState([]);
  useEffect(() => {
    fetch(`https://enigmatic-reaches-63281.herokuapp.com/review`)
        .then(res => res.json())
        .then(data => {
          setReview(data);
          setLoading(false);
        })
    }, [])
    return (
        <div className="container">
            <div
                className="testimonial"
                style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
                >
                <div style={{ width: "50%", textAlign: "center" }}>
                    <h1 style={{ margin: '20px 0' }}>Review's</h1>
                    {
                      loading ? 
                      <div className="col text-center">
                          <button className="btn btn-primary" type="button" disabled>
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              Loading...
                          </button>
                      </div>
                      :
                      <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                          {
                          review.length > 0 ?
                          review.map((item)=><Card key={item._id} data={item} />)
                          :
                          <h3>No Review Available</h3>
                        } 
                      
                    </Slider>
                  }
                </div>
            </div>
        </div>
    );
};


export default Review;