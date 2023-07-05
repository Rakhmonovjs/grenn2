
import React from "react";
import header_flower from "../../assets/header_flower.png";
import header_small_flower from '../../assets/header_small_flower.png'
import "./Header.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Autoplay, Pagination } from 'swiper';


const Header = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index) {
      return '<span class="' + index + '">' + "</span>";
    },
  };

  return (
    <div>
<Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          pagination={pagination}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            {" "}
            <div className='header'>
              <div className="header_box">
                <h2>WELCOME TO GREENSHOP </h2>
                <h1>Let’s Make a Better <span>Planet</span></h1>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <button>
                    <span>SHOP NOW</span>
                </button>
              </div>
              <div className="header_flowers">
              <img src={header_small_flower} className="header_small_flower" />
              <img src={header_flower} className="header_flower" />


              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className='header'>
              <div className="header_box">
                <h2>WELCOME TO GREENSHOP </h2>
                <h1>Let’s Make a Better <span>Planet</span></h1>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <button>
                    <span>SHOP NOW</span>
                </button>
              </div>
              <div className="header_flowers">
              <img src={header_small_flower} className="header_small_flower" />
              <img src={header_flower} className="header_flower" />


              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className='header'>
              <div className="header_box">
                <h2>WELCOME TO GREENSHOP </h2>
                <h1>Let’s Make a Better <span>Planet</span></h1>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <button>
                    <span>SHOP NOW</span>
                </button>
              </div>
              <div className="header_flowers">
              <img src={header_small_flower} className="header_small_flower" />
              <img src={header_flower} className="header_flower" />


              </div>
            </div>  
          </SwiperSlide>
        </Swiper>
    </div>
       
  );
}

export default Header