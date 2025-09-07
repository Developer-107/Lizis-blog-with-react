import PostForm from "../components/PostForm"


function Post(){
    return(

        <>
        <section id="Blogs" className="py-5 my-5 px-5 mx-5">
        <div className="container px-4 px-lg-5 pt-5 px-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7 w-75">
        <PostForm />
        </div>
        </div>
        </div>
        </section>
    <br/>
        </>


    )

}

export default Post;