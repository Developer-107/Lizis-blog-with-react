import { Outlet, useLocation, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePageHeader from "./assets/images/headers/FirstPageHeader_1628x2001.jpg"
import AboutMePageHeader from "./assets/images/headers/AboutMePage_2668x2001.jpg"
import ContactMePageHeader from "./assets/images/headers/contactPage_1745x1000.jpeg"
import PostPageHeader from "./assets/images/headers/PostPage.jpg"
import { FastAverageColor } from "fast-average-color";



function Layout(){

  const location = useLocation();
  const { id } = useParams();
  const [specificBlog, setSpecificBlog] = useState(null);
  const [averageColor, setAverageColor] = useState("gray"); // fallback


  useEffect(() => {
    if (id) {
      fetch(`/api/blog/${id}`)
        .then(res => res.json())
        .then(data => setSpecificBlog(data.specificBlog))
        .catch(err => console.error(err));
    }
  }, [id]);

  useEffect(() => {
    if (specificBlog && specificBlog.cover_img) {
      const fac = new FastAverageColor();
      fac.getColorAsync(specificBlog.cover_img)
         .then(color => setAverageColor(color.hex))
         .catch(err => console.error(err));
    }
  }, [specificBlog]);

 

    let headerTitle = "Default Title";
    let headerSubtitle = "";
    let footerColor = "gray";
    let coverImg = "";
    

    


    if (location.pathname === "/") {
    headerTitle = "Blogs";
    headerSubtitle="Read Lizi's blogs"
    footerColor = "#4b677d";
    coverImg = HomePageHeader
  } else if (location.pathname === "/about") {
    headerTitle = "About Me";
    footerColor = "#7d8a71";
    coverImg = AboutMePageHeader
  } else if (location.pathname === "/contact") {
    headerTitle = "Contact Me";
    footerColor = "#d9ceba";
    coverImg = ContactMePageHeader
  } else if (location.pathname ==="/post-secret-L1@2000Elo") {
    headerTitle = "Post"
    footerColor = "#c26740"
    coverImg = PostPageHeader
  } else if (id && specificBlog) {
    // dynamic blog page
    headerTitle = specificBlog.title;
    footerColor = averageColor;
    coverImg = specificBlog.cover_img;
    headerSubtitle = specificBlog.subtitle || "";
  }

 



    return (
        <>
        <Header title={headerTitle} subtitle={headerSubtitle} coverImg={coverImg}/>
        <Outlet context={{ specificBlog }} /> {/* renders matched child route */}
        <Footer footerColor={footerColor}/>    
        </>
    )
}



export default Layout;