import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin,faPhone,faEnvelope } from '@fortawesome/free-brands-svg-icons';
/*const links = ["عن المنصة", "الميزة النسبية للمنطقة", "القطاعات", "الفرص الاستثمارية","خارطة الفرص الاستثمارية","المكتبة الاقتصادية","تواصل معنا"];*/

// Import Swiper React components
import {Navigation , Scrollbar,A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Header() { 
    // script for the changing header background color by scrolling
    // useEffect(() => {
    //     // Run this code when the component mounts
    //     $(window).on('scroll', function() {
    //     if ($(window).scrollTop() > 50) {
    //         $('.header').addClass('active');
    //     } else {
    //         $('.header').removeClass('active');
    //     }
    //     });
    // }, []);
    const [active, setActive] = useState(false);

  useEffect(() => {
    // Run this code when the component mounts
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);
    return (
        <>
        <header>
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
        <div className={`header ${active ? 'active' : ''}`}>
        <a href='#' className='logo'>
        {active ? (
            <img src='/images/mi.png' alt='Logo' />
        ) : (
            <img src='/images/MI_Logo_WH.png' alt='Logo' />
        )}
        </a>
        <input type='checkbox' id='menu-bar'/>
        <label for="menu-bar" id='menu-bar-label'>Menu</label>
    <nav className='navbar'>
        <ul>
            <li><Link href="about">عن المنصة</Link></li>
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