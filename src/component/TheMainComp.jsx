import FirstPht from "./FirstPht";
import AboutComp from "./AboutComp";
import PicComp from "./common/PicComp";
import Services from "./Services";
import Counters from "./Counters";
import Menu from "./Menu";
import BookingTable from "./BookingTable"
import LatestEvent from "./LatestEvent";
import CustomerReview from "./CustomerReview"
import News from "./News"
import LaterNews from "./LaterNews"
import Footer from "./Footer"
import Navbar from "./Navbar";

const TheMainComp = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <FirstPht />
      <AboutComp />
      <PicComp length="200px" />
      <Services length="200px" />
      <Counters />
      <Menu />
      <BookingTable length="200px" />
      <LatestEvent length="200px" />
      <CustomerReview length="200px" />
      <News length="200px" />
      <LaterNews />
      {/* <Footer /> */}
    </div>
  )
};

export default TheMainComp;