import yanbuPage from '@/styles/yanbu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartColumn} from "@fortawesome/free-solid-svg-icons";
import PromisingSectors from './Promising _sectors';

export default function Yanbu(){
    return(
        <>
        <div className={yanbuPage.about_City}>
            <div className={yanbuPage.section_Title}>
                <h2>محافظة ينبع</h2>
            </div>
            <div className={yanbuPage.city_info}>
                <img className={yanbuPage.city_image} src='/images/cities/yanbu5.png'/>
                <div className={yanbuPage.city_paragraph}>
                    <h2>نبذة تعريفية عن المنطقة</h2>
                    <p>
                    تعد ينبع حجر الزاوية في اقتصاد المملكة الصناعي لاحتضانها مشروع الهيئة الملكية بينبع والذي يعد أحد أهم التجمعات الصناعية بالمملكة، كما تعتبر أكبر مركز لتكرير النفط في العالم حيث يبلغ عدد مجمعات الصناعات الأساسية الضخمة بمدينة ينبع الصناعية (58) مجمعاً صناعياً، في حين يبلغ عدد الصناعات الخفيفة والمساندة (148) صناعة، مما جعل من مدينة ينبع الصناعية الخيار الأفضل للمستثمرين في مجال صناعة البتروكيماويات والصناعات كثيفة الاستخدام للطاقة فقد بلغ حجم الاستثمار الصناعي فيها (329) مليار ريال "
                    وتعتبر محافظة ينبع الوجهة السياحية الخامسة على مستوى المملكة بما تتميز به من موقع استراتيجي على ساحل البحر الأحمر وبما تمتلكه من الموارد والإمكانات السياحية التي تدعم فرص نجاح الاستثمار السياحي في ظل تطور سياحة الشواطئ وزيادة إقبال السائحين على شواطئ البحر الأحمر، وهذه الموارد والإمكانات السياحية المتميزة تشكل أسس وأنماط تنمية سياحية متعددة ومستدامة.                    
                    </p>
                </div>
            </div>
        <div className={yanbuPage.section_Title2}>
            <h2>مؤشرات عن المنطقة</h2>
            <hr/>
            {/* <FontAwesomeIcon icon={faChartColumn} className={yanbuPage.icon} /> */}
        </div>
        <div className={yanbuPage.city_indicators}>
            <div className={yanbuPage.single_list}>
                <div className={yanbuPage.single_img}>
                    <img src='/images/Indicators/indication-1.png'/>
                </div>
                <h4>مساحة المنطقة</h4>
                <h6 className={yanbuPage.text_primary}>مساحتها الكلية 10.680 كم2 .</h6>
            </div>
            <div className={yanbuPage.single_list}>
                <div className={yanbuPage.single_img}>
                    <img src='/images/Indicators/indication-2.png'/>
                </div>
                <h4>عدد المراكز</h4>
                <h6 className={yanbuPage.text_primary}>11 مركز</h6>
            </div>
            <div className={yanbuPage.single_list}>
                <div className={yanbuPage.single_img}>
                    <img src='/images/Indicators/indication-3.png'/>
                </div>
                <h4>عدد السكان</h4>
                <h6 className={yanbuPage.text_primary}>المجموع |  357671 سعودي ومقيم  </h6>
                <p>سعودي | <strong>0</strong>   غير سعودي | <strong>0</strong></p>
            </div>
            <div className={yanbuPage.single_list}>
                <div className={yanbuPage.single_img}>
                    <img src='/images/Indicators/indication-4.png'/>
                </div>
                <h4>عدد الأنشطة</h4>
                <h6 className={yanbuPage.text_primary}>288888 مؤسسة تجاية</h6>
            </div>
            <div className={yanbuPage.single_list}>
                <div className={yanbuPage.single_img}>
                    <img src='/images/Indicators/indication-5.png'/>
                </div>
                <h4>الخدمات الصحية</h4>
                <h6 className={yanbuPage.text_primary}>64 منشأة حكومية وخاصة</h6>
                <ul>
                    <li>الكادر الطبي | <strong>690</strong></li>
                    <li>الكادر الفني | <strong>1362</strong></li>
                    <li>عدد الأسرة | <strong>882</strong></li>
                </ul>
            </div>
            <div className={yanbuPage.single_list}>
                <div className={yanbuPage.single_img}>
                    <img src='/images/Indicators/indication-6.png'/>
                </div>
                <h4>جمعيات الخيرية</h4>
                <h6 className={yanbuPage.text_primary}>13 جمعية خيرية</h6>
            </div>
            <div className={yanbuPage.single_list}>
                <div className={yanbuPage.single_img}>
                    <img src='/images/Indicators/indication-7.png'/>
                </div>
                <h4>الدوائر الحكومية</h4>
                <h6 className={yanbuPage.text_primary}>30 دائرة حكومية</h6>
            </div>
            <div className={yanbuPage.single_list}>
                <div className={yanbuPage.single_img}>
                    <img src='/images/Indicators/indication-8.png'/>
                </div>
                <h4>مجموع الشركات</h4>
                <h6 className={yanbuPage.text_primary}>2020 شركة</h6>
            </div>
        </div>
        </div>
        <div className={yanbuPage.promising_section}>
            <PromisingSectors/>
        </div>
        <div className={yanbuPage.edu_section}>
            <div className={yanbuPage.section_Title3}>
                <h2>القطاع التعليمي</h2>
                <hr/>
                {/* <FontAwesomeIcon icon={faChartColumn} className={yanbuPage.icon} /> */}
            </div>
            <div className={yanbuPage.edu_table_section}>
                <table style={{textAlign: "center"}} className={yanbuPage.edu_table}>
                    <thead>
                        <tr>
                            <th colSpan={"5"}>
                            قطاع التعليم
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={yanbuPage.tr_head}>
                            <td>الطلاب</td>
                            <td>الطالبات</td>
                            <td>المعلمين والمعلمات</td>
                            <td>الموظفين والموظفات</td>
                            <td>المجموع</td>
                        </tr>
                        <tr className={yanbuPage.tr_numbers}>
                            <td>32022</td>
                            <td>37715</td>
                            <td>6270</td>
                            <td>1702</td>
                            <td>77709</td>
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
                        <tr className={yanbuPage.tr_head}>
                            <td>أعضاء هيئة التدريس</td>
                            <td>الطلاب</td>
                            <td>الطالبات</td>
                            <td>الموظفين والموظفات</td>
                            <td>المجموع</td>
                        </tr>
                        <tr className={yanbuPage.tr_numbers}>
                            <td>279</td>
                            <td>3958</td>
                            <td>6278</td>
                            <td>غ.م</td>
                            <td>10515</td>
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
                        <tr className={yanbuPage.tr_head}>
                            <td>أعضاء هيئة التدريس</td>
                            <td>المتدربين</td>
                            <td colspan="2">الموظفين والموظفات</td>
                            <td>المجموع</td>
                        </tr>
                        <tr className={yanbuPage.tr_numbers}>
                            <td>غ.م</td>
                            <td>1417</td>
                            <td colspan="2">غ.م</td>
                            <td>1417</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}