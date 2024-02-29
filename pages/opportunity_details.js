import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCircleQuestion, faClipboard, faFile, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faLayerGroup, faPaperclip, faBars, faHandHoldingDollar, faVectorSquare, faArrowUp19, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import Link from "next/link";


export default function opportunityDetails() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="pt-44 mb-24 px-20 414:px-4 414:pt-28">
                <div className="shadow-[0_0_30px_4px_rgba(0,0,0,0.1)] w-full p-7 mb-20 rounded-[15px] flex 414:block ">
                    <div className="w-1/2 414:w-full">
                        <h1 className="text-2xl font-bold mb-10 414:text-medium">انشاء و ترميم و تشغيل و صيانة مصنع خزانات وصهاريج، تقاطع طريق سلمى بنت جابر مع طريق محمد بن الأمير</h1>
                        <div className="flex mt-5">
                            <FontAwesomeIcon icon={faLayerGroup} className="ml-3 text-2xl text-[#007d56] 414:text-medium" />
                            <p className="text-[18px] mb-2 font-[600] text-[#002a56] 414:text-medium">النشاط
                                <br />
                                <span className="text-[#002a56] text-[15px] leading-10 font-thin 414:text-medium">زراعي</span>
                            </p>
                        </div>
                        <div className="flex mt-5">
                            <FontAwesomeIcon icon={faCalendarDays} className="ml-3 text-2xl text-[#007d56] 414:text-medium" />
                            <p className="text-[18px] mb-2 font-[600] text-[#002a56] 414:text-medium">تاريخ انتهاء القرصة
                                <br />
                                <span className="text-[#002a56] text-[15px] leading-10 font-thin 414:text-medium">2024-04-19</span>
                            </p>
                        </div>
                        <div className="flex mt-5">
                            <FontAwesomeIcon icon={faBars} className="ml-3 text-2xl text-[#007d56] 414:text-medium" />
                            <p className="text-[18px] mb-2 font-bold text-[#002a56] 414:text-medium">الوصف
                                <br />
                                <span className="text-[#002a56] text-[15px] leading-6 font-[200] 414:text-medium">انشاء و ترميم و تشغيل و صيانة مصنع خزانات وصهاريج، تقاطع طريق سلمى بنت جابر مع طريق محمد بن الأمير - الأنشطة الصناعية - أنشطة وخدمات المعادن ومواد البناء - مصنع</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src="images/madina_chember.png" className="m-auto block h-380 w-400 414:mr-20" />
                    </div>
                </div>
                <div className="flex items-start 414:flex-wrap">
                    <div className="min-w-[300px] flex-col ml-4 flex flex-wrap 414:min-w-full">
                        <button className={toggleState === 1 ? "nav-link py-5 px-[18px] mb-4 relative border-1 border-white shadow-[0_2px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_35px_rgba(0,0,0,0.2)] text-white bg-gradient-to-r from-[#007D56] to-[#002a56] transition-all duration-300 ease-out] text-right"
                            : "py-5 px-[18px] mb-4 relative border-1 border-white shadow-[0_2px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_35px_rgba(0,0,0,0.2)] text-white bg-white text-right"}
                            onClick={() => toggleTab(1)}
                        >
                            <span className={toggleState === 1 ? "text-white text-[18px] p-[15px_0_5px] font-[500] 414:text-[14px]"
                                : "text-[#002a56] text-[18px] p-[15px_0_5px] font-[500] 414:text-[14px]"}>
                                <FontAwesomeIcon icon={faCircleQuestion} className="mx-2" />
                                <span>التفاصيل </span>
                            </span>
                        </button>
                        <button className={toggleState === 2 ? "nav-link py-5 px-[18px] mb-4 relative border-1 border-white shadow-[0_2px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_35px_rgba(0,0,0,0.2)] bg-gradient-to-r from-[#007D56] to-[#002a56] transition-all duration-300 ease-out] text-right  text-blue-200"
                            : "py-5 px-[18px] mb-4 relative border-1 border-white shadow-[0_2px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_35px_rgba(0,0,0,0.2)] bg-[#fff]  text-right  text-blue-200 "}
                            onClick={() => toggleTab(2)}
                        >
                            <span className={toggleState === 2 ? "text-white text-[18px] p-[15px_0_5px] font-[500] 414:text-[14px]"
                                : "text-[#002a56] text-[18px] p-[15px_0_5px] font-[500] 414:text-[14px]"}>
                                <FontAwesomeIcon icon={faThumbsUp} className="mx-2" />
                                <span>مبررات الاستثمار </span>
                            </span>
                        </button>
                        <button className={toggleState === 3 ? "nav-link py-5 px-[18px] mb-4 relative border-1 border-white shadow-[0_2px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_35px_rgba(0,0,0,0.2)] text-white bg-gradient-to-r from-[#007D56] to-[#002a56] transition-all duration-300 ease-out] text-right"
                            : "py-5 px-[18px] mb-4 relative border-1 border-white shadow-[0_2px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_35px_rgba(0,0,0,0.2)] text-white bg-white text-right"}
                            onClick={() => toggleTab(3)}
                        >
                            <span className={toggleState === 3 ? "text-white text-[18px] p-[15px_0_5px] font-[500] 414:text-[14px]"
                                : "text-[#002a56] text-[18px] p-[15px_0_5px] font-[500] 414:text-[14px]"}>
                                <FontAwesomeIcon icon={faPaperclip} className="mx-2" />
                                <span>المستندات المطلوبة </span>
                            </span>
                        </button>
                        <button className={toggleState === 4 ? "nav-link py-5 px-[18px] mb-4 relative border-1 border-white shadow-[0_2px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_35px_rgba(0,0,0,0.2)] text-white bg-gradient-to-r from-[#007D56] to-[#002a56] transition-all duration-300 ease-out] text-right"
                            : "py-5 px-[18px] mb-4 relative border-1 border-white shadow-[0_2px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_35px_rgba(0,0,0,0.2)] text-white bg-white text-right"}
                            onClick={() => toggleTab(4)}
                        >
                            <span className={toggleState === 4 ? "text-white text-[18px] p-[15px_0_5px] font-[500] 414:text-[14px]"
                                : "text-[#002a56] text-[18px] p-[15px_0_5px] font-[500] 414:text-[14px]"}>
                                <FontAwesomeIcon icon={faClipboard} className="mx-2" />
                                <span>قطاعات الحي </span>
                            </span>
                        </button>
                        <button
                            className="py-5 px-[18px] mb-4 relative border-1 border-white shadow-[0_2px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_35px_rgba(0,0,0,0.2)] text-white bg-white transition-all duration-300 ease-out text-right"
                            onClick={handleButtonClick}
                            type="button"
                        >
                            <span className="text-[#002a56] text-[18px] p-[15px_0_5px] font-[500] 414:text-[14px]">
                                <FontAwesomeIcon icon={faGlobe} className="mx-2" />
                                <span>الموقع الالكتروني للفرصة</span>
                            </span>
                        </button>

                    </div>
                    <div className="shadow-[0_0_30px_4px_rgba(0,0,0,0.1)] w-full h-full py-9 px-6 border-1 border-white rounded-[0.25rem]">
                        <div className={toggleState === 1 ? "block" : "hidden"}>
                            <div className="w-full text-[1rem] font-[700] leading-[30px] 414:text-[12px]">
                                <ul className="px-1">
                                    <li className="mb-3 text-black">
                                        <span>
                                            <FontAwesomeIcon icon={faFile} className="ml-2 text-[18px] text-[#007d56]" />
                                            <strong className="text-[#007d56]">فترة العقد:  </strong>
                                            25 سنة
                                        </span>
                                    </li>
                                    <li className="mb-3 text-black">
                                        <span>
                                            <FontAwesomeIcon icon={faHandHoldingDollar} className="ml-2 text-[18px] text-[#007d56]" />
                                            <strong className="text-[#007d56]">سعر الكراسة:  </strong>
                                            250
                                        </span>
                                    </li>
                                    <li className="mb-3 text-black">
                                        <span>
                                            <FontAwesomeIcon icon={faCalendarDays} className="ml-2 text-[18px] text-[#007d56]" />
                                            <strong className="text-[#007d56]">تاريخ فتح المضاريف:  </strong>
                                            19/05/2024
                                        </span>
                                    </li>
                                    <li className="mb-3 text-black">
                                        <span>
                                            <FontAwesomeIcon icon={faCalendarDays} className="ml-2 text-[18px] text-[#007d56]" />
                                            <strong className="text-[#007d56]">آخر موعد لشراء الكراسة:  </strong>
                                            19/05/2024
                                        </span>
                                    </li>
                                    <li className="mb-3 text-black">
                                        <span>
                                            <FontAwesomeIcon icon={faVectorSquare} className="ml-2 text-[18px] text-[#007d56]" />
                                            <strong className="text-[#007d56]">المساحة:  </strong>
                                            1,500 م2
                                        </span>
                                    </li>
                                    <li className="mb-3 text-black">
                                        <span>
                                            <FontAwesomeIcon icon={faArrowUp19} className="ml-2 text-[18px] text-[#007d56]" />
                                            <strong className="text-[#007d56]">الرقم المرجعي:  </strong>
                                            01-24-003706-4003
                                        </span>
                                    </li>
                                    <Link href="#">
                                        <li className="mb-3 text-black">
                                            <span>
                                                <FontAwesomeIcon icon={faMapLocationDot} className="ml-2 text-[18px] text-[#007d56]" />
                                                <strong className="text-[#007d56] hover:text-[#002a56]">الموقع الجغرافي</strong>
                                            </span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className={toggleState === 2 ? "block" : "hidden"}>
                            <div className="w-full text-[0.9rem] font-bold leading-[30px] 414:text-[12px]">
                                <ol className="px-1">
                                    <li className="mb-3 text-black">
                                        تلبية احتياجات السكان المحليين حيث يشمل النشاط مكونات عديدة والتي تشمل المحلات التجارية مختلفة الأنشطة وأماكن الترفيه ومطاعم الوجبات الخفيفة.
                                    </li>
                                    <li className="mb-3 text-black">
                                        تعزيز التجارة المحلية وجذب المزيد من الاستثمارات إلى المنطقة
                                    </li>
                                    <li className="mb-3 text-black">
                                        تعزيز النشاط الاقتصادي في المنطقة
                                    </li>
                                    <li className="mb-3 text-black">
                                        تعزيز التنمية العمرانية للمنطقة وتحسين التنوع التجاري للسكان المحليين والزوار
                                    </li>
                                    <li className="mb-3 text-black">
                                        خدمة للمنطقة وتنمية الاستثمار
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className={toggleState === 3 ? "block" : "hidden"}>
                            <div className="w-full text-[0.9rem] font-bold leading-[30px] 414:text-[12px]">
                                <ol className="px-1">
                                    <li className="mb-3 text-black">
                                        سجل تجاري ساري المفعول
                                    </li>
                                    <li className="mb-3 text-black">
                                        الرقم الضريبي
                                    </li>
                                    <li className="mb-3 text-black">
                                        نموذج العطاء الأصلي المرفق بالكراسة
                                    </li>
                                    <li className="mb-3 text-black">
                                        شهادة الزكاة والدخل سارية المفعول
                                    </li>
                                    <li className="mb-3 text-black">
                                        شهادة الاشتراك بالغرفة التجارية سارية المفعول
                                    </li>
                                    <li className="mb-3 text-black">
                                        شهادة الإلتزام بالسعوده
                                    </li>
                                    <li className="mb-3 text-black">
                                        نسخة من الإعلان
                                    </li>
                                    <li className="mb-3 text-black">
                                        الضمان البنكي
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className={toggleState === 4 ? "block" : "hidden"}>
                            <div className="w-full text-[0.9rem] font-bold leading-[30px] 414:text-[12px]">
                                <table className="w-full text-sm text-right text-black dark:text-gray-400">
                                    <thead className="text-xs text-white rtl:text-right bg-[#198754] dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 rounded-s-lg">
                                                م
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                القطاع
                                            </th>
                                            <th scope="col" className="px-6 py-3 rounded-e-lg">
                                                المجموع
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                1
                                            </th>
                                            <td className="px-6 py-4">
                                                الأنشطة التجارية
                                            </td>
                                            <td className="px-6 py-4">
                                                19
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                2
                                            </th>
                                            <td className="px-6 py-4">
                                                أنشطة صناعية
                                            </td>
                                            <td className="px-6 py-4">
                                                4
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                3
                                            </th>
                                            <td className="px-6 py-4">
                                                قطاع المطاعم والإعاشة
                                            </td>
                                            <td className="px-6 py-4">
                                                2
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="bg-[#198754]">
                                        <tr className="font-semibold text-white dark:text-white">
                                            <th scope="row" colSpan="2" className="px-6 py-3 text-base text-center rounded-s-lg">المجموع</th>
                                            <td className="px-6 py-3 rounded-e-lg">25</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-header border-b-2 pb-3">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">هل ترغب بوصول إشعارات عن الفرص الاستثمارية المشابهة ؟</h3>
                                <button
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={handleCloseModal}
                                    type="button"
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="flex flex-row-reverse 414:flex-wrap">
                                <div className="modal-body">
                                    <img src="/images/sign-up-investors.jpg" width={550} />
                                </div>
                                <form className="w-full max-w-sm m-auto">
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                                الاسم
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#002a56]" id="inline-full-name" type="text" placeholder="الاسم" required />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                                رقم الهاتف
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#002a56]"
                                                id="inline-password" type="text" pattern="05[0-9] {8}" required placeholder="05xxxxxxx" />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                                البريد الالكتروني
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="bg-gray-200 lowercase appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#002a56]" id="inline-password" type="email" placeholder="example@example.com" required />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center">
                                        <button
                                            className="text-white mt-5 bg-[#002a56] hover:bg-[#224164] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            // onClick={handleCloseModal}
                                            type="submit"
                                        >
                                            إرسال
                                        </button>
                                        <button
                                            className="py-2.5 px-5 ms-3 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                            onClick={handleCloseModal}
                                            type="button"
                                        >
                                            الانتقال للفرصة
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div >
        </>
    );
}