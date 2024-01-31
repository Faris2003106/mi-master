import governorate from '@/styles/cities.module.css';
import PromisingSectors from './Promising _sectors';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faChartColumn} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { FreeMode, Navigation, Autoplay } from 'swiper/modules';

const images = [
    {image: '/images/cities/alais1.jpg'},
    {image: '/images/cities/alais2.jpg'},
    {image: '/images/cities/alais3.jpg'},
];

export default function Alais(){

    const [isImageClicked, setIsImageClicked] = useState(false);
    const [clickedImageIndex, setClickedImageIndex] = useState(null);

    const handleImageClick = (index) => {
        setClickedImageIndex(index);
        setIsImageClicked(true);
    };
    
    
      const closeImageModal = () => {
        setIsImageClicked(false);
      };
      
    return(
        <>
        <div className={governorate.about_City}>
            <div className={governorate.section_Title}>
                <h2>محافظة العيص</h2>
            </div>
            <div className={governorate.city_info}>
                <img className={governorate.city_image} src='/images/cities/alais.png'/>
                <div className={governorate.city_paragraph}>
                    <h2>نبذة تعريفية عن المنطقة</h2>                    
                    <p>                    
                    تعد العيص واحة غناء حيث تتشابك جبال العيص ذات السفوح المنحدرة مع عدد من الأودية التي تشكل روافد مهمة لوادي (العيص) وأهم جبالها أبوالكثة، وترعة، والأجرد، ورضوة، وهشام، والسلع، والمقنع، والراقب، وحبيشي.
                    <br/>                                                            
                    وتحتوي العيص على عدد من الآثار التي تجسد عراقة المكان كما ارتبطت المحافظة بالنخيل فمعنى العيص وفقا لكتابات المؤرخين هو منبت خيار الشجر مثل السدر والنخيل والعوسج إذا تدانى والتف.
                    <br/>                    
                    ويتخلل جبالها عدة أودية مهمة منها وادي ترعة، ووادي عرفة، ووادي أرن، ووادي اللحيان، ووادي حجج، ووادي الحفير، ووادي الصفيحة، ووادي سل، ووادي الرماس، وغيرها، كما توجد حرة العيص التي تعد الخزان المستديم للمياه للمنطقة، ويبلغ طولها من الشرق إلى الغرب حوالي 60 كيلومتراً ومن الشمال إلى الجنوب حوالى 25 كيلومتراً.
                    <br/>                    
                    وتلتف السهول والرياض عند التقاء الأودية بالحرة، وبعضها تكون بالحرة نفسها، وهذه السهول والرياض تزرع بعد هطول الأمطار الشتوية، ومنها سهول الشيحة، والحبانية، وسمر، والديسة، والقاع، والبرشمية، ورياض قعود، ورياض براد.                    
                    </p>
                </div>
            </div>
        <div className={governorate.section_Title2}>
            <h2>مؤشرات عن المنطقة</h2>
            <hr/>
            {/* <FontAwesomeIcon icon={faChartColumn} className={governorate.icon} /> */}
        </div>
        <div className={governorate.city_indicators}>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-1.png'/>
                </div>
                <h4>مساحة المنطقة</h4>
                <h6 className={governorate.text_primary}>مساحتها الكلية (11.256) ألف كم2 .</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-2.png'/>
                </div>
                <h4>عدد المراكز</h4>
                <h6 className={governorate.text_primary}>10 مركز</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-3.png'/>
                </div>
                <h4>عدد السكان</h4>
                <h6 className={governorate.text_primary}>33.185 سعودي ومقيم</h6>
                {/* <p>سعودي | <strong>0</strong>   غير سعودي | <strong>0</strong></p> */}
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-4.png'/>
                </div>
                <h4>عدد الأنشطة</h4>
                <h6 className={governorate.text_primary}>0 أنشطة</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-5.png'/>
                </div>
                <h4>الخدمات الصحية</h4>
                <h6 className={governorate.text_primary}>11 منشأة حكومية وخاصة</h6>
                <ul>
                    <li>الكادر الطبي | <strong>59</strong></li>
                    <li>الكادر الفني | <strong>113</strong></li>
                    <li>عدد الأسرة | <strong>غ.م</strong></li>
                </ul>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-6.png'/>
                </div>
                <h4>جمعيات الخيرية</h4>
                <h6 className={governorate.text_primary}>6 جمعية خيرية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-7.png'/>
                </div>
                <h4>الدوائر الحكومية</h4>
                <h6 className={governorate.text_primary}>14 دائرة حكومية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-8.png'/>
                </div>
                <h4>مجموع الشركات</h4>
                <h6 className={governorate.text_primary}>0 شركة</h6>
            </div>
        </div>
        </div>
        <div className={governorate.promising_section}>
            <PromisingSectors/>
        </div>
        <div className={governorate.edu_section}>
            <div className={governorate.section_Title3}>
                <h2>القطاع التعليمي</h2>
                <hr/>
                {/* <FontAwesomeIcon icon={faChartColumn} className={governorate.icon} /> */}
            </div>
            <div className={governorate.edu_table_section}>
                <table style={{textAlign: "center"}} className={governorate.edu_table}>
                    <thead>
                        <tr>
                            <th colSpan={"5"}>
                            قطاع التعليم
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={governorate.tr_head}>
                            <td>الطلاب</td>
                            <td>الطالبات</td>
                            <td>المعلمين والمعلمات</td>
                            <td>الموظفين والموظفات</td>
                            <td>المجموع</td>
                        </tr>
                        <tr className={governorate.tr_numbers}>
                            <td>6579</td>
                            <td>7641</td>
                            <td>1522</td>
                            <td>396</td>
                            <td>16138</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={5}>
                                فرع جامعة
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={governorate.tr_head}>
                            <td>أعضاء هيئة التدريس</td>
                            <td>الطلاب</td>
                            <td>الطالبات</td>
                            <td>الموظفين والموظفات</td>
                            <td>المجموع</td>
                        </tr>
                        <tr className={governorate.tr_numbers}>
                            <td>39</td>
                            <td>206</td>
                            <td>346</td>
                            <td>غ.م</td>
                            <td>591</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={5}>
                                المشروع الصناعي الثانوي وفرع الكلية القنية
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={governorate.tr_head}>
                            <td>أعضاء هيئة التدريس</td>
                            <td>المتدربين</td>
                            <td colspan="2">الموظفين والموظفات</td>
                            <td>المجموع</td>
                        </tr>
                        <tr className={governorate.tr_numbers}>
                            <td>غ.م</td>
                            <td>587</td>
                            <td colspan="2">غ.م</td>
                            <td>587</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className={governorate.health_section}>
            <div className={governorate.section_Title3}>
                <h2>القطاع الصحي</h2>
                <hr/>
                {/* <FontAwesomeIcon icon={faChartColumn} className={governorate.icon} /> */}
            </div>
            <div className={governorate.edu_table_section}>
                <table style={{textAlign: "center"}} className={governorate.edu_table}>
                    <thead>
                        <tr>
                            <th colSpan={"5"}>
                            24 قطاع صحي حكومي وخاص
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={governorate.tr_head}>
                            <td>الكادر الطبي</td>
                            <td>الكادر الفني</td>
                            <td>الكادر الإداري والمعلمين</td>
                            <td>المجموع</td>
                        </tr>
                        <tr className={governorate.tr_numbers}>
                            <td>100</td>
                            <td>135</td>
                            <td>غ.م</td>
                            <td>235</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className={governorate.album_section}>
            <div className={governorate.section_Title3}>
                <h2>ألبوم الصور</h2>
                <hr/>
                {/* <FontAwesomeIcon icon={faChartColumn} className={governorate.icon} /> */}
            </div>
        
            <Swiper
            slidesPerView={2}
            navigation={true}
            freeMode={true}
            loop={true}
            modules={[FreeMode, Navigation,Autoplay]}
            className="mySwiper"
            autoplay={{
                delay:1000,
                disableOnInteraction: false,
            }}
            speed={1200}
            >
                {
                    isImageClicked && clickedImageIndex !== null && (
                        <div className={governorate.image_modal}>
                            <div className={governorate.image_modal_content}>
                                <span className={governorate.close} onClick={closeImageModal}>&times;</span>
                                
                                    <img className={governorate.image_modal_content_In_model} src={images[clickedImageIndex].image} style={{width: "700px"}}/>
                                
                            </div>
                        </div>
                    )}
                    
            <div className={governorate.images_list}>
                {images.map((slide, index) => (
                        
                <SwiperSlide key={slide.id}>
                    <div onClick={() => handleImageClick(index)} className="main_image_modal">
                        <img className={governorate.swiper_img} src={slide.image} />
                    </div>
                </SwiperSlide>
                    ))}
            </div>
            </Swiper>
        </div>
        </>
    )
}