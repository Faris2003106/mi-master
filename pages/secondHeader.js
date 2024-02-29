import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faPhone, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
export default function SecondHeader() {
    // script for the changing header background color by scrolling
    // useEffect(() => {
    //     // Run this code when the component mounts
    //     $(window).on('scroll', function() {
    //     if ($(window).scrollTop() > 50) {
    //         $('.SecondHeader').addClass('active');
    //     } else {
    //         $('.SecondHeader').removeClass('active');
    //     }
    //     });
    // }, []);
    const [active, setActive] = useState(false);

    useEffect(() => {
        // Run this code when the component mounts
        $(window).on('scroll', function () {
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
                <hr />
                <div className={`SecondHeader ${active ? 'active' : ''}`}>
                    <Link href="/" className='logo'>
                        {active ? (
                            <img src='/images/mi.png' alt='Logo' />
                        ) : (
                            <img src='/images/MI_Logo_WH.png' alt='Logo' />
                        )}
                    </Link>
                    <input type='checkbox' id='menu-bar' />
                    <label for="menu-bar" id='menu-bar-label'>Menu</label>
                    <nav className='navbar'>
                        <ul>
                            <li><Link href="about">عن المنصة</Link></li>
                            <li><a>الميزة النسبية للمنطقة +</a>
                                <ul className='drop-down'>
                                    <li><Link href="medina_region">منطقة المدينة المنورة</Link></li>
                                    <li><Link href="governoratesPage">المحافظات</Link></li>
                                    <li><a href='#'>إمكانات السياحة</a></li>
                                    <li><a href='#'>مزايا الاستثمار</a></li>
                                </ul>
                            </li>
                            <li><a>القطاعات +</a>
                                <ul className='drop-down'>
                                    <li><Link href='economic_sectors'>القطاعات الاقتصادية</Link></li>
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
                            <li><Link href="investment_opportunities">الفرص الاستثمارية</Link></li>
                            <li><a href='#'>خارطة الفرص الاستثمارية</a></li>
                            <li><Link href="economicLibrary">المكتبة الاقتصادية</Link></li>
                            <li><Link href='contact'>تواصل معنا</Link></li>
                        </ul>

                    </nav>
                    {<div>
                        <Link href='register' className='navbtn'>تسجيل</Link>
                    </div>}
                </div>
            </header>
        </>
    );
}