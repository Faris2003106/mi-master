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
    {id: 1, image: '/images/cities/alula2.jpg'},
    {id: 2, image: '/images/cities/alula3.jpg'},
    {id: 3, image: '/images/cities/alula4.jpg'},
    {id: 4, image: '/images/cities/alula5.jpg'},
    {id: 5, image: '/images/cities/alula6.jpg'},
    {id: 6, image: '/images/cities/alula7.jpg'},
    {id: 7, image: '/images/cities/alula8.jpg'},
    {id: 8, image: '/images/cities/alula9.jpg'},
    {id: 9, image: '/images/cities/alula10.jpg'},
];

export default function Aloula(){
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
                <h2>محافظة العلا</h2>
            </div>
            <div className={governorate.city_info}>
                <img className={governorate.city_image} src='/images/cities/alula2.jpg'/>
                <div className={governorate.city_paragraph}>
                    <h2>نبذة تعريفية عن المنطقة</h2>
                    <h6 style={{fontSize: "16px", fontWeight: "500",margin: "1rem 0", color: "white"}}>
                            هنا العلا ... حاضنة الجمال الطبيعي والتراث الإنساني الفريد. .
                        </h6>
                    <p>
                    تعتبر العلا متحفا نابضاً بالحياة منذ آلاف السنين، يقوم على كوكبة من العجائب الطبيعية والبشرية التي تنتشر عبر أرجائه، يتمتع زائري هذا المتحف بالسفر في رحلة عبر الزمن للتعرف على المواقع التاريخية التي حُفظت على مرّ القرون، والاستمتاع بمشاهدة تشكيلات الصخور الرملية والمساكن القديمة والمعالم الأثرية التي نحتتها يد الطبيعة وصنعتها إرادة الإنسان. تلك المعالم التي تزخر بإرث بشري يعود إلى 200 ألف عام لم يستكشف معظمه بعد، فإذا كانت المملكة العربية السعودية تُشكل مٌلْتَقى للحضارات القديمة، فإن العلا هي نبع تلك الحضارات.
                    <br/>
                    
                    العلا...&nbsp;أعظم تُحفة عرفها الزمن&nbsp;وموطن&nbsp;الحِجر، أول مواقع التراث العالمي لليونسكو في المملكة العربية السعودية.
                    <br/>                    
                    تشتهر العلا بأهميتها التاريخية والجغرافية مع مواقعها الأثرية الاستثنائية ومعالمها الطبيعية الساحرة، كما استمدت مكانتها العريقة من موقعها الاستراتيجي على مفترق الطرق التجارية القديمة، بين طريق الحرير وطريق البخور.                        
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
                <h6 className={governorate.text_primary}>مساحتها الكلية (22,561) ألف كم2 .</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-2.png'/>
                </div>
                <h4>عدد المراكز</h4>
                <h6 className={governorate.text_primary}>12 مركز</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-3.png'/>
                </div>
                <h4>عدد السكان</h4>
                <h6 className={governorate.text_primary}>87264 سعودي ومقيم</h6>
                {/* <p>سعودي | <strong>0</strong>   غير سعودي | <strong>0</strong></p> */}
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-4.png'/>
                </div>
                <h4>عدد الأنشطة</h4>
                <h6 className={governorate.text_primary}>4768 مؤسسة تجاية</h6>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-5.png'/>
                </div>
                <h4>الخدمات الصحية</h4>
                <h6 className={governorate.text_primary}>14 منشأة حكومية وخاصة</h6>
                <ul>
                    <li>الكادر الطبي | <strong>144</strong></li>
                    <li>الكادر الفني | <strong>323</strong></li>
                    <li>عدد الأسرة | <strong>128</strong></li>
                </ul>
            </div>
            <div className={governorate.single_list}>
                <div className={governorate.single_img}>
                    <img src='/images/Indicators/indication-6.png'/>
                </div>
                <h4>جمعيات الخيرية</h4>
                <h6 className={governorate.text_primary}>11 جمعية خيرية</h6>
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
                <h6 className={governorate.text_primary}>196 شركة</h6>
            </div>
        </div>
        </div>
        <div className={governorate.agriculture}>
            <img className={governorate.backgroundImg} src='/images/Indicators/economic-bg.jpg'/>
        <div className={governorate.agriculture_Title}>
            <h2>الزراعة بمحافظة العلا</h2>
            <hr/>
            {/* <FontAwesomeIcon icon={faChartColumn} className={governorate.icon} /> */}
        </div>
        <div className={governorate.agriculture_content}>            
            <p>                
                اعتمد أهل العلا وبشكل كبير ورئيسي على الزراعة وذلك لعدة أسباب أهمها خصوبة أرضها ووفرة مياهها وقد كانت تجري في العلا عدة عيون بلغت أكثر من أربعين عيناً.                        
                <br/>
                وقد كانت توزع مياه العيون وفق نظام للري بحيث كانت توزع على الأهالي من قبل مجلس خصص لذلك، وتسمى كل حصة بالوجبة و24ساعة.
                و يستعينون بتوزيع الوجبة بالساعة الشمسية " الطنطورة"
                واشتهرت العلا بزراعة الخضروات والحبوب والفواكه والحمضيات والنخيل
                أهم أنواع التمور : الحلوة . البرنية -جسبة- المبرومة – و الصفاوي و العجوة... الخ و يزرع من الحمضيات و الفواكه البرتقال و الليمون بأنواعة اليوسفي و الرمان و العنب و المانجو.
                ويزرع من الحبوب القمح و الشعير و الذرة و الدخن.                                        
                <br/>
                يبلغ عدد النخيل أكثر من 2مليون نخلة.
                عدد المزارع أكثر من 4750 مزرعه
                عدد الحمضيات بالعلا اكثر من 750الف شجرة حمضيات
                ويقوم مكتب وزارة البيئة و المياه و الزراعة بتقديم الخدمة لأكثر من 37قرية و هجره و أيضا يقوم مربى الماشية حيث تمثل النسبة الكبيرة من المواطنين من مربي الماشية حيث يوجد اكثر من 1777 بطاقة صحية                    
                <br/>
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
                            <td>6906</td>
                            <td>7793</td>
                            <td>1446</td>
                            <td>361</td>
                            <td>16452</td>
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
                            <td>242</td>
                            <td>2085</td>
                            <td>2315</td>
                            <td>غ.م</td>
                            <td>4642</td>
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
                            <td>385</td>
                            <td colspan="2">غ.م</td>
                            <td>385</td>
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
                            <td>144</td>
                            <td>323</td>
                            <td>غ.م</td>
                            <td>467</td>
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
                
                {/* <SwiperSlide>
                <div onClick={handleImageClick} className="main_image_modal">
                        <img className={governorate.swiper_img} src='/images/cities/alula3.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div onClick={handleImageClick} className="main_image_modal">
                        <img className={governorate.swiper_img} src='/images/cities/alula4.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div onClick={handleImageClick} className="main_image_modal">
                        <img className={governorate.swiper_img} src='/images/cities/alula5.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div onClick={handleImageClick} className="main_image_modal">
                        <img className={governorate.swiper_img} src='/images/cities/alula6.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div onClick={handleImageClick} className="main_image_modal">
                        <img className={governorate.swiper_img} src='/images/cities/alula7.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div onClick={handleImageClick} className="main_image_modal">
                        <img className={governorate.swiper_img} src='/images/cities/alula8.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div onClick={handleImageClick} className="main_image_modal">
                        <img className={governorate.swiper_img} src='/images/cities/alula9.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div onClick={handleImageClick} className="main_image_modal">
                        <img className={governorate.swiper_img} src='/images/cities/alula10.jpg' />
                    </div>
                </SwiperSlide> */}
                
            </div>
            </Swiper>
        </div>
        
        </>
    );
}