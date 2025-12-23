import EventBox from "./common/EventBox"
import Heading from "./common/Heading"

const LatestEvent = ({ length }) => {
    return (
        <div className="latestEvent">
            <div className="Event-content">
                <div className="Event-Header">
                    <h1>Latest Events</h1>
                    <h3>DO NOT MISS</h3>
                    <div className="Theline-between" style={{ width: length }}></div>
                </div>
                {/* <Heading
                    heading1="Latest Events"
                    heading2="Do not miss"
                    length="200px"
                /> */}
                <div className="Event-boxes">
                    <EventBox
                        Heading="Daily Special Foods Specifically For Your Health"
                        Description="Michael Knight a young loner on a crusade to champion the cause of the innocent."
                        ImageLink="https://demoxml.com/html/restaurant/assets/images/event1.jpg"
                    />
                    <EventBox
                        Heading="The Spiecialy Chicken Fry With RiceFood"
                        Description="Michael Knight a young loner on a crusade to champion the cause of the innocent."
                        ImageLink="https://demoxml.com/html/restaurant/assets/images/event2.jpg"
                    />
                    <EventBox
                        Heading="Drinks With GarnishFried Tomato Chosey"
                        Description="Michael Knight a young loner on a crusade to champion the cause of the innocent."
                        ImageLink="https://demoxml.com/html/restaurant/assets/images/event3.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default LatestEvent