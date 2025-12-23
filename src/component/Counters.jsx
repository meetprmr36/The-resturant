import CounterComponents from "./CounterComponents";
import Heading from "./common/Heading"
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";


const Counters = () => {
    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || startCount) return;

            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                setStartCount(true);
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [startCount]);

    return (
        <div className="Counter-comp" >
            <div className="overlay"></div>
            <div className="counter-comp-content">
                <div className="TheCountContent">
                    <h1>Counters</h1>
                    <h3>We Are Delicious Restaurant</h3>
                    <div className="Counter-Line-Between" style={{ width: "200px" }}></div>
                    <div className="Counter-img">
                        <img alt="Surprise" src="https://demoxml.com/html/restaurant/assets/images/counter-ic3.png"></img>
                    </div>
                </div>
                <div className="Thecounter">
                    <div className="Counter-Row" ref={sectionRef}>
                        {/* <CounterComponents
                            Count={"4,372"}
                            Image={"https://demoxml.com/html/restaurant/assets/images/counter-ic1.png"}
                            Label="Chicken Served" />
                        <CounterComponents
                            Count={"3,795"}
                            Image={"https://demoxml.com/html/restaurant/assets/images/counter-ic2.png"}
                            Label="Fish Fried" />
                        <CounterComponents
                            Count={394}
                            Image={"https://demoxml.com/html/restaurant/assets/images/counter-ic3.png"}
                            Label="Our chefs special" />
                        <CounterComponents
                            Count={"1,678"}
                            Image={"https://demoxml.com/html/restaurant/assets/images/counter-ic4.png"}
                            Label="OUR CHEFS SPECIAL" /> */}
                        <div className="Counter-box">
                            <div className="Count-content">
                                <img src="https://demoxml.com/html/restaurant/assets/images/counter-ic1.png" alt="Counter" />
                                <h1>{startCount ? <CountUp end={4372} duration={4} /> : 0}</h1>
                                <p>Chicken Served</p>
                            </div>
                        </div>
                        <div className="Counter-box">
                            <div className="Count-content">
                                <img src="https://demoxml.com/html/restaurant/assets/images/counter-ic2.png" alt="Counter" />
                                <h1>{startCount ? <CountUp end={3795} duration={4} /> : 0}</h1>
                                <p>Fish Fried</p>
                            </div>
                        </div>
                        <div className="Counter-box">
                            <div className="Count-content">
                                <img src="https://demoxml.com/html/restaurant/assets/images/counter-ic3.png" alt="Counter" />
                                <h1>{startCount ? <CountUp end={394} duration={4} /> : 0}</h1>
                                <p>Chefs special</p>
                                {/* <p>Our Chefs special</p> */}
                            </div>
                        </div>
                        <div className="Counter-box">
                            <div className="Count-content">
                                <img src="https://demoxml.com/html/restaurant/assets/images/counter-ic4.png" alt="Counter" />
                                <h1>{startCount ? <CountUp end={1678} duration={4} /> : 0}</h1>
                                {/* <p>Our Chefs special</p> */}
                                <p>Chefs special</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counters;