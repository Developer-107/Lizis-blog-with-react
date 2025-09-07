import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Home (){

  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
  fetch(`http://localhost:5000/api/blogs?page=${currentPage}`)
    .then((res) => res.json())
    .then((data) => {
      setBlogs(data.blogs);
      setTotalPages(data.totalPages);
    });
}, [currentPage]);

  return(<> <section id="Blogs" className="py-5 my-5 px-5 mx-5">
    <div className="container px-4 px-lg-5 pt-5 px-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7 w-50">

                     {blogs.map(blog => (
                    <div key={blog.id} ><div  className="post-preview">
                         <Link to={`/blog/${blog.id}`} className="text-danger link-no-underline">
                           <h2 className="post-title">{blog.title}</h2>
                           <h3 className="post-subtitle">{blog.subtitle}</h3>
                         </Link>
                         <p className="post-meta">
                           {new Date(blog.post_date).toLocaleDateString("en-GB", {
                             day: "numeric",
                             month: "long",
                             year: "numeric"
                           })}
                         </p>
                       </div><hr className="my-4" /></div>
                    ))}
                     
                    <div className="d-flex justify-content-between mb-4">
                    {currentPage > 1 && 
                    (<div id="ShowRecentPosts" className="d-flex justify-content-start">
                        <Link className="btn btn-primary text-uppercase" to={`/?page=${currentPage - 1}`}>← Recent Posts</Link>
                    </div>)
                       }

                    {/* <!-- Pager--> */}
                    {currentPage < totalPages && (
                    <div id="ShowOlderPosts" className="ms-auto">
                         <Link className="btn btn-primary text-uppercase" to={`/?page=${currentPage + 1}`}>Older Posts →</Link>
                    </div>
                       )} 
                      </div>



                </div>
            </div>
        </div>

</section>


<br></br>
  </>
  );

}

export default Home;