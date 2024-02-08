import Link from "next/link";
import PromisingCard from "./promising_sectors_card";
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
          <div>
            <a className="investbtn2" href="#">عرض الكل</a>
            <div className="owl-custom-control">
                    <button type="button" role="presentation" className="owl-prev swiper-prev" onClick={goPrev}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <button type="button" role="presentation" className="owl-prev swiper-next" onClick={goNext}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
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
          breakpoints={{
            1440: {
              slidesPerView: 4,
              spaceBetween: 10
          },
          414: {
              slidesPerView: 1,
              spaceBetween: 0
          }
        }
        }
          modules={[Pagination]}
          className="swiper-container2"
        >
          <SwiperSlide>
            <a href="#">
            <div class="promising_card">                              
                <div className="icon-box">                  
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaintRoller} />
                    </div>                
                  <h4>
                    أنشطة تجارة الجملة والتجزئة
                  </h4>
                  <p>وتشمل ( البيع بالجملة والتجزئة لجميع السلع)</p>
                </div>              
            </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
          <a href="#">
            <div class="promising_card">                              
                <div className="icon-box">                  
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaintRoller} />
                    </div>                
                  <h4>
                    أنشطة تجارة الجملة والتجزئة
                  </h4>
                  <p>وتشمل ( البيع بالجملة والتجزئة لجميع السلع)</p>
                </div>              
            </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
          <a href="#">
            <div class="promising_card">                              
                <div className="icon-box">                  
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaintRoller} />
                    </div>                
                  <h4>
                    أنشطة تجارة الجملة والتجزئة
                  </h4>
                  <p>وتشمل ( البيع بالجملة والتجزئة لجميع السلع)</p>
                </div>              
            </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
          <a href="#">
            <div class="promising_card">                              
                <div className="icon-box">                  
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaintRoller} />
                    </div>                
                  <h4>
                    أنشطة تجارة الجملة والتجزئة
                  </h4>
                  <p>وتشمل ( البيع بالجملة والتجزئة لجميع السلع)</p>
                </div>              
            </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
          <a href="#">
            <div class="promising_card">                              
                <div className="icon-box">                  
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaintRoller} />
                    </div>                
                  <h4>
                    أنشطة تجارة الجملة والتجزئة
                  </h4>
                  <p>وتشمل ( البيع بالجملة والتجزئة لجميع السلع)</p>
                </div>              
            </div>
            </a>
          </SwiperSlide>
        </Swiper> 
      </section>
    </>
  );
}
