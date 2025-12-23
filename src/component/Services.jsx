import SpecialItem from "./common/SpecialItem";
import Heading from "./common/Heading"

const Services = () => {
// const Services = ({ length }) => {
    return (
        <div className="Service">
            <div className="Service-content">
                <h1>Services</h1>
                <h3>Our Specialities</h3>
                <div className="Theline-between" style={{ width: "200px" }}></div>
            </div>
            {/* <Heading
                heading1="Services"
                heading2="Our Specialities"
                length="200px"
            /> */}
            <div>
                <div className="Specialities-box">
                    <SpecialItem imgSrc="https://demoxml.com/html/restaurant/assets/images/srv1.png" altText="Box Icon" heading="sandwich" />
                    <SpecialItem imgSrc="https://demoxml.com/html/restaurant/assets/images/srv2.png" altText="Box Icon" heading="Pizza" />
                    <SpecialItem imgSrc="https://demoxml.com/html/restaurant/assets/images/srv3.png" altText="Box Icon" heading="Chers trawberry" />
                    <SpecialItem imgSrc="https://demoxml.com/html/restaurant/assets/images/srv4.png" altText="Box Icon" heading="taco resipie" />
                </div>
            </div>
        </div>
    );
}
export default Services;