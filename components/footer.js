
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin,faPhone,faEnvelope } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>        
        <footer class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-3 col-12">
                        <div class="single-footer f-about">
                            <div class="logo">
                                <a href="#">
                                    <img src="/images/footer-logo.png" alt="Logo"/>
                                </a>
                            </div>
                            <p style={{ textAlign: 'justify' }}>
                                احدى مبادرات غرفة المدينة المنورة والتي تهدف لتنشيط الإستثمار بمنطقة المدينة المنورة من خلال حصر وطرح الفرص الإستثمارية من القطاعات الحكومية والخاصة.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                        <div class="row">
                            <div class="col-lg-4  col-12">
                                <div class="single-footer f-link">
                                    <h3>الروابط</h3>
                                    <ul>
                                        <li><a href="#">سياسة الخصوصية</a></li>
                                        <li><a href="#">الشروط و الأحكام</a></li>
                                        <li><a href="#">الفرص الاستثمارية</a></li>
                                        <li><a href="#">مزايا الاستثمار</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4  col-12">
                                <div class="single-footer f-link">
                                    <h3>خدماتنا</h3>
                                    <ul>
                                        <li><a href="#">تسجيل الدخول</a></li>
                                        <li><a href="#">تسجيل</a></li>
                                        <li><a href="#">القطاعات الواعدة</a></li>
                                        <li><a href="#">الدراسات الإقتصادية</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12">
                                <div class="single-footer f-link">
                                    <h3>تواصل معنا</h3>
                                    <ul class="contactul">
                                        <li>
                                            <p>
                                                المملكة العربية السعودية
                                                <br/>
                                                المدينة المنورة
                                                <br/>
                                                طريق الملك عبدالعزيز
                                            </p>
                                        </li>
                                        <li><FontAwesomeIcon icon={faPhone} /><span class="tel">920028910</span></li>
                                        <li><FontAwesomeIcon icon={faEnvelope} />info@mcci.org.sa</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p class="copyright-text">
                            جميع الحقوق محفوظة لغرفة <a href="https://www.mcci.org.sa/" rel="nofollow" target="_blank">المدينة المنورة</a> © 2023
                        </p>
                    </div>
                    <div class="col-md-6">
                        <ul class="social">
                            <li><a target="_blank" href="https://twitter.com/madinahchamber" class="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/MadinahChamber/" class="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/madinahchamber/" class="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/company/madinahchamber/" class="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a target="_blank" href="#"><i class="lni lni-envelope"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
    );
}


// export default function Footer() {
//     return (
//         <>
    
//       <div>
//         <h1>test footer </h1>
//       </div>
//       </>
//     );
// }