import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faPaintRoller,
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
  const swiper = document.querySelector(".swiper-container2").swiper;
  swiper.slidePrev();
};

const goNext = () => {
  const swiper = document.querySelector(".swiper-container2").swiper;
  swiper.slideNext();
};

export default function PromisingSectors() {
  return (
    <>
      <section className="invest_oppor">
        <div className="container1">
          <h2 className="section-title2">
            <span>القطاعات الواعدة</span>
          </h2>
          <div className="col-md-6">
            <div className="listAll-wrapper2">
              <a className="btn" href="#">
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
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          navigation={{
            prevEl: ".owl-prev",
            nextEl: ".owl-next",
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          className="swiper-container2"
        >
          <SwiperSlide>
            <div class="promising_card">
              <div className="owl-item">
                <a href="#"></a>
                <div className="icon-box">
                  <a href="#">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaintRoller} />
                    </div>
                  </a>
                  <h4>
                    <a href="#">أنشطة تجارة الجملة والتجزئة</a>
                  </h4>
                  <p>وتشمل ( البيع بالجملة والتجزئة لجميع السلع)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="promising_card">
              <div className="owl-item">
                <a href="#"></a>
                <div className="icon-box">
                  <a href="#">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaintRoller} />
                    </div>
                  </a>
                  <h4>
                    <a href="#">أنشطة تجارة الجملة والتجزئة</a>
                  </h4>
                  <p>وتشمل ( البيع بالجملة والتجزئة لجميع السلع)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="promising_card">
              <div className="owl-item">
                <a href="#"></a>
                <div className="icon-box">
                  <a href="#">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaintRoller} />
                    </div>
                  </a>
                  <h4>
                    <a href="#">أنشطة تجارة الجملة والتجزئة</a>
                  </h4>
                  <p>وتشمل ( البيع بالجملة والتجزئة لجميع السلع)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="promising_card">
              <div className="owl-item">
                <a href="#"></a>
                <div className="icon-box">
                  <a href="#">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaintRoller} />
                    </div>
                  </a>
                  <h4>
                    <a href="#">أنشطة تجارة الجملة والتجزئة</a>
                  </h4>
                  <p>وتشمل ( البيع بالجملة والتجزئة لجميع السلع)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="promising_card">
              <div className="owl-item">
                <a href="#"></a>
                <div className="icon-box">
                  <a href="#">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaintRoller} />
                    </div>
                  </a>
                  <h4>
                    <a href="#">أنشطة تجارة الجملة والتجزئة</a>
                  </h4>
                  <p>وتشمل ( البيع بالجملة والتجزئة لجميع السلع)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="wrapper">
          <div className="row"></div>
          <div className="oppor_3">
            <img
              src="/images/img_06.png"
              alt="background"
              className="imgCover"
            />
            <div className="row">
              <div className="col-md-12">
                <div className="single-cat2-inner">
                  <h2>التراخيص وإجراءات العمل</h2>
                  <a href="#" className="oppor3_btn">
                    اكتشف المزيد
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
