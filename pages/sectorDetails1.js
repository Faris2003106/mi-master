import { faChartSimple, faLineChart, faListUl, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chart, registerables } from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(...registerables);



const cards =[
    {icon: <FontAwesomeIcon icon={faListUl}/>, nums: '37,734', title: 'إجمالي عدد الأنشطة التجارية'},
    {icon: <FontAwesomeIcon icon={faChartSimple}/>, nums: '%36.9', title: ' النسبة المئوية لعدد الأنشطة للربع الثالث من عام 2023م'},
    {icon: <FontAwesomeIcon icon={faLineChart}/>, nums: '8.3%', title: 'معدل التغير السنوي للنشاط'},
    {icon: <FontAwesomeIcon icon={faUser}/>, nums: '1765', title: 'معدل الأنشطة للسكان', paragraph: 'لكل 100 ألف نسمة'}
]


export default function SectorDetails1(){
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);

    useEffect(() => {
        const canvas = document.getElementById('myChart');
        if(canvas) {
            const ctx = canvas.getContext('2d');
            if (chartRef1.current){
                chartRef1.current.destroy();
            }
            chartRef1.current = new Chart(ctx, {
                type: 'line',                
                data: {
                    labels:[
                        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                    ],
                    datasets: [
                    {
                        label: '2019',                        
                        data: ['20000', '21000', '22000', '23000', '24000', '25000', '26000', '27000', '28000', '29000', '30000', '31000'],
                        borderColor: 'blue',
                        backgroundColor: 'lightblue',
                        pointStyle: 'circle',
                        pointRadius: 10,
                        pointHoverRadius: 15
                    },
                    {
                        label: '2020',                        
                        data: ['30000', '31000', '32000', '33000', '34000', '35000', '36000', '37000', '38000', '39000', '40000', '41000'],
                        borderColor: 'darkblue',
                        backgroundColor: 'blue',
                        pointStyle: 'circle',
                        pointRadius: 10,
                        pointHoverRadius: 15
                    },
                    {
                        label: '2021',                        
                        data: ['40000', '41000', '42000', '43000', '44000', '45000', '46000', '47000', '48000', '49000', '50000', '51000'],
                        borderColor: 'green',
                        backgroundColor: 'lightgreen',
                        pointStyle: 'circle',
                        pointRadius: 10,
                        pointHoverRadius: 15
                    },
                    {
                        label: '2022',                        
                        data: ['50000', '51000', '52000', '53000', '54000', '55000', '56000', '57000', '58000', '59000', '60000', '61000'],
                        borderColor: 'darkorange',
                        backgroundColor: 'orange',
                        pointStyle: 'circle',
                        pointRadius: 10,
                        pointHoverRadius: 15
                    },
                    {
                        label: '2023',                        
                        data: ['60000', '61000', '62000', '63000', '64000', '65000', '66000', '67000', '68000', '69000', '70000', '71000'],
                        borderColor: 'gray',
                        backgroundColor: 'lightgray',
                        pointStyle: 'circle',
                        pointRadius: 10,
                        pointHoverRadius: 15
                    },
                    ]
                },
                options:{
                    responsive: true,
                    scales:{
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'أعداد السجلات' 
                            },
                            suggestedMin: 15000,
                            // suggestedMax: 200
                        }
                    },
                    plugins:{
                        title:{
                            display: true,
                            text: 'التطور الشهري للأنشطة بالمدينة المنورة',
                            fontSize: 25,
                        }
                    }
                }
            })
        }
    })


    useEffect(() =>{
        const canvas = document.getElementById('myChart2');
        if(canvas) {
            const ctx = canvas.getContext('2d');
            if(chartRef2.current) {
                chartRef2.current.destroy();
            }
            chartRef2.current = new Chart(ctx, {
                type: 'line',
                data :{
                labels: ['2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                label: 'عدد الأنشطة',
                data: [27123, 30337, 32650, 43525, 92063],
                fill: false,
                borderWidth: 2,
                borderColor: '#2caffe',
                tension: 0.1
            }]
                },
                options: {
                label:{
                    
                },
                scales:{
                    y: {                        
                        suggestedMin: 15000,
                        // suggestedMax: 200
                    }
                },
                maintainAspectRatio: false,
                responsive: true,
                }
            });        
        }
    })
    return(
        <>
        <div className="pt-36 mb-24 pr-20 pl-20">
            <div className="text-right">
                <h1 className="font-bold text-2xl leading-8	text-[#007d56]">أنشطة تجارة الجملة والتجزئة
                <span className="block w-4 h-4 bg-green-700 rounded-full absolute mt-3"></span>
                <hr className="w-32 mt-5 mr-0"/>
                </h1>
                <p className="text-[#686868] mt-5 text-sm font-thin">وتشمل ( البيع بالجملة والتجزئة لجميع السلع )</p>
            </div>
            <div className="flex flex-wrap">
            {cards.map((card) => (        
            <div className="mt-12 w-10 flex-auto p-[30px] text-center relative mb-10 rounded-3xl mx-5
                bg-white shadow-[0_5px_26px_0_rgba(68,88,144,0.14)] border-2 border-white hover:border-[#002a56]
                ease-in-out duration-600">
                <div className="bg-[#002a56] mx-auto mb-5 pt-4 text-center rounded-full w-[66px] h-[66px] text-white text-3xl">
                    {card.icon}
                </div>
                <span className="text-4xl text-[#68A4C4] block mb-5">{card.nums}</span>
                <h4>{card.title}</h4>
                <h7 className="text-sm text-[#888888] pt-5">{card.paragraph}</h7>
            </div>        
                ))}
            </div>
            <div className="mt-10 flex w-1/2 h-auto">
                <canvas id="myChart" className="ml-5"></canvas>
                <canvas id="myChart2"></canvas>
            </div>
            {/* <div className="mt-10 flex flex-wrap w-1/2">
                
            </div> */}
        </div>
        </>
    )
}