import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";

const SwiperProjects = ({ images, mobile }) => {
  return (
    <>
      {!mobile && (
        <Swiper
          grabCursor={true}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <img
                src={image.img}
                alt=""
                className=" h-[31vw] w-[41vw] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {mobile && (
        <div>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            loop={true}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCreative, Autoplay, Navigation]}
            className="mySwiper"
          >
            {images.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image.img}
                  alt=""
                  className="h-[50vh] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default SwiperProjects;
