import { faArrowLeft, faClipboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const cards = [
    {img: '/images/mcci_ec1_2023.jpg', title: 'التقرير الأقتصادي للمدينة المنورة الربع الرابع 2023م', parargraph: 'أعدت غرفة المدينة المنورة هذا التقرير بهدف تعريف باقتصاد منطقة المدينة المنورة، ونسبة مساهمة كل قطاع فيه، وحجم التوظيف في كل قطاع والوقوف على أبرز الأنشطة التي تحتاجها المنطقة.، والمحافظات التابعة لها.', source: 'غرفة المدينة المنورة', link: '#' },
    {img: '/images/mcci_ec1_2023.jpg', title: 'التقرير الأقتصادي للمدينة المنورة الربع الرابع 2023م', parargraph: 'أعدت غرفة المدينة المنورة هذا التقرير بهدف تعريف باقتصاد منطقة المدينة المنورة، ونسبة مساهمة كل قطاع فيه، وحجم التوظيف في كل قطاع والوقوف على أبرز الأنشطة التي تحتاجها المنطقة.، والمحافظات التابعة لها.', source: 'غرفة المدينة المنورة', link: '#' },
    {img: '/images/mcci_ec1_2023.jpg', title: 'التقرير الأقتصادي للمدينة المنورة الربع الرابع 2023م', parargraph: 'أعدت غرفة المدينة المنورة هذا التقرير بهدف تعريف باقتصاد منطقة المدينة المنورة، ونسبة مساهمة كل قطاع فيه، وحجم التوظيف في كل قطاع والوقوف على أبرز الأنشطة التي تحتاجها المنطقة.، والمحافظات التابعة لها.', source: 'غرفة المدينة المنورة', link: '#' },
    {img: '/images/mcci_ec1_2023.jpg', title: 'التقرير الأقتصادي للمدينة المنورة الربع الرابع 2023م', parargraph: 'أعدت غرفة المدينة المنورة هذا التقرير بهدف تعريف باقتصاد منطقة المدينة المنورة، ونسبة مساهمة كل قطاع فيه، وحجم التوظيف في كل قطاع والوقوف على أبرز الأنشطة التي تحتاجها المنطقة.، والمحافظات التابعة لها.', source: 'غرفة المدينة المنورة', link: '#' },
    {img: '/images/mcci_ec1_2023.jpg', title: 'التقرير الأقتصادي للمدينة المنورة الربع الرابع 2023م', parargraph: 'أعدت غرفة المدينة المنورة هذا التقرير بهدف تعريف باقتصاد منطقة المدينة المنورة، ونسبة مساهمة كل قطاع فيه، وحجم التوظيف في كل قطاع والوقوف على أبرز الأنشطة التي تحتاجها المنطقة.، والمحافظات التابعة لها.', source: 'غرفة المدينة المنورة', link: '#' },

];

export default function economicLibrary(){
    return(
        <>
        <div className="pt-44 mb-24 pr-28 pl-28">
            <div className="text-right">
                <h1 className="font-bold text-2xl leading-8	text-[#007d56]">التقارير الاقتصادية
                <span className="block w-4 h-4 bg-green-700 rounded-full absolute mt-3"></span>
                <hr className="w-32 mt-5 mr-0"/>
                </h1>
            </div>
            <div className="flex flex-wrap justify-between">
                {
                    cards.map((card) => (
                        <div className="relative group mb-4 w-[334px] h-[448px] rounded-[15px] mt-10">
                    <img src={card.img} className=" object-cover rounded-[15px]  object-center h-full w-full" />
                    <div className="absolute bottom-0 p-[20px]  text-white rounded-[15px] transition duration-500 bg-gradient-to-b from-black via-black to-white custom-background">
                        <h5 className="mb-[10px] text-md font-semibold">{card.title}</h5>
                        <p class="text-[13px] mb-[5px] h-0 overflow-hidden leading-7 transition-[0.5s] duration-[0.5s] group-hover:mb-[5px] group-hover:h-[160px]">
                        {card.parargraph}
                        </p>
                        <p className="mb-[5px]">
                            <FontAwesomeIcon icon={faClipboard} className="ml-1 text-[20px]" /> المصدر :
                            <span className="font-extrabold"> {card.source}</span>
                        </p>
                        <div className="mt-10">
                            <Link href={card.link} className="flex justify-between py-[10px] px-[25px] text-white border-2 rounded-md items-center border-white hover:bg-white hover:text-black">
                                <span>عرض التفاصيل</span>
                                <FontAwesomeIcon icon={faArrowLeft}/>
                            </Link>
                        </div>
                    </div>                    
                    </div>
                    ))
                }
                </div>
        </div>
        </>
    );
}