// import React from 'react';
import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content max-w-7xl mx-auto py-8 px-8">
                <aside>

                    <img
                        src={logo}
                        alt=""
                        className="w-32 h-12 object-contain"
                    />

                    <p>
                        Cureted tools, technologies, and resources for developers building
                        <br />
                        modern software
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="text-[#475569] hover:text-black">
                            GitHub

                        </a>
                        <a
                            href="https://x.com/"

                            target="_blank"
                            className="text-[#475569] hover:text-black">
                            Twitter

                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="text-[#475569] hover:text-black">
                            Linkedin

                        </a>

                    </div>
                </aside>

                <nav>
                    <h6 className="footer-title">PRODUCT</h6>
                    <a className="link link-hover ">Home</a>
                    <a className="link link-hover ">Technology</a>
                    <a className="link link-hover ">Projects</a>


                </nav>
                <nav>
                    <h6 className="footer-title">COMPANY</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>

                </nav>
                <nav>
                    <h6 className="footer-title">LAGAL</h6>
                    <a className="link link-hover">Terms of Services</a>
                    <a className="link link-hover">Privacy policy</a>

                </nav>
            </footer>
            {/* bottom section */}

            <footer className="bg-base-200 border-t border-base-300 mt-14 max-w-7xl mx-auto px-10 py-5 flex justify-between">
               

                    <p>Copyright © {new Date().getFullYear()} - All right reserved

                    </p>

                    <div className="flex gap-6">
                        <a 
                        href="#"
                        className="text-sm text-stone-500 hover:text-black"
                        >
                            Privacy

                        </a>
                        <a 
                        href="#"
                        className="text-sm text-stone-500 hover:text-black"
                        >
                            Terms

                        </a>

                    </div>
      
            </footer>
        </div>
    );
};

export default Footer;