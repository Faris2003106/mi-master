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
    {id: 1, image: '/images/cities/alhanikea.png'}
];

export default function Alhanikea(){

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
                <h2>محافظة الحناكية</h2>
            </div>
            <div className={governorate.city_info}>
                <img className={governorate.city_image} src='/images/cities/alhnakia.jpg'/>
                <div className={governorate.city_paragraph}>
                    <h2>نبذة تعريفية عن المنطقة</h2>                    
                    <p>
                    تقع محافظة الحناكية في الجزء الشمالي الشرقي من منطقة المدينة المنورة ويحدها من الشمال منطقة حائل ومن الشرق منطقة القصيم ومنطقة الرياض ومن الجنوب محافظة المهد ومن الغرب محافظة خيبر ومقر المنطقة، وتبعد حوالي 108 كم شمال شرق المدينة المنورة.                    
                    <br/>
                    وتأخذ المحافظة أهميتها لموقعها المتميز حيث تقع على طريق المدينة المنورة - القصيم- حائل كما انها ورد في بعض المصادر التاريخية شهدت غزوة ذات الرقاع والتي كان موقعها وادي نخل شرقي جبل القعساء كما تكتسب هذه المحافظة أهميتها من خلال انها نقطة عبور قوافل الحجاج القادمة من الخليج وهو ما جعل من هذه المحافظة مدينة متطورة وتشهد حركة نشطة في فترات طويلة من العام.
                    <br/>                                        
                    اشتهرت هذه المنطقة في التاريخ الإسلامي بأنها مدينة إسلامية هامة حيث ارتبط اسمها باسم الصحابي الجليل أبي ذر الغفاري رضي الله عنه والتي سكنها عام 30هـ وتوفي بها عام 32هـ وقد بنى بها مسجداً. ومن المعالم الهامة والقريبة منها جبل سنام وجبل الربذة.                    
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
                <h6 className={governorate.text_primary}>مساحتها الكلية (22,265) ألف كم2 .</h6>
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
                <h6 className={governorate.text_primary}>61.724 سعودي ومقيم</h6>
                {/* <p>سعودي | <strong>0</strong>   غير سعودي | <strong>0</strong></p> */}
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-4.png'/>
                </div>
                <h4>عدد الأنشطة</h4>
                <h6 className={governorate.text_primary}>3200 مؤسسة تجاية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-5.png'/>
                </div>
                <h4>الخدمات الصحية</h4>
                <h6 className={governorate.text_primary}>24 منشأة حكومية وخاصة</h6>
                <ul>
                    <li>الكادر الطبي | <strong>122</strong></li>
                    <li>الكادر الفني | <strong>232</strong></li>
                    <li>عدد الأسرة | <strong>غ.م</strong></li>
                </ul>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-6.png'/>
                </div>
                <h4>جمعيات الخيرية</h4>
                <h6 className={governorate.text_primary}>5 جمعية خيرية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-7.png'/>
                </div>
                <h4>الدوائر الحكومية</h4>
                <h6 className={governorate.text_primary}>23 دائرة حكومية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-8.png'/>
                </div>
                <h4>مجموع الشركات</h4>
                <h6 className={governorate.text_primary}>40 شركة</h6>
            </div>
        </div>
        </div>
        <div className={governorate.agriculture}>
            <img className={governorate.backgroundImg} src='/images/Indicators/economic-bg.jpg'/>
        <div className={governorate.agriculture_Title}>
            <h2>الزراعة بمحافظة الحناكية</h2>
            <hr/>
            {/* <FontAwesomeIcon icon={faChartColumn} className={governorate.icon} /> */}
        </div>
        <div className={governorate.alhanikea_agriculture_content}>            
            <p>                
                
            مركز النخيل اشتهر منذ القدم بالزراعة وخصوصاً زراعة العنب والفواكه الموسمية. ويكثر به شجر الدوم
                    
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
                            <td>7161</td>
                            <td>8310</td>
                            <td>1627</td>
                            <td>153</td>
                            <td>17251</td>
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
                            <td>43</td>
                            <td>غ.م</td>
                            <td>329</td>
                            <td>غ.م</td>
                            <td>372</td>
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
                            <td>458</td>
                            <td colspan="2">غ.م</td>
                            <td>458</td>
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
                            <td>122</td>
                            <td>232</td>
                            <td>غ.م</td>
                            <td>354</td>
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