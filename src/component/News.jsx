// import { IoLocationSharp } from "react-icons/io5";
import Heading from "./common/Heading";

const News = ({ length }) => {
    return (
        <div className="LatestNews">
            <div className="News-content">
                <div className="News-Header">
                    <h1>Our Latest News</h1>
                    <h3>BLOG</h3>
                    <div className="Theline-between" style={{ width: length }}></div>
                </div>
                {/* <Heading
                    heading1="Our Latest News"
                    heading2="Blog"
                    length="200px"
                /> */}
                <div className="News">
                    <div className="News-Box">
                        <img src="https://demoxml.com/html/restaurant/assets/images/latest-post1.jpg" alt="News" />
                        <div className="whole-news">
                            <div className="News-date">
                                <div className="Date">01 <span>June</span>
                                </div>
                            </div>
                            <div className="News-description">
                                <h2>We Are Best Quality serve Restaurant</h2>
                                <span><i class="fa fa-map-marker"></i>121th Street, Sidney VIC 3000</span>
                                <p>The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. All of them had hair of gold like their mother the youngest one in curls. Come and play.......</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="News-Box">
                        <img src="https://demoxml.com/html/restaurant/assets/images/latest-post2.jpg" alt="News" />
                        <div className="whole-news">
                            <div className="News-date">
                                <div className="Date">11 <span>July</span>
                                </div>
                            </div>
                            <div className="News-description">
                                <h2>Special grilled recipe, perfectly restaurant ready.</h2>
                                <span><i class="fa fa-map-marker"></i>121th Street, Sidney VIC 3000</span>
                                <p>The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. All of them had hair of gold like their mother the youngest one in curls. Come and play.......</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default News