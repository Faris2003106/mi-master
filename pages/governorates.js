export default function Governorates() {
    return (
    <>
    <section className="gov_section">
        <div className="dividers-header">
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                <h2 className="section-title2">
                    <span>المحافظات</span>
                </h2>
                </div>
                <div className="col-md-6">
                <div className="listAll-wrapper2">
                    <a className="btn btn-sm" href="#">
                    عرض الكل
                    </a>
                    <div className="owl-custom-control">
                    <div className="owl-controls">
                        <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                        >
                        <i
                            className="Ini Ini-cheveron-left"
                            aria-hidden="true"
                        ></i>
                        </button>
                        <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                        >
                        <i
                            className="Ini Ini-cheveron-right"
                            aria-hidden="true"
                        ></i>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="cities-list">
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">العلا</h5>
                    <img
                    src="/images/cities/ola.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">مهد الذهب</h5>
                    <img
                    src="/images/cities/mahd.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">ينبع</h5>
                    <img
                    src="/images/cities/yanbu.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">بدر</h5>
                    <img
                    src="/images/cities/badr.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">خيبر</h5>
                    <img
                    src="/images/cities/khbar.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
                <a href="#">
                <div className="card-image">
                    <h5 className="card-title">الحناكية</h5>
                    <img
                    src="/images/cities/alhanikea.png"
                    alt="City"
                    className="city-image"
                    />
                </div>
                </a>
            </div>
            </div>
        </div>
    </section>
    </>
);
}
