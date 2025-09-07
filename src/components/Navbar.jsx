import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const navbarRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const navbar = navbarRef.current;
    const navHeight = navbar.offsetHeight;

    // Start at normal position
    navbar.style.top = "0px";

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down → hide navbar
        navbar.style.top = `-${navHeight}px`;
        navbar.classList.remove("scrolled-up");
      } else if (lastScrollTop > currentScroll) {
        // Scrolling up → show navbar ONLY if not at very top
        if (currentScroll > 40) {
          navbar.style.top = "0px";
          navbar.classList.add("scrolled-up");
        } else {
          // At very top → normal starting position
          navbar.style.top = "0px";
          navbar.classList.remove("scrolled-up");
        }
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav ref={navbarRef} id="navbar" className="navbar navbar-expand-lg navbar-light px-5 d-flex justify-content-center">
      <div className="container px-2 px-lg-2 mx-7">
                <Link className="navbar-brand px-1" to="/">Lizi's blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style={{color:"white"}}>
                    Menu
                    <svg className="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
                </button>
                <div className="collapse navbar-collapse px-1" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-3">
                        <li className="nav-item">  <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link></li>
                       <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="about">About me</Link></li>
                        <li className="nav-item">  <Link className="nav-link px-lg-3 py-3 py-lg-4" to="contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
    </nav>
  );
}

export default Navbar;