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
    {image: '/images/cities/khbar1.jpg'},
    {image: '/images/cities/khbar2.jpg'},
    {image: '/images/cities/khbar3.jpg'},
    {image: '/images/cities/khbar4.jpg'},
    {image: '/images/cities/khbar5.jpg'}
];

export default function Khibar(){
    
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
                <h2>محافظة خيبر</h2>
            </div>
            <div className={governorate.city_info}>
                <img className={governorate.city_image} src='/images/cities/khiber.jpg'/>
                <div className={governorate.city_paragraph}>
                    <h2>نبذة تعريفية عن المنطقة</h2>                    
                    <p>                    
                    تقع خيبر في شمال غرب المملكة العربية السعودية وعلى بعد حوالي 168 كيلو متر من المدينة المنورة، وتتكون من حرة تكسوها الحجارة السوداء وتغطي أكثر مواضعها بحيث يصعب السير فيها إلا من طرق مخصصة .
                    <br/>                    
                    تعتبر خيبر ولا تزال منذ أقدم العصور واحة واسعة ذات تربة خصبة معطاءة وذات عيون ومياه غزيرة وتربتها تربة جيدة للغاية تصلح لزراعة الحبوب والفواكه على اختلاف أنواعها، كما أنها تعتبر من أكبر واحات النخيل في جزيرة العرب ويكفي لصحة هذا القول أن المسلمين احصوا من النخيل الموجود بالنطاه فقط (وهو أحد أودية خيبر الكبيرة) فوجدوا بها أربعين ألف نخلة.
                    <br/>                                                            
                    وهذه الحرار تكونت من جراء ثورات بركانية تقذف حممها فتسيل على سطح الأرض مكونة الصخور السوداء. وخيبر هي أعظم حرار بلاد العرب وهذه الحرة واقعة بين السهول الممتدة في الجنوب الشرقي من المدينة المنورة
                    <br/>                    
                    وهذه الحرة يطلق عليها قديما أسماء كثيرة فجنوبها الشرقي يعرف بحرة فدك، الحائط حالياً وشمالها الشرقي يعرف بحرة (ضرغد) أو لابة ضرغد ووسطها الذي فيه خيبر يعرف باسم (حرة النار) وقسمها الغربي يقع غرب خيبر ممتدًا من شمال المدينة حتى قرب وادي القرى يعرف قديمًا باسم (حرة ليلى).                        
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
                <h6 className={governorate.text_primary}>مساحتها الكلية (19.977) ألف كم2 .</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-2.png'/>
                </div>
                <h4>عدد المراكز</h4>
                <h6 className={governorate.text_primary}>8 مركز</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-3.png'/>
                </div>
                <h4>عدد السكان</h4>
                <h6 className={governorate.text_primary}>58.910 سعودي ومقيم</h6>
                {/* <p>سعودي | <strong>0</strong>   غير سعودي | <strong>0</strong></p> */}
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-4.png'/>
                </div>
                <h4>عدد الأنشطة</h4>
                <h6 className={governorate.text_primary}>2337 مؤسسة تجاية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-5.png'/>
                </div>
                <h4>الخدمات الصحية</h4>
                <h6 className={governorate.text_primary}>11 منشأة حكومية وخاصة</h6>
                <ul>
                    <li>الكادر الطبي | <strong>99</strong></li>
                    <li>الكادر الفني | <strong>216</strong></li>
                    <li>عدد الأسرة | <strong>غ.م</strong></li>
                </ul>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-6.png'/>
                </div>
                <h4>جمعيات الخيرية</h4>
                <h6 className={governorate.text_primary}>4 جمعية خيرية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-7.png'/>
                </div>
                <h4>الدوائر الحكومية</h4>
                <h6 className={governorate.text_primary}>18 دائرة حكومية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-8.png'/>
                </div>
                <h4>مجموع الشركات</h4>
                <h6 className={governorate.text_primary}>716 شركة</h6>
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
                            <td>5780</td>
                            <td>6759</td>
                            <td>1157</td>
                            <td>186</td>
                            <td>13882</td>
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
                            <td>61</td>
                            <td>183</td>
                            <td>451</td>
                            <td>غ.م</td>
                            <td>695</td>
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
                            <td>303</td>
                            <td colspan="2">غ.م</td>
                            <td>303</td>
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
                            <td>99</td>
                            <td>216</td>
                            <td>غ.م</td>
                            <td>315</td>
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
            slidesPerView={4}
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
