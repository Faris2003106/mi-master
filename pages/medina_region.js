import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import {faDollarSign} from '@fortawesome/free-solid-svg-icons/faDollarSign'
import {faDisplay} from '@fortawesome/free-solid-svg-icons/faDisplay'
import { Chart, plugins, registerables  } from "chart.js";

Chart.register(...registerables);

export default function MadinaRegion(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const chartRef3 = useRef(null);
    const chartRef4 = useRef(null);


useEffect(() => {
    const canvas = document.getElementById('myChart');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (chartRef1.current) {
        chartRef1.current.destroy(); // Destroy existing chart instance
    }
        chartRef1.current = new Chart(ctx, {
        type: 'line',
        data :{
        labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
        label: 'اعداد المصانع بالمدينة',
        data: [210, 262, 291, 306, 302, 299, 334, 339, 367, 493],
        fill: true,
        borderColor: 'darkblue',
        tension: 0.1
    }]
        },
        options: {
        label:{

        },
        scales:{
            x:{
                display: true,                
                title:{
                    display: true,
                    text: 'الفترة الزمنية'
                    
                }
            },
            y:{
                display: true,
                title:{
                    display:true,
                    text: 'عدد المصانع'
                }
            },
            yAxes:[
                {
                ticks: {
                    suggestedMin: 100, 
                    beginAtZero: true,
                },
            }, 
            
            ],
        },
        maintainAspectRatio: false,
        responsive: true,
        }
    });
    }
  });

useEffect(() => {
    const canvas = document.getElementById('myChart2');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        if (chartRef2.current) {
        chartRef2.current.destroy(); 
    }
    chartRef2.current = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:[
                'الانشطة الصناعية الأخرى', 'صنع الاثاث', 'الصناعات التحويلية', 'صنع الخشب ومنتجات الخشب', 'صنع المنسوجات'
                ,'صنع المعدات الكهربائية', 'فحم الكوك المنتجات النفطية', 'صنع الملبوسات', 'الآلات والمعدات الغير مصنفة'
                , 'صنع الورق ومنتجاته', 'صنع الفلزات القاعدية', 'صنع المشروبات', 'صنع منتجات المعادن', 'صنع المواد الكيميائية'
                , 'صنع منتجات المطاط', 'المنتجات الغذائية', 'صنع المعادن اللافلزية الاخرى'
            ],
            datasets: [{
                data: [12, 6, 6, 7, 8,9,9,10,11,14,18,26,36,52,67,74,117],
                backgroundColor: [
                'darkblue',
                ],
                
                borderWidth: 1
            }]
        },
        options:{
            maintainAspectRatio: false,
            responsive: true,
        }
    });
    }
});

useEffect(() => {
    const canvas = document.getElementById('myChart3');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        if (chartRef3.current) {
        chartRef3.current.destroy(); 
    }
    chartRef3.current = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:[
                'الجملة والتجزئة', 'المقاولات', 'المطاعم و الإعاشة', 'الأنشطة الخدمية', 'الصناعات التحويلية', 'صيانة المركبات'
                , 'العقاري', 'السياحي', 'النقل والتخزين', 'الأنشطة المهنية'
            ],
            datasets: [
            {
                label: 'Q1',
                data: ['32' , '31', '32', '31', '32', '32', '31', '29', '31', '33'],
                backgroundColor: 'rgb(26, 163, 255)'
            },
            {
                label: 'Q2',
                data: ['33' , '33', '33', '34', '34', '33', '34', '34', '33', '33'],
                backgroundColor: 'rgb(0, 230, 138)'
            },
            {
                label: 'Q3',
                data: ['35' , '36', '35', '35', '35', '35', '35', '36', '36', '34'],
                backgroundColor: 'orange'
            }
        ]
        },
        options:{
            maintainAspectRatio: false,
            responsive: true,
            
            scales: {
                indexAxis: 'y',
                x: {
                    stacked: true,                    
                },
                y: {
                    stacked:true,
                    ticks: {
                        callback: function (value) {
                            return value + '%'; // Append '%' to the tick values
                        }
                        
                    }
                },
                yAxes:[
                    {
                    ticks: {
                        suggestedMax: '100%',
                        beginAtZero: true,                        
                    },
                }, 
                
                ],
            }
        }
    });
    }
});

