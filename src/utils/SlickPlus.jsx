import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css"

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "#002e40", borderRadius: "50%" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "#002e40", borderRadius: "50%" }}
//       onClick={onClick}
//     />
//   );
// }


export default function Slick( props ) {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    });
    const settingsPrincipal = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      };

    const settingsMiniaturas = {
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 500,
    lazyload: "ondemand",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="slide-wrapper">
        <Slider 
            {...settingsPrincipal}
            asNavFor={nav2}
            ref={slider => (setSlider1(slider))}
        >
            {
                props.images.map(
                    (e) => (
                        <div className="slick-slide" key={e.id}  >
                            {/* <h2 className="slick-slide-title">{e.alt}</h2> */}
                            <img  className="slick-slide-image" src={`https://picsum.photos/800/400?img=${e.id}`} />
                            <label className="slick-slide-label">{e.footer}</label>
                        </div>
                    )
                )
            }
        </Slider>
        <div className="thumbnail-slider-wrap">
            <Slider 
                {...settingsMiniaturas}
                asNavFor={nav1}
                ref={slider => (setSlider2(slider))}
            >
              {
                props.images.map(
                  (e) => (
                    <div className="slick-slide" key={e.id} onClick = {() => console.log(e.id)}>
                        <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${e.id}`} />
                    </div>
                  )
                )
              }
            
            </Slider>
        </div>
    </div>
  );
}