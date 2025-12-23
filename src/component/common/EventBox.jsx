import { FaRegClock } from "react-icons/fa";
import Button from "./Button"


const EventBox = ({ Heading, Description, ImageLink }) => {
    return (
        <div className="Theboxes">
            <div className="Boxes-content">
                <img src={ImageLink} />
                <div className="TheOverlay">
                    <h4>{Heading}</h4>
                    <div className="Boxline-between"></div>
                    <p>{Description}</p>
                    <span className="Time-span"><i class="fa fa-clock-o"></i>&nbsp; Posted Dec 20,2016 10:23 am</span>
                    <div className="Box-button">
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventBox