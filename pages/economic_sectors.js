import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPaintRoller,
    faDollarSign,
    faTree,
    faSeedling,
    faGamepad,
    faSchool,
    faDumbbell,
    faBuilding,
    faWrench,
    faUtensils,
    faCar,
    faBoxArchive,
    faStethoscope,
    faHammer,
    faUsers,
    faPhone,
    faRoad,
    faCalendarDays,
    faHandHolding,
    faHandHoldingDollar,

} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {Input} from "@nextui-org/react";
import { useState } from "react";


export const SearchIcon = (props) => (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );

  const cards = [
    { icon: <FontAwesomeIcon icon={faDollarSign} />, title: 'أنشطة تجارة الجملة والتجزئة', paragraph: 'وتشمل ( البيع بالجملة والتجزئة لجميع السلع )', link: 'sectorDetails1' },
    { icon: <FontAwesomeIcon icon={faSeedling} />, title: 'الأنشطة الزراعية', paragraph: 'وتشمل (جميع أنشطة الزراعة وتربية الدواجن والمواشي والخدمات الزراعية وصيد وتربية الأسماك ....)', link: 'sectorDetails2' },
    { icon: <FontAwesomeIcon icon={faTree} />, title: 'الأنشطة السياحية', paragraph: 'وتشمل قطاع الإيواء، وكالات السفر، تنظيم الرحلات، قصور وقاعات الأفراح' },
    { icon: <FontAwesomeIcon icon={faBuilding} />, title: 'الأنشطة العقارية', paragraph: 'وتشمل (جميع أنشطة إدارة وتشغيل العقارات وأعمال السمسرة في الأراضي والعقارات)' },
    { icon: <FontAwesomeIcon icon={faDumbbell} />, title: 'أنشطة التعدين', paragraph: 'وتشمل (أنشطة استخراج خامات المعادن الفلزية واللافلزية وتشغيل المحاجر....)' },
    { icon: <FontAwesomeIcon icon={faSchool} />, title: 'الأنشطة التعليمية', paragraph: 'وتشمل (جميع أنشطة التعليم والتدريب)', link: '' },
    { icon: <FontAwesomeIcon icon={faWrench} />, title: 'الأنشطة الصناعية', paragraph: 'وتشمل كل الأنشطة الإنتاجية التحويلية (صناعة، خياطة، صيانة إصلاح المعدات والأجهزة، تشكيل المعادن ...)', link: '' },
    { icon: <FontAwesomeIcon icon={faGamepad} />, title: 'الأنشطة الترفيهية', paragraph: 'وتشمل (جميع أنشطة الأندية والصالات الرياضية والمتاحف ومراكز الترفيه والملاهي وتنظيم الفعاليات الترفيهية ....)', link: '' },
    { icon: <FontAwesomeIcon icon={faUtensils}/>, title: 'المطاعم والأعاشة', paragraph: 'المطاعم والأعاشة', link: ''},
    { icon: <FontAwesomeIcon icon={faCar}/>, title: 'ورش صيانة المركبات', paragraph: 'ورش صيانة المركبات', link: ''},
    { icon: <FontAwesomeIcon icon={faBoxArchive}/>, title: 'الأنشطة التأجيرية', paragraph: 'الأنشطة التأجيرية', link: ''},
    { icon: <FontAwesomeIcon icon={faStethoscope}/>, title: 'الأنشطة الصحية', paragraph: 'الأنشطة الصحية', link: ''},
    { icon: <FontAwesomeIcon icon={faHammer}/>, title: 'الأنشطة المهنية', paragraph: 'الأنشطة المهنية', link: ''},
    { icon: <FontAwesomeIcon icon={faUsers}/>, title: 'أنشطة اجتماعية', paragraph: 'أنشطة اجتماعية', link: ''},
    { icon: <FontAwesomeIcon icon={faPhone}/>, title: 'أنشطة الاتصالات والمعلومات', paragraph: 'أنشطة الاتصالات والمعلومات', link: ''},
    { icon: <FontAwesomeIcon icon={faRoad}/>, title: 'أنشطة النقل والتخزين', paragraph: 'أنشطة النقل والتخزين   ', link: ''},
    { icon: <FontAwesomeIcon icon={faCalendarDays}/>, title: 'أنشطة تنظيم قطاع الأعمال', paragraph: 'أنشطة تنظيم قطاع الأعمال', link: ''},
    { icon: <FontAwesomeIcon icon={faHandHolding}/>, title: 'أنشطة خدمية', paragraph: 'أنشطة خدمية', link: ''},
    { icon: <FontAwesomeIcon icon={faHandHoldingDollar}/>, title: 'أنشطة مالية', paragraph: 'أنشطة مالية', link: ''},
    { icon: <FontAwesomeIcon icon={faPaintRoller}/>, title: 'مقاولات', paragraph: 'مقاولات', link: ''},
  ];
  
export default function EconomicSectors(){
    const [searchTitle, setSearchTitle] = useState("");
    const filteredCards = cards.filter((card) =>
        card.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    return(
        <>
        <div className='pt-48 mb-24 pr-20 pl-20' >
        <div className="flex items-center justify-between">
  <h1 className="font-bold text-4xl w-full space-x-80">القطاعات الإقتصادية</h1>
  <Input
    // label="Search"
    value={searchTitle}
    onChange={(e) => setSearchTitle(e.target.value)}
    isClearable
    radius="lg"
    classNames={{
      label: "text-black/50 dark:text-white/90",
      input: [
        "bg-transparent",
        "text-black/90 dark:text-white/90",
        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
      ],
      innerWrapper: "bg-transparent",
      inputWrapper: [
        "shadow-md",
        "bg-default-200/50",
        "dark:bg-default/60",
        "backdrop-blur-xl",
        "backdrop-saturate-200",
        "hover:bg-default-200/70",
        "dark:hover:bg-default/70",
        "group-data-[focused=true]:bg-default-200/50",
        "dark:group-data-[focused=true]:bg-default/60",
        "!cursor-text",
        "w-80",
        "mr-80"
        
      ],
    }}
    placeholder="إبحث عن القطاع المراد الوصول إليه"
    startContent={
      <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
    }
  />
</div>
        <div className="flex flex-wrap">
            {filteredCards.length === 0 ? (
                <h1 className="text-xl font-bold mt-12">لا توجد نتائج</h1>
            ):( filteredCards.map((card ) => (

            <div className="h-auto rounded-2xl shadow-lg mt-14 mx-3 text-center w-80">
                <Link href={card.link || ''}>
                    <div className='w-full items-center'>
                        <div className="mt-12 mx-28 p-8 justify-center w-auto h-110 bg-gradient-to-r 
                            from-[rgba(0,125,86,0.5)] to-[#002a56] transition-all duration-300 ease-out
                            flex items-center rounded-full transform-style-preserve-3d text-4xl text-white">
                            {card.icon}
                        </div>
                    </div>
                    <h4 className="pt-6 font-bold text-lg">{card.title}</h4>
                    <p className="text-xs text-gray-500 pt-2 mb-24">{card.paragraph}</p>
                </Link>
            </div>
            
            ))
            )}
        </div>
        </div>
        </>
    );
}