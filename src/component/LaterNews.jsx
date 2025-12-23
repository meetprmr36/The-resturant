// import Button from "./common/Button"

const LaterNews = () => {
    return (
        <div className="LaterNews">
            <div className="overlay"></div>
            <div className="Later-content">
                {/* <div className="Later-Name">
                    <h1>News Letter</h1>
                </div>
                <div className="Later-Desc">
                    <p>Sign up with your email to get updates fresh updates about our events</p>
                </div>
                <div className="Later-SignUp"></div> */}
                <div className="Cotain">
                    <h1 className="Later-heading">News Letter</h1>
                    <p className="Later-Para"> Sign up with your email to get updates fresh updates about our events</p>
                    <form className="Form-News">
                        <div className="Input-Group">
                            <input autoComplete="email" className="Form-control" placeholder="Enter Your Email Address" type="email" name="email" />
                            <span className="Input-Group-Btn">
                                <button className="SignUp">Sign Up</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LaterNews