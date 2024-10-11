import React from "react";
import '../../components/Footbar/Footer.css'
import fb from '../../assets/facebook.png';
import github from '../../assets/github-sign.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>For Bussiness</h4>
                        <a href="/employer">
                            <p>WhatsApp</p>
                        </a>
                        <a href="/healthplan">
                            <p>Healt Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Resources</h4>
                        <a href="https://github.com/Iamwillypieter/wj">
                            <p>Github</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Partner</h4>
                        <a href="/employer">
                            <p>RelationShip</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Follow Us</h4>
                        <div className="socialmedia">
                            <p><a 
                                href="https://web.facebook.com/willy.pietersitumorang/"
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={fb} alt="" />
                                </a>
                            </p>
                            <p><a 
                                href="https://github.com/Iamwillypieter/"
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={github} alt="" />
                                </a>
                            </p>
                            <p><a 
                                href="https://www.linkedin.com/in/willy-pieter-julius-situmorang-109330233/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" />
                                </a>
                            </p>
                            <p><a 
                                href="https://www.instagram.com/iamwillypieter/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={instagram} alt="" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} WJ Delivery. All right reserved
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Term & Condition</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;