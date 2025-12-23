import AboutWelcome from "../component/AboutWelcome"
import KitchenVdo from "../component/AbtVideo"
import AbtSection from "../component/AbtSection"
import AbtRevSection from "../component/AbtRevSection"
import AbtOffer from "../component/AbtOffer"
import AbtKitchen from "../component/AbtKitchen"
import AbtCustomer from "../component/AbtCustomer"
import AbtBookTable from "../component/AbtBookTable"

const About = () => {
    return (
        <div className="AbtPage">
            <AboutWelcome />
            <KitchenVdo />
            <AbtSection />
            <AbtRevSection />
            <AbtOffer />
            <AbtKitchen />
            <AbtCustomer />
            <AbtBookTable />
        </div>
    )
}

export default About