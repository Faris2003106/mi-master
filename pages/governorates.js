import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

SwiperCore.use([Navigation]);

const goPrev = () => {
  const swiper = document.querySelector(".swiper-container3").swiper;
  swiper.slidePrev();
};

const goNext = () => {
  const swiper = document.querySelector(".swiper-container3").swiper;
  swiper.slideNext();
};

export default function Governorates() {
    return (
    <>
    <section className="gov_section">
        <div className="dividers-header">
            <div className="container">
                <h2 className="section-title3">
                    <span>المحافظات</span>
                </h2>
            <div>
                    <Link className="investbtn3" href="governoratesPage">عرض الكل</Link>
                <div className="owl-custom-control">
                    <button type="button" role="presentation" className="owl-prev swiper-prev" onClick={goPrev}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <button type="button" role="presentation" className="owl-prev swiper-next" onClick={goNext}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </div>
            </div> 
                {/* <div className="col-md-6">
                <div className="listAll-wrapper2">
                    <a className="btn btn-sm" href="#">
                    عرض الكل
                    </a>
                    <div className="owl-custom-control">                    
                    <button
                    type="button"
                    role="presentation"
                    className="owl-prev swiper-prev2"
                    onClick={goPrev}
                    >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button
                    type="button"
                    role="presentation"
                    className="owl-prev swiper-next2"
                    onClick={goNext}
                    >
                    <FontAwesomeIcon icon={faChevronLeft} />
                        </button>                    
                    </div>
                </div>
                </div> */}
            <Swiper
                slidesPerView={6}
                navigation={{
                    prevEl: ".owl-prev",
                    nextEl: ".owl-next",
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
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
                modules={[Pagination]}
                className="swiper-container3"
            >
                <div className="cities-list">
                <SwiperSlide>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">العلا</h5>
                    <img
                    src="/images/cities/ola.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">مهد الذهب</h5>
                    <img
                    src="/images/cities/mahd.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <Link href="yanbu">
                <div className="card-image">
                    <h5 className="card-title">ينبع</h5>
                    <img
                    src="/images/cities/yanbu.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </Link>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">بدر</h5>
                    <img
                    src="/images/cities/badr.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">خيبر</h5>
                    <img
                    src="/images/cities/khbar.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">الحناكية</h5>
                    <img
                    src="/images/cities/alhanikea.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">العيص</h5>
                    <img
                    src="/images/cities/alais.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                </SwiperSlide>
                </div>
            </Swiper>
            </div>
        </div>
    </section>
    </>
);
}
