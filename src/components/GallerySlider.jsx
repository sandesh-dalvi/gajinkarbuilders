import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "./gallery.css";
import img1 from "../assets/images/aspiretowers/aspiremain.jpeg";
import img2 from "../assets/images/aurasky/auramain.jpg";
import img3 from "../assets/images/bridgeview/bridgemain.jpg";
import img4 from "../assets/images/dattaguru/dattamain4.jpg";
import img5 from "../assets/images/lamour/lamourmain1.jpg";
import img6 from "../assets/images/stoneharmony/harmmain2.jpg";
import img7 from "../assets/images/stoneresidency/stonemain.jpg";

const GallerySlider = () => {
  return (
    <>
      <div className="gallery-slider">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1.src} className=" w-full h-full object-cover" />
            <h2 className=" font-bold text-center p-1">Aspire Towers</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2.src} className=" w-full h-full object-cover" />
            <h2 className=" font-bold text-center p-1">Aura Sky Apartments</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3.src} className=" w-full h-full object-cover" />
            <h2 className=" font-bold text-center p-1">
              Bridge View Apartments
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4.src} className=" w-full h-full object-cover" />
            <h2 className=" font-bold text-center p-1">
              Dattaguru Ashirwad Apartments
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5.src} className=" w-full h-full object-cover" />
            <h2 className=" font-bold text-center p-1">
              L'Amour Classic Apartment
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6.src} className=" w-full h-full object-cover" />
            <h2 className=" font-bold text-center p-1">Stonecast Harmony</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7.src} className=" w-full h-full object-cover" />
            <h2 className=" font-bold text-center p-1">Stonecast Residency</h2>
          </SwiperSlide>
        </Swiper>

        <div className="gallery-content">
          <div>Gallery</div>
          <div>Capturing Timeless Beauty</div>
          <a href="/gallery">See More</a>
        </div>
      </div>
    </>
  );
};

export default GallerySlider;
