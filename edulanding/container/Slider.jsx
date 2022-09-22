import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../pages/images/y1.png"
import img2 from "../pages/images/y2.png"
import img3 from "../pages/images/y3.png"
import img4 from "../pages/images/y4.png"
import img5 from "../pages/images/y5.png"

import Image from "next/image";


const Sliderr = () => {
     const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 200,
      cssEase: "linear"
    };
  return (
    <div>
      
        <Slider {...settings}>
          <div>
           <Image
          src={img1}
          alt=""
          width={400}
          height={270}
        />
          </div>
          <div>
            <Image
          src={img2}
          alt=""
          width={400}
          height={270}
        />
          </div>
          <div>
            <Image
          src={img3}
          alt=""
          width={400}
          height={270}
        />
          </div>
          <div>
           <Image
          src={img4}
          alt=""
          width={400}
          height={270}
        />
          </div>
          <div>
           <Image
          src={img5}
          alt=""
          width={400}
          height={270}
        />
          </div>
         
        </Slider>
      </div>
  )
}

export default Sliderr