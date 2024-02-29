import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Contact(){
    return(
        <>
        <div className="pt-52 mb-24 pr-28 pl-28 414:pr-10 414:pl-10 414:pt-28">
    <div className="shadow-[0_0_30px_4px_rgba(0,0,0,0.1)] border-1 border-white rounded-[20px] px-[15px] py-[10px] bg-white">
        <div className="flex flex-wrap">
            <div className="w-1/2 px-4 mb-6 414:w-full 414:px-0">
                <img src="/images/contact-us.jpg" className="rounded-[20px] m-auto block h-auto" />
                <div className="w-full mt-6">
                    <Link href="https://maps.app.goo.gl/sKcQv7TykUk9Fpzk9">
                        <div className="text-center shadow-lg flex py-3 mb-6 w-full rounded-[15px] items-center">
                            <FontAwesomeIcon icon={faLocationDot} className="text-[32px] h-8 w-8 text-[#007c56] rounded-full p-3 border-2 border-[#002a56] border-dotted mx-4" />
                            <p className="leading-6 text-[15px] text-[#002a56] font-extrabold 414:text-[12px] ">
                                المملكة العربية السعودية - المدينة المنورة - طريق الملك عبدالعزيز
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="w-full mt-6">
                    <Link href="mailto:info@mcci.org.sa">
                        <div className="text-center shadow-lg flex py-3 mb-6 w-full rounded-[15px] items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="text-[32px] text-[#007c56] rounded-full p-3 border-2 border-[#002a56] border-dotted mx-4" />
                            <p className="leading-6 text-[15px] text-[#002a56] font-extrabold 414:text-[12px]">
                                info@mcci.org.sa
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="w-full mt-6">
                    <Link href="tel:920028910">
                        <div className="text-center shadow-lg flex py-3 mb-6 w-full rounded-[15px] items-center">
                            <FontAwesomeIcon icon={faPhone} className="text-[32px] text-[#007c56] rounded-full p-3 border-2 border-[#002a56] border-dotted mx-4" />
                            <p className="leading-6 text-[15px] text-[#002a56] font-extrabold 414:text-[12px]">
                                920028910
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 px-10 mb-10 414:w-full 414:px-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14525.155332263175!2d39.6942913!3d24.4754473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd955af46f5f03%3A0x1bae6ce7ef44ec8!2z2LrYsdmB2Kkg2KfZhNmF2K_ZitmG2Kkg2KfZhNmF2YbZiNix2Kk!5e0!3m2!1sar!2ssa!4v1707426111274!5m2!1sar!2ssa"
                    className="rounded-[15px] border-none shadow-xl h-full w-full"></iframe>
            </div>
        </div>
    </div>
</div>
        </>
    );
}