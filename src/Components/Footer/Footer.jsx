import React from "react";
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
    return <div className="footer">
        <div className="footer-logo">
            <img src={ footer_logo } alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>ABout</li>
            <li>Contact</li>

        </ul>
        <div class="footer-social-icon">
            <div class="footer-icons-container">
                <img src={ instagram_icon } alt="" />
            </div>
            <div class="footer-icons-container">
                <img src={ pintester_icon } alt="" />
            </div>
            <div class="footer-icons-container">
                <img src={ whatsapp_icon } alt="" />
            </div>
        </div>
        <hr />

        <div class="footer-copyright">
            <p>Copyright @ 2023 -All Right Reserved</p>
        </div>
    </div>;
};

export default Footer;
