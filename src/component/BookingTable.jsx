import Button from "./common/Button"
import Heading from "./common/Heading"

const BookingTable = ({ length }) => {
    return (
        <div className="BookTable">
            <div className="overlay"></div>
            <div className="Table-content">
                <div className="Table-Header">
                    <h1>Book Your Table</h1>
                    <h3>MAKE A RESERVATION</h3>
                    <div className="Theline-between" style={{ width: length }}></div>
                </div>
                <div className="Theform">
                    <div className="Table-input">
                        <input
                            placeholder="Name *"
                            autoComplete="name"
                            type="text"
                            id="Name"
                        ></input>
                        <input
                            placeholder="Phone Number *"
                            type="tel"
                            pattern="[0-9]"
                            maxLength={10}
                            autoComplete="tel"
                            id="phone-number"
                        ></input>
                    </div>
                    <div className="Table-input">
                        <input
                            placeholder="Table for how many people *"
                            type="number"
                            min={1}
                            max={10}
                            id="Table-person"
                        ></input>
                        <input
                            placeholder="Phone Number *"
                            type="date"
                            id="date"
                        ></input>
                    </div>
                    <div className="reservation">
                        <button className="TheButton">Reserve</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingTable