// Import Swiper React components
import {Navigation , Scrollbar,A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeaderSwiper(){
    return(
        <>
        <Swiper
        modules={[Navigation,Scrollbar,A11y,Autoplay]}
        slidesPerView={1}
        navigation={true}
        scrollbar={{draggable: true}}
        loop={true}
        autoplay={{
            delay:2500,
            disableOnInteraction: false,
        }}
        speed={2000}
        className='mySwiper'

    >
        <SwiperSlide>{Slide1()}</SwiperSlide>
        <SwiperSlide>{Slide2()}</SwiperSlide>
        <SwiperSlide>{Slide3()}</SwiperSlide>
    </Swiper>
    </>
    );
}
function Slide1(){
    return(
        <>
        <section className='heder-slide'>
        <div className='hero-bg'>
        <img src='/images/img_04.png'/>
        <div className='carousel__overlay'></div>
        <div className='hero-title'><h2>قطاعات واعدة</h2></div>
        <button className='hero-btn'>إكتشف المزيد</button>
        
        </div>
    </section>
    </>
    )
}
function Slide2(){
    return(
        <> 
        <section className='heder-slide'>
        <div className='hero-bg'>
        <img src='/images/img_02.png'/>
        <div className='carousel__overlay'></div>
        <div className='hero-title'><h2>مزايا الاستثمار</h2></div>
        <button className='hero-btn'>إكتشف المزيد</button>
        
        </div>
    </section>
    </>
    )
}
function Slide3(){
    return(
        <>
        <section className='heder-slide'>
        <div className='hero-bg'>
        <img src='/images/img_03.png'/>
        <div className='carousel__overlay'></div>
        <div className='hero-title'><h2>فرص استثمارية</h2></div>
        <button className='hero-btn'>إكتشف المزيد</button>
        
        </div>
    </section>
        </>
    )
}