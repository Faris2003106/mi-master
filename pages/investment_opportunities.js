import Link from "next/link";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLayerGroup, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const cards = [
    { title: 'انشاء وتشغيل وصيانة مصنع طحن وتجهيز الخامات الصناعية', img: 'images/madina_chember.png', activity: 'صناعي', endDate: '2024-04-19', location: '#', link: 'opportunity_details' },
    { title: 'زراعة المانجو والأشجار المثمرة في محافظة المخواة في منطقة الباحة', img: 'images/Federation of Saudi Chambers.png', activity: 'زراعي', endDate: '2024-09-25', location: '#' },
    { title: '', img: 'images/madina_chember.png', activity: 'صناعي', endDate: '2024-04-19', location: '#' },
    { title: '', img: 'images/madina_chember.png', activity: 'صناعي', endDate: '2024-04-19', location: '#' },
    { title: '', img: 'images/madina_chember.png', activity: 'صناعي', endDate: '2024-04-19', location: '#' },

];

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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function InvestmentOpportunities() {
    const [searchTitle, setSearchTitle] = useState("");
    const filteredCards = cards.filter((card) =>
        card.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    return (
        <>
            <div className="pt-44 mb-24 pr-28 pl-28">
                <div className="text-start text-3xl font-bold justify-center">
                    <h2>الفرص الاستثمارية الحكومية</h2>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-1/4 mt-14 p-5 shadow-2xl h-full rounded-2xl">
                        <Input
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
                                ],
                            }}
                            placeholder="إبحث هنا"
                            startContent={
                                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                            }
                        />
                        <div>
                            <h2 className="font-bold mt-8 text-xl text">المنطقة</h2>
                            <Menu as="div" className="relative inline-block text-left w-full">
                                <div>
                                    <Menu.Button className="mt-5 p-5 border-1 w-full inline-flex justify-between rounded-lg bg-white
                                font-thin text-[#b5b5b5] shadow-sm hover:bg-gray-50">
                                        المنطقة
                                        <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute text-right right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1 mx-3">
                                            <Input
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
                                                        "my-3",
                                                        "px-5",

                                                    ],
                                                }}
                                                // placeholder="إبحث هنا"
                                                startContent={
                                                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                                                }
                                            />

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#007d56]' : 'text-gray-700',
                                                            'block px-4 py-4 text-medium '
                                                        )}
                                                    >
                                                        المدينة المنورة
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#007d56]' : 'text-gray-700',
                                                            'block px-4 py-4 text-medium'
                                                        )}
                                                    >
                                                        الرياض
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#007d56]' : 'text-gray-700',
                                                            'block px-4 py-4 text-medium'
                                                        )}
                                                    >
                                                        مكة المكرمة
                                                    </Link>
                                                )}
                                            </Menu.Item>

                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                        <div>
                            <h2 className="font-bold mt-8 text-xl">المدينة</h2>
                            <Menu as="div" className="relative inline-block text-left w-full">
                                <div>
                                    <Menu.Button className="mt-5 p-5 border-1 w-full inline-flex justify-between rounded-lg bg-white
                                font-thin text-[#b5b5b5] shadow-sm hover:bg-gray-50">
                                        المدينة
                                        <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute text-right right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1 mx-3">
                                            <Input
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
                                                        "my-3",
                                                        "px-5",

                                                    ],
                                                }}
                                                // placeholder="إبحث هنا"
                                                startContent={
                                                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                                                }
                                            />

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#007d56]' : 'text-gray-700',
                                                            'block px-4 py-4 text-medium '
                                                        )}
                                                    >
                                                        المدينة المنورة
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#007d56]' : 'text-gray-700',
                                                            'block px-4 py-4 text-medium'
                                                        )}
                                                    >
                                                        الرياض
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-[#007d56]' : 'text-gray-700',
                                                            'block px-4 py-4 text-medium'
                                                        )}
                                                    >
                                                        مكة المكرمة
                                                    </Link>
                                                )}
                                            </Menu.Item>

                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                        <div>
                            <h2 className="font-bold mt-8 text-xl">الأنشطة</h2>
                            <div className="flex items-center mt-5 mr-3">
                                <input type="checkbox" className="w-6 h-6 ml-3" />
                                <label for="berries_1">التجارية</label>
                            </div>
                            <div className="flex items-center mt-5 mr-3">
                                <input type="checkbox" className="w-6 h-6 ml-3" />
                                <label for="berries_2">الزراعية</label>
                            </div>
                            <div className="flex items-center mt-5 mr-3">
                                <input type="checkbox" className="w-6 h-6 ml-3" />
                                <label for="berries_3">الصناعية</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-[70%] mt-14 mr-10">
                        {filteredCards.length === 0 ? (
                            <h1 className="text-xl font-bold mt-12">لا توجد نتائج</h1>
                        ) :

                            (filteredCards.map((card) => (
                                <div className="w-full mb-12 shadow-md flex items-start p-8 rounded-xl transition-[3s] border-1 border-white hover:border-1 hover:border-[#007d56]">
                                    <img src={card.img} width={150} height={150} className="my-auto" />
                                    <div className="mr-4">
                                        <Link href={card.link || ''}>
                                            <h2 className="font-bold text-[#007d56] hover:text-[#006646]">
                                                {card.title}
                                            </h2>
                                        </Link>
                                        <div className="flex mt-5">
                                            <FontAwesomeIcon icon={faLayerGroup} className="ml-3 text-xl" />
                                            <p className="text-[12px] text-[#949792]">النشاط
                                                <br />
                                                <span className="text-black text-[15px]"><strong>{card.activity}</strong></span>
                                            </p>
                                        </div>
                                        <div className="flex mt-5">
                                            <FontAwesomeIcon icon={faClock} className="ml-3 text-xl" />
                                            <p className="text-[12px] text-[#949792]">تاريخ انتهاء الفرصة
                                                <br />
                                                <span className="text-black text-[15px]"><strong>{card.endDate}</strong></span>
                                            </p>
                                        </div>
                                        <Link href={card.location} className="hover:text-[#006646]">
                                            <div className="flex mt-5">
                                                <FontAwesomeIcon icon={faLocationDot} className="ml-3 text-xl" />
                                                <p className="text-[15px] text-black hover:text-[#006646] font-bold">
                                                    الموقع الجغرافي
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="continer-main-pie2">
                                        <div className="main-pie">
                                            <div className="pie animate no-round">
                                                <div className="pie-inner animate no-round">
                                                    <h5>50%</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            )}
                    </div>
                </div>
            </div >
        </>
    );
}