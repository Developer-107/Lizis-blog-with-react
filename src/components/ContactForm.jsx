import mailIcon from "../assets/images/mail_275x202.jpeg"

function ContactForm (){
    const email = import.meta.env.VITE_EMAIL || "default@example.com";

    return(
                <section className="py-5 my-5 px-5 mx-5 ">
                    <div className="container px-4 px-lg-5 pt-5 px-5 py-5 my-5">
                    <div className="gx-4 gx-lg-5  justify-content-center">
                        <div className="row wrap-contact100 justify-content-center">
                        <div className="col-4 pt-5 mt-5">
                            <img src={mailIcon} alt="IMG"/>
                        </div>

                        <form action={`mailto:${email}`} method="post" encType="text/plain" className="col-4 validate-form text-center">
                            <h3>
                                Get in touch
                            </h3>

                            <div className=" py-3 validate-input" data-validate="Name is required">
                                <input className="input100 " type="text" name="name" placeholder="Name" required/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email"/>
                            </div>

                            <div className="py-3 wrap-input100 validate-input" data-validate="Message is required">
                                <textarea className="input100" name="message" placeholder="Message"></textarea>
                            </div>

                            
                                <button id="sendButton" className="btn btn-primary text-uppercase">
                                    Send
                                </button>
                            
                        </form>
                    </div>
                    </div>
                </div>

        </section>
    )
}

export default ContactForm;