import { Routes, Route } from 'react-router-dom';
import { useLocation, useParams } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import Post from './pages/Post.jsx';



function App() {
  const { id } = useParams();


  return (
    <>
     
        <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/post-secret-L1@2000Elo" element={<Post />} />
          </Route>
        </Routes>
      
    </>
  )
}

export default App
