import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-content">
                <div className="Footer-section">
                    <div className="Footer-heading">About Us</div>
                    <div className="Theline" style={{ width: "100px" }}></div>
                    <div className="About-content">
                        <p>The Love Boat soon will be making an other run. The Love Boat prompt mises some to thing for everyone. our Speed Racer. Going Speed Racer to best.</p>
                        <a href="https://www.facebook.com/" className="Links">
                            <FaFacebookF /></a>
                        <a href="https://x.com/" className="Links"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/" className="Links"><FaLinkedinIn /></a>
                        <a href="https://www.pinterest.com/" className="Links"><FaPinterest /></a>
                    </div>
                </div>
                <div className="Link-section">
                    <div className="Footer-heading">Quick Links</div>
                    <div className="Theline" style={{ width: "100px" }}></div>
                    <div className="Link-content">
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/">Menu</a></li>
                            <li><Link to="/About">About</Link></li>
                            <li><a href="/">Menu</a></li>
                            <li><Link to="/Account">Account</Link></li> */}
                            <li>Home</li>
                            <li>Menu</li>
                            <li>About</li>
                            <li>Latest Event</li>
                            <li>Account</li>
                        </ul>
                    </div>
                </div>
                <div className="Working-section">
                    <div className="Footer-heading">Working Time</div>
                    <div className="Theline" style={{ width: "100px" }}></div>
                    {/* <div className="Working-content">
                        <ul>
                            <li>Monday - Tuesday <span>-----</span> <span>09:00 - 22:00</span></li>
                            <li>Wednesday <span>-----</span> <span>09:00 - 20:00</span></li>
                            <li>Thursday - Friday <span>-----</span> <span>10:00 - 20:00</span></li>
                            <li>Saturday <span>-----</span> <span>10:00 - 20:00</span></li>
                            <li>Sunday <span>-----</span> <span>12:00 - 00:00</span></li>
                            <li>Public holiday <span>-----</span> <span>closed</span></li>
                        </ul>
                    </div> */}
                    <table>
                        <tbody><tr>
                            <td>Monday - Tuesday</td>
                            <td>------ 09.00 - 22.00</td>
                        </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>------ 08.30 - 20.30</td>
                            </tr>
                            <tr>
                                <td>Thursday - Friday</td>
                                <td>------ 09.45 - 19.55</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>------ 10.00 - 20.45</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>------ 08.00 - 19.10</td>
                            </tr>
                            <tr>
                                <td>Public Holidays</td>
                                <td>------ Closed</td>
                            </tr>
                        </tbody></table>
                </div>
                <div className="Category-section">
                    <div className="Footer-heading">Menu Categories</div>
                    <div className="Theline" style={{ width: "100px" }}></div>
                    <div className="categorie-content">
                        <ul>
                            <li>APPETIZERS</li>
                            <li>BREAKFAST</li>
                            <li>LUNCH</li>
                            <li>DINNER</li>
                            <li>MEAT & FISH</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Last-line">
                <div className="Last-para">© Copyrights 2025- All Rights Reserved</div>
            </div>

            {/* <div className='Footer-main'>
                <div className='Footer-content'>
                    <div className='First-content'>
                        <h2 className='fotter-heading'>ABOUT US</h2>
                        <div className='Line'></div>
                        <p>The Love Boat soon will be making an other run. The Love Boat prompt mises some to thing for everyone. our Speed Racer. Going Speed Racer to best.</p>
                        <a className='All-Ancher' href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a className='All-Ancher' href='https://x.com/' title="twitter" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className='All-Ancher' href="https://www.linkedin.com/" title="Linkedin" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a className='All-Ancher' href="https://www.pinterest.com/" title="Pinterest" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-pinterest"></i>
                        </a>
                    </div>
                    <div
                        className='Second-content'>
                        <h2 className='fotter-heading'>Quick Links</h2>
                        <div className='Line'></div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>
                                <a href="/">
                                    Menu
                                </a></li>
                            <li><Link to="/About">About</Link></li>
                            <li>
                                <a href="/">
                                    Latest Event
                                </a></li>
                            <li>
                                <Link to="/Account">Account</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='THIRD-content'>
                        <h2 className='fotter-heading'>WORKING TIME</h2>
                        <div className='Line'></div>
                        <table>
                            <tbody><tr>
                                <td>Monday - Tuesday</td>
                                <td>------ 09.00 - 22.00</td>
                            </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>------ 08.30 - 20.30</td>
                                </tr>
                                <tr>
                                    <td>Thursday - Friday</td>
                                    <td>------ 09.45 - 19.55</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>------ 10.00 - 20.45</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>------ 08.00 - 19.10</td>
                                </tr>
                                <tr>
                                    <td>Public Holidays</td>
                                    <td>------ Closed</td>
                                </tr>
                            </tbody></table>
                    </div>
                    <div className='Forth-content'>
                        <h2 className='fotter-heading'>MENU CATEGORIES</h2>
                        <div className='Line'></div>
                        <ul>
                            <li>APPETIZERS</li>
                            <li>BREAKFAST</li>
                            <li>LUNCH</li>
                            <li>DINNER</li>
                            <li>MEAT & FISH</li>
                        </ul>
                    </div>
                </div>
            </div> */}


        </div>
    )
}

export default Footer