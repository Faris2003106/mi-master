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
    
];

export default function Almahd(){

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
                <h2>محافظة المهد</h2>
            </div>
            <div className={governorate.city_info}>
                <img className={governorate.city_image} src='/images/cities/almahd.jpg'/>
                <div className={governorate.city_paragraph}>
                    <h2>نبذة تعريفية عن المنطقة</h2>                    
                    <p>                    
                    مهد الذهب (وتعرف أيضاً بالمهد) هي إحدى محافظات منطقة المدينة المنورة حيث تقع محافظة مهد الذهب في الجزء الجنوبي الشرقي من منطقة المدينة المنورة، وتعتبر المهد من أكبر محافظات المدينة المنورة مساحة.
                    <br/>                    
                    تحتضن محافظة مهد الذهب في المدينة المنورة المعادن النفيسة، وخاصة الذهب الذي تستمد المحافظة اسمها منه.
                    <br/>                                                            
                    ويعتبر منجم مهد الذهب أكبر منجم في الشرق الأوسط، ويختزن الكثير من المعادن النفيسة، ويتميز بتاريخ حافل، حيث دلت المصادر والآثار على قدم استخراج الذهب منه، فقد استخرجت كميات كبيرة منه في الألف الأولى قبل الميلاد.                        
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
                <h6 className={governorate.text_primary}>مساحتها الكلية (22,685) ألف كم2 .</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-2.png'/>
                </div>
                <h4>عدد المراكز</h4>
                <h6 className={governorate.text_primary}>18 مركز</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-3.png'/>
                </div>
                <h4>عدد السكان</h4>
                <h6 className={governorate.text_primary}>87.264 سعودي ومقيم</h6>
                {/* <p>سعودي | <strong>0</strong>   غير سعودي | <strong>0</strong></p> */}
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-4.png'/>
                </div>
                <h4>عدد الأنشطة</h4>
                <h6 className={governorate.text_primary}>2239 مؤسسة تجاية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-5.png'/>
                </div>
                <h4>الخدمات الصحية</h4>
                <h6 className={governorate.text_primary}>25 منشأة حكومية وخاصة</h6>
                <ul>
                    <li>الكادر الطبي | <strong>163</strong></li>
                    <li>الكادر الفني | <strong>179</strong></li>
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
                <h6 className={governorate.text_primary}>24 دائرة حكومية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-8.png'/>
                </div>
                <h4>مجموع الشركات</h4>
                <h6 className={governorate.text_primary}>771 شركة</h6>
            </div>
        </div>
        </div>
        <div className={governorate.agriculture}>
            <img className={governorate.backgroundImg} src='/images/Indicators/economic-bg.jpg'/>
        <div className={governorate.agriculture_Title}>
            <h2>الزراعة بمحافظة المهد</h2>
            <hr/>
            {/* <FontAwesomeIcon icon={faChartColumn} className={governorate.icon} /> */}
        </div>
        <div className={governorate.agriculture_content}>            
            <p>                
            تشتهر محافظة المهد -تحديداً في القرى الواقعة في الجزء الغربي منها وهي الرويضة وما حولها- بزراعة النخيل والمحاصيل الزراعية الأخرى كالخضار والفواكه والحبوب.
            </p>
            <img src='/images/Indicators/economic-img.png'/>
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
                            <td>6210</td>
                            <td>7339</td>
                            <td>1876</td>
                            <td>196</td>
                            <td>15621</td>
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
                            <td>50</td>
                            <td>121</td>
                            <td>145</td>
                            <td>غ.م</td>
                            <td>316</td>
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
                            <td>421</td>
                            <td colspan="2">غ.م</td>
                            <td>421</td>
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
                            <td>163</td>
                            <td>179</td>
                            <td>غ.م</td>
                            <td>342</td>
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
            slidesPerView={5}
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