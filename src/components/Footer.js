import React from 'react';
import './Footer.css';
import { LocationSharp, Call, MailUnreadSharp, LogoInstagram, LogoFacebook, LogoTwitter, ChevronForwardSharp } from 'react-ionicons';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="section footer-top bg-dark has-bg-image" style={{ backgroundImage: "url('/images/footer-bg.png')" }}>
                <div className="container">

                    <div className="footer-brand">

                        <a href="#" className="logo">
                            <im src='/images/logo.jpg' alt='logo' />
                        </a>

                        <p className="footer-brand-text">
                            Elevate your fitness journey with Fitlife. Our expert trainers and state-of-the-art facilities are here to support you every step of the way.
                        </p>

                        <div className="wrapper">

                            <img src="/images/footer-clock.png" width="34" height="34" loading="lazy" alt="Clock" />

                            <ul className="footer-brand-list">

                                <li>
                                    <p className="footer-brand-title">Monday - Friday</p>
                                    <p>7:00 AM - 10:00 PM</p>
                                </li>

                                <li>
                                    <p className="footer-brand-title">Saturday - Sunday</p>
                                    <p>7:00 AM - 2:00 PM</p>
                                </li>

                            </ul>

                        </div>

                    </div>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title has-before">Our Links</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Home</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">About Us</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Classes</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Blog</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Contact Us</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title has-before">Contact Us</p>
                        </li>

                        <li className="footer-list-item">
                            <div className="icon">
                                <LocationSharp
                                    color={'#ffffff'}
                                    height="24px"
                                    width="24px"
                                    aria-hidden="true" role="img" className="md hydrated"
                                />

                            </div>

                            <address className="address footer-link">
                                European University of Lefke
                            </address>
                        </li>

                        <li className="footer-list-item">
                            <div className="icon">
                                <Call
                                    color={'#ffffff'}
                                    height="24px"
                                    width="24px"
                                    aria-hidden="true" role="img" className="md hydrated"
                                />
                            </div>

                            <div>
                                <a href="tel:18001213637" className="footer-link">+90 533 850 2322</a>
                                <a href="tel:+915552348765" className="footer-link">+90 533 850 2322</a>
                            </div>
                        </li>

                        <li className="footer-list-item">
                            <div className="icon">
                                <MailUnreadSharp
                                    color={'#ffffff'}
                                    height="24px"
                                    width="24px"
                                    aria-hidden="true" role="img" className="md hydrated"
                                />
                            </div>

                            <div>
                                <a href="mailto:hnengare@gmail.com" className="footer-link">hnengare@gmail.com</a>
                                <a href="mailto:hilsCyber@gmail.com" className="footer-link">hilsCyber@gmail.com</a>
                            </div>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title has-before">Our Newsletter</p>
                        </li>

                        <li>
                            <form action="" className="footer-form">
                                <input type="email" name="email_address" aria-label="email" placeholder="Email Address" required className="input-field" />
                                <button type="submit" className="btn btn-primary mail" aria-label="Submit">
                                    <ChevronForwardSharp
                                        color={'#ffffff'}
                                        height="24px"
                                        width="24px"
                                        role="img" className="md hydrated"
                                    />
                                </button>
                            </form>
                        </li>

                        <li>
                            <ul className="social-list">

                                <li>
                                    <a href="#" className="social-link">
                                        <LogoFacebook
                                            color={'#ffffff'}
                                            height="24px"
                                            width="24px"
                                            role="img" className="md hydrated" aria-label="logo facebook"
                                        />


                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <LogoInstagram
                                            color={'#ffffff'}
                                            height="24px"
                                            width="24px"
                                            role="img" className="md hydrated" aria-label="logo instagram"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <LogoTwitter
                                            color={'#ffffff'}
                                            height="24px"
                                            width="24px"
                                            role="img" className="md hydrated" aria-label="logo twitter"
                                        />
                                    </a>
                                </li>

                            </ul>
                        </li>

                    </ul>

                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">

                    <p className="copyright">
                        © 2023 i-Fit All Rights Reserved By <a href="#" className="copyright-link">Hilario Nengare Jr.</a>
                    </p>

                    <ul className="footer-bottom-list">

                        <li>
                            <a href="#" className="footer-bottom-link has-before">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#" className="footer-bottom-link has-before">Terms & Condition</a>
                        </li>

                    </ul>

                </div>
            </div>

        </footer>
    );
}

export default Footer;
