import governoratesStyle from '@/styles/governorates.module.css'
import Link from 'next/link'
export default function GovernoratesPage() {
    return(
        <>
        <div className={governoratesStyle.governorates_section}>
        <div className={governoratesStyle.city_card}>
            <div className={governoratesStyle.card_container}>
            <img src='/images/cities/yanbu.png' className={governoratesStyle.card_image}/>
            <div className={governoratesStyle.card_img_overlay}>
            <h5 className={governoratesStyle.card_title}>محافظة ينبع</h5>
            <p className={governoratesStyle.card_text}>
                تقع على ساحل البحر الأحمر في إقليم تهامة تبعد حوالي 200 كم غرب المدينة المنورة.
            </p>
            <div style={{marginTop: "48px"}}>
                <Link href="yanbu" className={governoratesStyle.governorates_btn}>شاهد المزيد</Link>
            </div>
            </div>
        </div>
        </div>
        <div className={governoratesStyle.city_card}>
            <div className={governoratesStyle.card_container}>
            <img src='/images/cities/ola.png' className={governoratesStyle.card_image}/>
            <div className={governoratesStyle.card_img_overlay}>
            <h5 className={governoratesStyle.card_title}>محافظة العلا</h5>
            <p className={governoratesStyle.card_text}>                
            سميت العلا بعدة أسماء قبل الاستقرار على اسمها الحالي، ففي القرن السادس قبل الميلاد سُميت بـ ديدان.
            </p>
            <div style={{marginTop: "48px"}}>
            <Link href="alola" className={governoratesStyle.governorates_btn}>شاهد المزيد</Link>
            </div>
            </div>
        </div>
        </div>
        <div className={governoratesStyle.city_card}>
            <div className={governoratesStyle.card_container}>
            <img src='/images/cities/alhanikea.png' className={governoratesStyle.card_image}/>
            <div className={governoratesStyle.card_img_overlay}>
            <h5 className={governoratesStyle.card_title}>محافظة الحناكية</h5>
            <p className={governoratesStyle.card_text}>                
            تقع على ساحل البحر الأحمر في إقليم تهامة تبعد حوالي 200 كم غرب المدينة المنورة.
            </p>
            <div style={{marginTop: "48px"}}>
            <Link href="alhanikea" className={governoratesStyle.governorates_btn}>شاهد المزيد</Link>
            </div>
            </div>
        </div>
        </div>
        <div className={governoratesStyle.city_card}>
            <div className={governoratesStyle.card_container}>
            <img src='/images/cities/mahd.png' className={governoratesStyle.card_image}/>
            <div className={governoratesStyle.card_img_overlay}>
            <h5 className={governoratesStyle.card_title}>محافظة مهد الذهب</h5>
            <p className={governoratesStyle.card_text}>                            
            تعرف أيضا (بالمهد)، وقديما كانت تعرف باسم (معدن بني سليم)، هي إحدى محافظات منطقة المدينة المنورة.                           
            </p>
            <div style={{marginTop: "48px"}}>
            <Link href="almahd" className={governoratesStyle.governorates_btn}>شاهد المزيد</Link>
            </div>
            </div>
        </div>
        </div>
        <div className={governoratesStyle.city_card}>
            <div className={governoratesStyle.card_container}>
            <img src='/images/cities/khbar.png' className={governoratesStyle.card_image}/>
            <div className={governoratesStyle.card_img_overlay}>
            <h5 className={governoratesStyle.card_title}>محافظة خيبر</h5>
            <p className={governoratesStyle.card_text}>                
            بوابة نجد الشرقية هي محافظة سعودية في منطقة المدينة المنورة وهي ثالث أكبر محافظة في منطقة المدينة المنورة بعد العاصمة الإدارية المدينة المنورة                                      </p>
            <div style={{marginTop: "48px"}}>
            <Link href="khibar" className={governoratesStyle.governorates_btn}>شاهد المزيد</Link>
            </div>
            </div>
        </div>
        </div>
        <div className={governoratesStyle.city_card}>
            <div className={governoratesStyle.card_container}>
            <img src='/images/cities/badr.png' className={governoratesStyle.card_image}/>
            <div className={governoratesStyle.card_img_overlay}>
            <h5 className={governoratesStyle.card_title}>محافظة بدر</h5>
            <p className={governoratesStyle.card_text}>                
            هي إحدى محافظات منطقة المدينة المنورة وهي غنية بالكثير من المعالم والشواهد والقيم التاريخية ومن المناطق الزراعية والسياحية                                      </p>
            <div style={{marginTop: "48px"}}>
            <Link href="badr" className={governoratesStyle.governorates_btn}>شاهد المزيد</Link>
            </div>
            </div>
        </div>
        </div>
        <div className={governoratesStyle.city_card}>
            <div className={governoratesStyle.card_container}>
            <img src='/images/cities/alais.png' className={governoratesStyle.card_image}/>
            <div className={governoratesStyle.card_img_overlay}>
            <h5 className={governoratesStyle.card_title}>محافظة العيص</h5>
            <p className={governoratesStyle.card_text}>                
            مدينة تابعة للمدينة المنورة وتصنف كمحافظة من الفئة (ب). وتبلغ مساحتها التقريبية 28630 كيلومتراً معظمها مرتفعات جبلية وأودية ومجاري سيول تتميز بكثرة النخيل الذي ينتج من أجود التمور في المنطقة
            </p>
            <div style={{marginTop: "48px"}}>
            <Link href="alais" className={governoratesStyle.governorates_btn}>شاهد المزيد</Link>
            </div>
            </div>
        </div>
        </div>
        <div className={governoratesStyle.city_card}>
            <div className={governoratesStyle.card_container}>
            <img src='/images/cities/WF1.jpg' className={governoratesStyle.card_image}/>
            <div className={governoratesStyle.card_img_overlay}>
            <h5 className={governoratesStyle.card_title}>محافظة وادي الفرع</h5>
            <p className={governoratesStyle.card_text}>                
            تقع محافظة وادي الفرع جنوب المدينة المنورة، ومركزها الآن (الفقير) على بعد 140 كلم على الطريق السريع بين المدينة المنورة ومكة المكرمة
            </p>
            <div style={{marginTop: "48px"}}>
            <Link href="wadialfara" className={governoratesStyle.governorates_btn}>شاهد المزيد</Link>
            </div>
            </div>
        </div>
        </div>
        </div>
            
        </>
    )
}