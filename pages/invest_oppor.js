import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
SwiperCore.use([Navigation]);

const goPrev = () => {
    const swiper = document.querySelector('.swiper-container1').swiper;
    swiper.slidePrev();
};

const goNext = () => {
    const swiper = document.querySelector('.swiper-container1').swiper;
    swiper.slideNext();
};
export default function InvestOppor() {
    return (
        <>
            <div className='pd'>
                <section className="invest_oppor">
                    <div className="container1 ">
                        <div className="col-md-6 col-12">
                            <h2 className="section-title ">
                                <span>الفرص الاستثمارية</span>
                            </h2>
                        </div>
                        <div>
                            <Link className="investbtn" href="investment_opportunities">للإطلاع على جميع الفرص الاستثمارية</Link>
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
                            prevEl: '.owl-prev',
                            nextEl: '.owl-next',
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
                                spaceBetween: 60
                            }
                        }
                        }

                        modules={[Pagination]}
                        className="swiper-container1"
                    >
                        <div className='wrapper'>
                            <div className='row'>
                                <SwiperSlide>
                                    <div class="card">
                                        <a href='#'>
                                            <img src="/images/Amanh.png" />
                                            <div className='oppor-work'>
                                                <h5 class="card_title">
                                                    انشاء و تشغيل و صيانة مبنى متعدد الاستخدامات بمركز الرايس على طريق البريكة
                                                </h5>
                                                <p className='card-cat'>
                                                    النشاط :
                                                    <span className='fw-bolder'> تجاري</span>
                                                </p>
                                                <p className='card-date'>
                                                    تاريخ انتهاء الفرصة :
                                                    <span fw-bolder> 20/02/2024</span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="card">
                                        <a href='#'>
                                            <img src="/images/Amanh.png" />
                                            <div className='oppor-work'>
                                                <h5 class="card_title">
                                                    انشاء و تشغيل و صيانة مبنى متعدد الاستخدامات بمركز الرايس على طريق البريكة
                                                </h5>
                                                <p className='card-cat'>
                                                    النشاط :
                                                    <span className='fw-bolder'> تجاري</span>
                                                </p>
                                                <p className='card-date'>
                                                    تاريخ انتهاء الفرصة :
                                                    <span fw-bolder> 20/02/2024</span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="card">
                                        <a href='#'>
                                            <img src="/images/Amanh.png" />
                                            <div className='oppor-work'>
                                                <h5 class="card_title">
                                                    انشاء و تشغيل و صيانة مبنى متعدد الاستخدامات بمركز الرايس على طريق البريكة
                                                </h5>
                                                <p className='card-cat'>
                                                    النشاط :
                                                    <span className='fw-bolder'> تجاري</span>
                                                </p>
                                                <p className='card-date'>
                                                    تاريخ انتهاء الفرصة :
                                                    <span fw-bolder> 20/02/2024</span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="card">
                                        <a href='#'>
                                            <img src="/images/Amanh.png" />
                                            <div className='oppor-work'>
                                                <h5 class="card_title">
                                                    انشاء و تشغيل و صيانة مبنى متعدد الاستخدامات بمركز الرايس على طريق البريكة
                                                </h5>
                                                <p className='card-cat'>
                                                    النشاط :
                                                    <span className='fw-bolder'> تجاري</span>
                                                </p>
                                                <p className='card-date'>
                                                    تاريخ انتهاء الفرصة :
                                                    <span fw-bolder> 20/02/2024</span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="card">
                                        <a href='#'>
                                            <img src="/images/Amanh.png" />
                                            <div className='oppor-work'>
                                                <h5 class="card_title">
                                                    انشاء و تشغيل و صيانة مبنى متعدد الاستخدامات بمركز الرايس على طريق البريكة
                                                </h5>
                                                <p className='card-cat'>
                                                    النشاط :
                                                    <span className='fw-bolder'> تجاري</span>
                                                </p>
                                                <p className='card-date'>
                                                    تاريخ انتهاء الفرصة :
                                                    <span fw-bolder> 20/02/2024</span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </div>
                    </Swiper>
                    <div className="wrapper">
                        {/* <div className="row">
                <div class="card">
                    <a href='#'>
                        <img src="/images/Amanh.png"/>
                    <div className='oppor-work'>
                            <h5 class="card_title">
                            انشاء و تشغيل و صيانة مبنى متعدد الاستخدامات بمركز الرايس على طريق البريكة
                            </h5>
                            <p className='card-cat'>
                                النشاط : 
                            <span className='fw-bolder'> تجاري</span>
                            </p>
                            <p className='card-date'>
                                تاريخ انتهاء الفرصة : 
                                <span fw-bolder> 20/02/2024</span>
                            </p>
                    </div>
                    </a>
                </div>
                <div class="card">
                    <div class="card_image">
                    <a href='#'>
                        <img src="/images/Amanh.png"/>
                    
                    <div className='oppor-work'>
                        <div className='oppor-work-content'>
                            <h5 class="card_title">
                            انشاء و تشغيل و صيانة مبنى متعدد الاستخدامات بمركز الرايس على طريق البريكة
                            </h5>
                            <p className='card-cat'>
                                النشاط : 
                            <span className='fw-bolder'> تجاري</span>
                            </p>
                            <p className='card-date'>
                                تاريخ انتهاء الفرصة : 
                                <span fw-bolder> 20/02/2024</span>
                            </p>
                        </div>
                    </div>
                    </a>
                    </div>                           
                </div>
                <div class="card">
                    <div class="card_image">
                    <a href='#'>
                        <img src="/images/Amanh.png"/>
                    
                    <div className='oppor-work'>
                        <div className='oppor-work-content'>
                            <h5 class="card_title">
                            انشاء و تشغيل و صيانة مبنى متعدد الاستخدامات بمركز الرايس على طريق البريكة
                            </h5>
                            <p className='card-cat'>
                                النشاط : 
                            <span className='fw-bolder'> تجاري</span>
                            </p>
                            <p className='card-date'>
                                تاريخ انتهاء الفرصة : 
                                <span fw-bolder> 20/02/2024</span>
                            </p>
                        </div>
                    </div>
                    </a>
                    </div>                           
                </div>
                <div class="card">
                    <div class="card_image">
                    <a href='#'>
                        <img src="/images/Amanh.png"/>
                    
                    <div className='oppor-work'>
                        <div className='oppor-work-content'>
                            <h5 class="card_title">
                            انشاء و تشغيل و صيانة مبنى متعدد الاستخدامات بمركز الرايس على طريق البريكة
                            </h5>
                            <p className='card-cat'>
                                النشاط : 
                            <span className='fw-bolder'> تجاري</span>
                            </p>
                            <p className='card-date'>
                                تاريخ انتهاء الفرصة : 
                                <span fw-bolder> 20/02/2024</span>
                            </p>
                        </div>
                    </div>
                    </a>
                    </div>                           
                </div>
                </div> */}
                        <div className='oppor_2'>
                            <div className='row'>
                                <div className='single-cat'>
                                    <div className='cat-icon'>
                                        <img src='/images/icon_inve.svg' />
                                    </div>
                                    <div className='cat-cap'>
                                        <h5>للتقديم على الفرص الاستثمارية</h5>
                                        <a href='#' className='cap-btn'>سجل كمستثمر</a>
                                    </div>
                                </div>

                                <div className='single-cat'>
                                    <div className='cat-icon'>
                                        <img src='/images/icon_person.svg' />
                                    </div>
                                    <div className='cat-cap'>
                                        <h5>لإضافة فرصة استثمارية جديدة</h5>
                                        <a href='#' className='cap-btn'>سجل مشروعك</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="oppor_3" >
                            <img src='/images/img_05.png' alt='background' className='imgCover' />
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='single-cat2-inner'>
                                        <h2>خارطة الفرص الإستثمارية</h2>
                                        <a href='#' className='oppor3_btn'>اكتشف المزيد</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}