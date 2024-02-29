import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin,faPhone,faEnvelope } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>        
        <footer className="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-3 col-12">
                        <div className="single-footer f-about">
                            <div className="logo">
                                <a href="#">
                                    <img src="/images/footer-logo.png" alt="Logo"/>
                                </a>
                            </div>
                            <p style={{ textAlign: 'justify' }}>
                                احدى مبادرات غرفة المدينة المنورة والتي تهدف لتنشيط الإستثمار بمنطقة المدينة المنورة من خلال حصر وطرح الفرص الإستثمارية من القطاعات الحكومية والخاصة.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-12">
                        <div className="row">
                            <div className="col-lg-4  col-12">
                                <div className="single-footer f-link">
                                    <h3>الروابط</h3>
                                    <ul>
                                        <li><a href="#">سياسة الخصوصية</a></li>
                                        <li><a href="#">الشروط و الأحكام</a></li>
                                        <li><Link href="investment_opportunities">الفرص الاستثمارية</Link></li>
                                        <li><a href="#">مزايا الاستثمار</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4  col-12">
                                <div className="single-footer f-link">
                                    <h3>خدماتنا</h3>
                                    <ul>
                                        <li><Link href="login">تسجيل الدخول</Link></li>
                                        <li><Link href="register">تسجيل</Link></li>
                                        <li><Link href="economic_sectors">القطاعات الواعدة</Link></li>
                                        <li><a href="#">الدراسات الإقتصادية</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="single-footer f-link">
                                    <h3>تواصل معنا</h3>
                                    <ul className="contactul">
                                        <li>
                                            <p>
                                                المملكة العربية السعودية
                                                <br/>
                                                المدينة المنورة
                                                <br/>
                                                طريق الملك عبدالعزيز
                                            </p>
                                        </li>
                                        <li><FontAwesomeIcon icon={faPhone} /><span className="tel">920028910</span></li>
                                        <li><FontAwesomeIcon icon={faEnvelope} /><span className='tel'>info@mcci.org.sa</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="copyright-text">
                            جميع الحقوق محفوظة لغرفة <a href="https://www.mcci.org.sa/" rel="nofollow" target="_blank">المدينة المنورة</a> © 2023
                        </p>
                    </div>
                    <div className="col-md-6">
                        <ul className="social">
                            <li><a target="_blank" href="https://twitter.com/madinahchamber" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/MadinahChamber/" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/madinahchamber/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/company/madinahchamber/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a target="_blank" href="#"><i className="lni lni-envelope"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
    );
}