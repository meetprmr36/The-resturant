import Heading from "./common/Heading"

const CustomerReview = ({ length }) => {
    return (
        <div className="CustomerReviews">
            <div className="overlay"></div>
            <div className="Review-content">
                <div className="Review-header">
                <h1>Our Customer Says</h1>
                <h3>TESTIMONIALS</h3>
                <div className="Theline-between" style={{ width: length }}></div>
                </div>
                {/* <Heading
                    heading1="Our Customer Says"
                    heading2="Testimonials"
                    length="200px"
                /> */}
                <p>These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.</p>
                <img alt="Dash" src="https://demoxml.com/html/restaurant/assets/images/quote.png"></img>
                <h2>- Jhone Dheve</h2>
            </div>
        </div>
    )
}

export default CustomerReview