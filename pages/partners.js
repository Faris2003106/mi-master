
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Partners() {
    return(
        <>
        <section>
        <div className="dividers-header">
            <div className="container">
            <div className="row">
                <h2 className="section-title3">
                    <span>الشركاء</span>
                </h2>
                </div>
                </div>
                <Swiper
                slidesPerView={6}
                freeMode={true}
                // loop={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                breakpoints={{
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 10
                    },
                    414: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                }
                }
                modules={[Pagination, Autoplay]}
                className="swiper-container3"
                >
                <div className="partners-list">
                    <SwiperSlide>
                    <a href="#">
                <div className="partners-card-image">
                    <img
                    src="/images/M1.jpg"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="#">
                <div className="partners-card-image">
                    <img
                    src="/images/M2.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="#">
                <div className="partners-card-image">
                    <img
                    src="/images/M3.jpg"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="#">
                <div className="partners-card-image">
                    <img
                    src="/images/M4.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="#">
                <div className="partners-card-image">
                    <img
                    src="/images/M5.jpg"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href="#">
                <div className="partners-card-image">
                    <img
                    src="/images/M6.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                    </SwiperSlide>                
                </div>
                </Swiper>
        </div>
        </section>
        </>
    );
}