useEffect(() => {
    const canvas = document.getElementById('myChart4');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (chartRef4.current) {
        chartRef4.current.destroy(); // Destroy existing chart instance
    }
        chartRef4.current = new Chart(ctx, {
        type: 'line',
        data :{
        labels: ['سبتمبر-22', 'أكتوبر-22', 'نوفمبر-22', 'ديسمبر-22', 'يناير-23', 'فبراير-23', 'مارس-23', 'ابريل-23', 'مايو-23', 'يونيو-23', 'يوليو-23', 'أغسطس-23', 'سبتمبر-23'],
        datasets: [{
        // label: '',
        data: [91731, 92259, 91551, 91580, 92063, 92478, 93295, 93440, 96396, 96778, 98846, 101389, 102358],
        fill: false,
        borderWidth: 5,
        borderColor: 'darkblue',
        tension: 0.1
    }]
        },
        options: {
        label:{

        },
        scales:{
            
        },
        maintainAspectRatio: false,
        responsive: true,
        }
    });
    }
  });
    return(
        <>
        <div className="medina_region">
            <div className="head-title">
                <h1 className="main-title">منطقة المدينة المنورة في أرقام</h1>
            </div>
            <ul className="tabs-list">
            {/* <label id="open-nav-label" for="nav-ctrl"></label> */}
            <li id="li-for-panel-1">
                <label className={toggleState === 1 ? "panel-label active-label" : "panel-label"} onClick={() => toggleTab(1)}>السكان بمنطقة المدينة المنورة</label>
            </li>
            <li id="li-for-panel-1">
                <label className={toggleState === 2 ? "panel-label active-label" : "panel-label"} onClick={() => toggleTab(2)}>المواقع الأثرية والسياحية</label>
            </li>
            <li id="li-for-panel-1">
                <label className={toggleState === 3 ? "panel-label active-label" : "panel-label"} onClick={() => toggleTab(3)}> التسوق</label>
            </li>
            <li id="li-for-panel-1">
                <label className={toggleState === 4 ? "panel-label active-label" : "panel-label"} onClick={() => toggleTab(4)}>الحج والعمرة</label>
            </li>
            <li id="li-for-panel-1">
                <label className={toggleState === 5 ? "panel-label active-label" : "panel-label"} onClick={() => toggleTab(5)}>القطاع الزراعي والحيواني بالمنطقة</label>
            </li>
            <li id="li-for-panel-1">
                <label className={toggleState === 6 ? "panel-label active-label" : "panel-label"} onClick={() => toggleTab(6)}>قطاع العقار والإسكان</label>
            </li>
            <li id="li-for-panel-1">
                <label className={toggleState === 7 ? "panel-label active-label" : "panel-label"} onClick={() => toggleTab(7)}>الاتصالات والخدمات البريدية</label>
            </li>
            <li id="li-for-panel-1">
                <label className={toggleState === 8 ? "panel-label active-label" : "panel-label"} onClick={() => toggleTab(8)}>قطاع التعليم</label>
            </li>
            <li id="li-for-panel-1">
                <label className={toggleState === 9 ? "panel-label active-label" : "panel-label"} onClick={() => toggleTab(9)}>سوق العمل</label>
            </li>
            <li id="li-for-panel-1">
                <label className={toggleState === 10 ? "panel-label active-label" : "panel-label"} onClick={() => toggleTab(10)}>الصناعة والتجارة</label>
            </li>
            </ul>
            
            <div className={toggleState === 1 ? "section-title active-content" : "section-title"}>
                <h2>السكان بمنطقة المدينة المنورة</h2>
                <hr/>
                <div className="img-fluid">
                    <img src="images/medina/21.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/27.png"/>
                </div>
                <h4>المصدر هيئة تطوير منطقة المدينة المنورة</h4>
                <hr/>
            </div>
            <div className={toggleState === 2 ? "section-title active-content" : "section-title"}>
                <h2>المواقع الأثرية والسياحية</h2>
                <hr/>
                <div className="img-fluid">
                    <img src="images/medina/17.png" />
                </div>
                <div className="img-fluid">
                    <img src="images/medina/31.png"/>
                </div>
                <h4>المصدر هيئة تطوير منطقة المدينة المنورة</h4>
                <hr/>
            </div>
            <div className={toggleState === 3 ? "section-title active-content" : "section-title"}>
                <h2> التسوق</h2>
                <hr/>
                <div className="img-fluid">
                    <img src="images/medina/39.png"/>
                </div>
                <h4>المصدر هيئة تطوير منطقة المدينة المنورة</h4>
                <hr/>
            </div>
            <div className={toggleState === 4 ? "section-title active-content" : "section-title"}>
                <h2>الحج والعمرة</h2>
                <hr/>
                <div className="img-fluid">
                    <img src="images/medina/13.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/9.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/11.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/15.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/55.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/57.png"/>
                </div>
                <h4>المصدر هيئة تطوير منطقة المدينة المنورة</h4>
                <hr/>
            </div>
            <div className={toggleState === 5 ? "section-title active-content" : "section-title"}>
                <h2>القطاع الزراعي والحيواني بالمنطقة</h2>
                <hr/>
                <div className="img-fluid">
                    <img src="images/medina/35.png"/>
                </div>
                <h4>المصدر هيئة تطوير منطقة المدينة المنورة</h4>
                <hr/>
            </div>
            <div className={toggleState === 6 ? "section-title active-content" : "section-title"}>
                <h2>
                    قطاع العقار والإسكان
                </h2>
                <hr/>
                <div className="img-fluid">
                    <img src="images/medina/41.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/43.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/45.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/47.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/49.png"/>
                </div>
                <h4>المصدر هيئة تطوير منطقة المدينة المنورة</h4>
                <hr/>
            </div>
            <div className={toggleState === 7 ? "section-title active-content" : "section-title"}>
                <h2>الاتصالات والخدمات البريدية</h2>
                <hr/>
                <div className="img-fluid">
                    <img src="images/medina/51.png"/>
                </div>
                <h4>المصدر هيئة تطوير منطقة المدينة المنورة</h4>
                <hr/>
            </div>
            <div className={toggleState === 8 ? "section-title active-content" : "section-title"}>
                <h2>قطاع التعليم</h2>
                <hr/>
                <div className="img-fluid">
                    <img src="images/medina/19.png"/>
                </div>
                <h4>المصدر هيئة تطوير منطقة المدينة المنورة</h4>
                <hr/>
            </div>
            <div className={toggleState === 9 ? "section-title active-content" : "section-title"}>
                <h2>سوق العمل</h2>
                <hr/>
                <div className="img-fluid">
                    <img src="images/medina/23.png"/>
                </div>
                <div className="img-fluid">
                    <img src="images/medina/25.png"/>
                </div>
                <h4>المصدر هيئة تطوير منطقة المدينة المنورة</h4>
                <hr/>
            </div>
            <div className={toggleState === 10 ? "section-title active-content" : "section-title"}>
                <h2>الصناعة والتجارة</h2>
                <hr/>
                <p>"الإمكانات الصناعية"</p>
                <ul className="ul_targets">
                <li>
                    <FontAwesomeIcon icon={faDollarSign} className="i" />
                        <span>الأراضي الصناعية بالمدينة المنورة : <span style={{color: "darkcyan"}}>25 مليون متر مربع</span></span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faEye} className="i" />
                    <span>عدد المصانع المنتجة : <span style={{color: "darkcyan"}}>367 مصنع بنسبة 4.1 % لإجمالي المملكة</span></span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faDisplay} className="i" />
                    <span>مدينة ينبع الصناعية : <span style={{color: "darkcyan"}}>606 كم 2 إجمالي المساحة</span></span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faDollarSign} className="i" />
                        <span>رأس المال : <span style={{color: "darkcyan"}}>113.24 مليار ريال بنسبة 8.7 % لإجمالي المملكة</span></span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faEye} className="i" />
                    <span>واحات مدن – ينبع : <span style={{color: "darkcyan"}}>500 الف متر مربع</span></span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faDisplay} className="i" />
                    <span>حجم العمالة : <span style={{color: "darkcyan"}}>45.313 موظف بنسبة 4.6 % لإجمالي المملكة</span></span>
                    </li>
                </ul>
                <p>"المدينة الصناعية في أرقام"</p>
                <div className="med_factorys_num">
                    <div className="icon-box">
                        <h4>17</h4>
                        {/* <hr/> */}
                        <p>مليون متر مربع مساحات الأراضي</p>
                    </div>
                    <div className="icon-box">
                        <h4>10</h4>
                        {/* <hr/> */}
                        <p>مليون متر مربع من الأراضي المطورة</p>
                    </div>
                    <div className="icon-box">
                        <h4>82%</h4>
                        {/* <hr/> */}
                        <p>نسبة الإشغال من الأراضي القابلة للتخصيص</p>
                    </div>
                    <div className="icon-box">
                        <h4>155</h4>
                        {/* <hr/> */}
                        <p>مصنع منتج</p>
                    </div>
                    <div className="icon-box">
                        <h4>35</h4>
                        {/* <hr/> */}
                        <p>مصنع تجهيز خطوط انتاج</p>
                    </div>
                    <div className="icon-box">
                        <h4>16</h4>
                        {/* <hr/> */}
                        <p>مصنع تحت الإنشاء</p>
                    </div>
                    <div className="icon-box">
                        <h4>68</h4>
                        {/* <hr/> */}
                        <p>مصنعاً جاهزاً</p>
                    </div>
                    <div className="icon-box">
                        <h4>16</h4>
                        {/* <hr/> */}
                        <p>مستودعات</p>
                    </div>
                </div>
                <p>"تطور أعداد المصانع بالمدينة المنورة"</p>
                <div className="chart">
                <canvas id="myChart" className="factor"></canvas>
                </div>
                <p>"مصانع منطقة المدينة حسب النشاط الصناعي"</p>
                <div className="chart">
                <canvas id="myChart2" className="factor"></canvas>
                </div>
                <p>"قطاعات المنطقة"</p>
                <div className="chart">
                <canvas id="myChart3" className="factor"></canvas>
                </div>
                <p>"إجمالي الأنشطة"</p>
                <div className="chart">
                <canvas id="myChart4" className="factor"></canvas>
                </div>
            </div>
        </div>
        </>
    );
}