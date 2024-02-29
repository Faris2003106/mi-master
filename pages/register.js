import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Register() {
    return (
        <>
            <div className="pt-44 mb-24 px-20 414:px-4 414:pt-28">
                <div className="flex flex-row-reverse 414:flex-wrap">
                    <img src="/images/sign-up-investors.jpg" />
                    <div className="shadow-[0_0_30px_4px_rgba(0,0,0,0.1)] m-auto p-12 w-1/2 h-auto rounded-xl 414:mt-5 414:w-full">
                        <h1 className="font-bold text-xl">انشاء حساب جديد</h1>
                        <form className="flex flex-col">
                            <input type="email" className="mt-7 w-full bg-[#f9f9f9] focus:bg-white border-2 border-[#eee] px-[25px] h-[50px] rounded-[8px]" placeholder="البريد الإلكترني" />
                            <input type="text" pattern="05[0-9] {8}" maxLength={10} className="mt-4 w-full bg-[#f9f9f9] focus:bg-white border-2 border-[#eee] px-[25px] h-[50px] rounded-[8px]" placeholder="الجوال" />
                            <input type="password" className="mt-4 w-full bg-[#f9f9f9] focus:bg-white border-2 border-[#eee] px-[25px] h-[50px] rounded-[8px]" placeholder="كلمة المرور" />
                            {/* <FontAwesomeIcon icon={faEye} id="togglePassword" /> */}
                            <input type="password" className="mt-4 mb-6 w-full bg-[#f9f9f9] focus:bg-white border-2 border-[#eee] px-[25px] h-[50px] rounded-[8px]" placeholder="تأكيد كلمة المرور" />

                            <label className="text-sm text-[#6c757d]">بالضغط على إنشاء حساب, أنا أوافق على <Link href="#" className="font-bold text-[#007d56] hover:text-[#48b290]" >الشروط والأحكام</Link></label>
                            <button type="submit" className="py-[18px] px-10 my-5 text-white rounded-xl bg-[#002a56] hover:bg-[#122438]">تسجيل</button>
                            <label className="text-sm text-[#6c757d] ">هل لديك حساب؟ <Link href="login" className="text-[#007d56] hover:text-[#48b290] font-bold" >تسجيل الدخول</Link></label>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}