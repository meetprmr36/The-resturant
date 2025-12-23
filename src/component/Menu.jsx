import Dish from "./Dish"
import Heading from "./common/Heading"

const Menu = () => {
    return (
        <div className="Whole-menu">
            <div className="Menu-container">
                <div className="Top-img">
                    <img src="https://demoxml.com/html/restaurant/assets/images/menu-card1.png"></img>
                </div>
                <div className="Bottom-img">
                    <img src="https://demoxml.com/html/restaurant/assets/images/menu-card2.png"></img>
                </div>
                <div className="Menu-content">
                    <h1>This Week Special</h1>
                    <h3>Menu card</h3>
                    <div className="Menu-line" style={{ width: "200px" }}></div>
                </div>
                {/* <Heading
                    heading1="This Week Special"
                    heading2="Menu card"
                    length="200px"
                /> */}
                {/* <div className="Menu-dishs"> */}
                <div className="Menu-row">
                    <Dish Name="pork shrimp multigrain" Price="$55" image="https://demoxml.com/html/restaurant/assets/images/menu1.jpg" />
                    <Dish Name="chicken bbq delight" Price="$55" image="https://demoxml.com/html/restaurant/assets/images/menu2.jpg" />
                </div>
                <div className="Menu-row">
                    <Dish Name="VEGITABLE TOMAT MIXERFROOT" Price="$59" image="https://demoxml.com/html/restaurant/assets/images/menu3.jpg" />
                    <Dish Name="VEGITABLE TOMAT MIXERFROOT" Price="$59" image="https://demoxml.com/html/restaurant/assets/images/menu4.jpg" />
                </div>
                <div className="Menu-row">
                    <Dish Name="TACO RESIPIE WITH OF SLIZER" Price="$43" image="https://demoxml.com/html/restaurant/assets/images/menu5.jpg" />
                    <Dish Name="TACO RESIPIE WITH OF SLIZER" Price="$43" image="https://demoxml.com/html/restaurant/assets/images/menu6.jpg" />
                </div>
                <div className="Menu-row">
                    <Dish Name="strawberry bimixed fruite" Price="$39" image="https://demoxml.com/html/restaurant/assets/images/menu7.jpg" />
                    <Dish Name="strawberry bimixed fruite" Price="$39" image="https://demoxml.com/html/restaurant/assets/images/menu8.jpg" />
                </div>
                <div className="Menu-row">
                    <Dish Name="EGG VEGITABLE FRUITE SALENTE" Price="$23" image="https://demoxml.com/html/restaurant/assets/images/menu9.jpg" />
                    <Dish Name="EGG VEGITABLE FRUITE SALENTE" Price="$23" image="https://demoxml.com/html/restaurant/assets/images/menu10.jpg" />
                </div>
                {/* <div className="Menu-row">
                        <Dish Name="pork shrimp multigrain" Price="$55" image="https://demoxml.com/html/restaurant/assets/images/menu1.jpg" />
                        <Dish Name="chicken bbq delight" Price="$55" image="https://demoxml.com/html/restaurant/assets/images/menu2.jpg" />
                    </div>
                    <div className="Menu-row">
                        <Dish Name="vegitable tomat mixerfroot" Price="$59" image="https://demoxml.com/html/restaurant/assets/images/menu3.jpg" />
                        <Dish Name="vegitable pizza" Price="$59" image="https://demoxml.com/html/restaurant/assets/images/menu4.jpg" />
                    </div>
                    <div className="Menu-row">
                        <Dish Name="taco resipine with slizer" Price="$43" image="https://demoxml.com/html/restaurant/assets/images/menu5.jpg" />
                        <Dish Name="chiken drum sticks" Price="$43" image="https://demoxml.com/html/restaurant/assets/images/menu6.jpg" />
                    </div>
                    <div className="Menu-row">
                        <Dish Name="strawberry bimixed fruite" Price="$39" image="https://demoxml.com/html/restaurant/assets/images/menu7.jpg" />
                        <Dish Name="strawberry bimixed fruite" Price="$39" image="https://demoxml.com/html/restaurant/assets/images/menu8.jpg" />
                    </div>
                    <div className="Menu-row">
                        <Dish Name="Egg vegitable salente" Price="$23" image="https://demoxml.com/html/restaurant/assets/images/menu9.jpg" />
                        <Dish Name="Coffee with Icecreame" Price="$23" image="https://demoxml.com/html/restaurant/assets/images/menu10.jpg" />
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Menu;    