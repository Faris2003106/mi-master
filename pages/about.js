import Header from "@/components/header";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import {faDollarSign} from '@fortawesome/free-solid-svg-icons/faDollarSign'
import {faDisplay} from '@fortawesome/free-solid-svg-icons/faDisplay'
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser'
import {faFile} from '@fortawesome/free-solid-svg-icons/faFile'
export default function About(){
    return(
        <>
        <section className="section_about_us">
        <div className="Single_img">
            <img src="/images/About Us/about_img.png"/>
            <div className="single-inner">
                <h1>
                    بوابة استثمارات المدينة المنورة
                    <hr/>
                </h1>
                
                <p>
                إحدى مبادرات غرفة المدينة المنورة بالشراكة مع المرصد الحضري بهيئة تطوير المدينة المنورة ومركز التنمية الاقتصادية بالإمارة ، والتي تهدف لتنشيط الاستثمار بمنطقة المدينة المنورة من خلال تسويق الفرص الاستثمارية في مختلف القطاعات الاقتصادية وتعزيز الشراكة بين عارضي الفرص والمستثمرين وتقديم كافة التسهيلات الممكنة للاستثمار بالمنطقة.
                </p>
            </div>
        </div>
            <div className="targets">
                <h2>الأهداف</h2>
                <ul className="ul_targets">
                    <li>
                    <FontAwesomeIcon icon={faDollarSign} className="i" />
                        <span>دعم وتنشيط الحركة الاستثمارية بمنطقة المدينة المنورة</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faEye} className="i" />
                    <span>طرح المشروع كنموذج استثماري لمساعدة المستثمرين في تعزيز الرؤية الاقتصادية والاستثمارية الشاملة للمنطقة</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faDisplay} className="i" />
                    <span>توسيع قاعدة المتنافسين على الفرص ورفع مستوى الشفافية</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faUser} className="i" />
                    <span>تقديم الدعم لرواد ورائدات الأعمال في إيجاد الفرص الاستثمارية والحلول التمويلية المناسبة</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faFile} className="i"/>
                    <span>تقديم تقارير اقتصادية دورية و توفير معلومات متنوعة ومعيارية عن السوق</span>
                    </li>
                </ul>
            </div>
        </section>
        </>
    );
}