import Image from 'next/image'
import React, { useEffect } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin,faPhone,faEnvelope } from '@fortawesome/free-brands-svg-icons';
/*const links = ["عن المنصة", "الميزة النسبية للمنطقة", "القطاعات", "الفرص الاستثمارية","خارطة الفرص الاستثمارية","المكتبة الاقتصادية","تواصل معنا"];*/

// Import Swiper React components
import {Navigation , Pagination, Scrollbar,A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import SwiperCore, {Autoplay} from 'swiper';

// SwiperCore.use([Autoplay]);
export default function Header() { 
    // script for the changing header background color by scrolling
    useEffect(() => {
        // Run this code when the component mounts
        $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
        });
    }, []);
    return (
        <>
        <header>
    <div className='header'>
        
        <a href='#' className='logo'><img src='/images/MI_Logo_WH.png'/></a>
        <input type='checkbox' id='menu-bar'/>
        <label for="menu-bar" id='menu-bar-label'>Menu</label>
    <nav className='navbar'>
        <ul>
            <li><a href='#'>عن المنصة</a></li>
            <li><a>الميزة النسبية للمنطقة +</a>
                <ul className='drop-down'>
                    <li><a href='#'>منطقة المدينة المنورة</a></li>
                    <li><a href='#'>المحافظات</a></li>
                    <li><a href='#'>إمكانات السياحة</a></li>
                    <li><a href='#'>مزايا الاستثمار</a></li>
                </ul>
            </li>
            <li><a>القطاعات +</a>
                <ul className='drop-down'>
                    <li><a href='#'>القطاعات الاقتصادية</a></li>
                    <li><a>القطاعات الواعدة +</a>
                    <ul className='drop-down'>
                        <li><a href='#'>القطاع الصناعي</a></li>
                        <li><a href='#'>القطاع الزراعي</a></li>
                        <li><a href='#'>القطاع اللوجستي</a></li>
                        <li><a href='#'>قطاع التشييد والبناء</a></li>
                        <li><a href='#'>القطاع السياحي  </a></li>
                        <li><a href='#'>قطاع المطاعم والمقاهي</a></li>
                        <li><a href='#'>قطاع الجملة والتجزئة</a></li>
                    </ul>
                    </li>
                </ul>
            </li>
            <li><a href='#'>الفرص الاستثمارية</a></li>
            <li><a href='#'>خارطة الفرص الاستثمارية</a></li>
            <li><a href='#'>المكتبة الاقتصادية</a></li>
            <li><a href='#'>تواصل معنا</a></li>
        </ul>
        
        </nav>
        { <div>
            <a href='#' className='navbtn'>تسجيل</a>
            </div>}
    </div>
    </header>
    <Swiper
        modules={[Navigation, Pagination,Scrollbar,A11y,Autoplay]}
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        loop={true}
        autoplay={{
            delay:2500,
            disableOnInteraction: false,
        }}
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
        <div className='top-header'>
        <div className='header-info-left'>
            <ul>
                <li>
                    <a href='#'>English</a>
                </li>
            </ul>            
        </div>
        <div className="header-info-right">
            <ul className="header-social">
                <li><a target="_blank" href="https://twitter.com/madinahchamber" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a target="_blank" href="https://www.facebook.com/MadinahChamber/" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/madinahchamber/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/company/madinahchamber/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a target="_blank" href="/home/Contact"><FontAwesomeIcon icon={faEnvelope} /></a></li>
            </ul>
        </div>
        </div>
        <hr/>
        <section className='heder-slide'>
        <div className='hero-bg'>
        <img src='/images/img_04.png'/>
        <div className='carousel__overlay'>
        <div className='hero-title'><h2>قطاعات واعدة</h2></div>
        <button className='hero-btn'>إكتشف المزيد</button>
        </div>
        </div>
    </section>
    </>
    )
}
function Slide2(){
    return(
        <> 
        <div className='top-header'>
        <div className='header-info-left'>
            <ul>
                <li>
                    <a href='#'>English</a>
                </li>
            </ul>            
        </div>
        <div className="header-info-right">
            <ul className="header-social">
                <li><a target="_blank" href="https://twitter.com/madinahchamber" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a target="_blank" href="https://www.facebook.com/MadinahChamber/" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/madinahchamber/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/company/madinahchamber/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a target="_blank" href="/home/Contact"><FontAwesomeIcon icon={faEnvelope} /></a></li>
            </ul>
        </div>
        </div>
        <hr/>
        <section className='heder-slide'>
        <div className='hero-bg'>
        <img src='/images/img_02.png'/>
        <div className='carousel__overlay'>
        <div className='hero-title'><h2>مزايا الاستثمار</h2></div>
        <button className='hero-btn'>إكتشف المزيد</button>
        </div>
        </div>
    </section>
    </>
    )
}
function Slide3(){
    return(
        <>
        <div className='top-header'>
        <div className='header-info-left'>
            <ul>
                <li>
                    <a href='#'>English</a>
                </li>
            </ul>            
        </div>
        <div className="header-info-right">
            <ul className="header-social">
                <li><a target="_blank" href="https://twitter.com/madinahchamber" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a target="_blank" href="https://www.facebook.com/MadinahChamber/" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/madinahchamber/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/company/madinahchamber/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a target="_blank" href="/home/Contact"><FontAwesomeIcon icon={faEnvelope} /></a></li>
            </ul>
        </div>
        </div>
        <hr/>
        <section className='heder-slide'>
        <div className='hero-bg'>
        <img src='/images/img_03.png'/>
        <div className='carousel__overlay'>
        <div className='hero-title'><h2>فرص استثمارية</h2></div>
        <button className='hero-btn'>إكتشف المزيد</button>
        </div>
        </div>
    </section>
    </>
    )
}


// import Image from 'next/image'

// //import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// //import { faTwitter, faFacebook, faInstagram, faLinkedin,faPhone,faEnvelope } from '@fortawesome/free-brands-svg-icons';
// /*const links = ["عن المنصة", "الميزة النسبية للمنطقة", "القطاعات", "الفرص الاستثمارية","خارطة الفرص الاستثمارية","المكتبة الاقتصادية","تواصل معنا"];*/
// export default function Header() { 
//     return (
//  <div>
//     <h1>test</h1>
//  </div>
//     );
// }