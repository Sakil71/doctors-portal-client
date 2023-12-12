import React from 'react';
import { Link } from 'react-router-dom';
import footerBackground from '../../../assets/images/footer.png';
import { format } from 'date-fns';

const Footer = () => {
    return (
        <div style={{ background: `url(${footerBackground})` }}>
            <footer className="footer p-10 text-base-content grid grid-cols-2 md:grid-cols-3" >
                <nav>
                    <header className="footer-title">Services</header>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
                <p className='text-center font-medium'><small>Copyright {format(new Date(), 'yyyy')} All Rights Reserved</small></p>
        </div>
    );
};

export default Footer;