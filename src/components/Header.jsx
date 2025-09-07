import Navbar from "../components/Navbar"


function Header({title, subtitle, coverImg}){
    return (
        <section style={{
        width: "100%",
        height: "31rem",
        color: "white",
        backgroundImage: `url(${coverImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#787f82", // fallback color
      }} >
            <Navbar/>
        <header className="masthead pt-5 mt-3">
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{title}</h1>
                            <span className="subheading">
                                {subtitle}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    </header>
    </section>
    );
}

export default Header;