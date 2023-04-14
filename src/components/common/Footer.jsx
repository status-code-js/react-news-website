import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="relative text-center sm:hidden">
                <img src="./assets/footer-pattern.svg" alt="" className="absolute top-0 left-1/2 -translate-x-2/4 -translate-y-[90%]" />
            </div>
            <div className="bg-color2 mt-14 sm:mt-4 px-4 py-10">
                <div className="flex sm:flex-col gap-y-4 justify-between items-center text-xs text-color1 max-w-7xl m-0 m-auto">
                    <div className="flex flex-col">
                        <ul className="flex flex-row gap-2.5">
                            <a className="ease-in-out duration-200 hover:opacity-80"><li>Terms of Service</li></a>
                            <a className="ease-in-out duration-200 hover:opacity-80"><li>Manage Cookies</li></a>
                            <a className="ease-in-out duration-200 hover:opacity-80"><li>Privacy Policy</li></a>
                        </ul>
                        <div>
                            <p className="leading-10">©2023 ImpulsPlus. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-6">
                        <a href="https://www.facebook.com/ImpulsPLUS" target="_blank" className="ease-in-out duration-200 hover:opacity-80"><img src="./assets/facebook-icon.png" alt="Facebook Icon"/></a>
                        <a href="https://www.instagram.com/grupoimpuls/"target="_blank" className="ease-in-out duration-200 hover:opacity-80"><img src="./assets/instagram-icon.png" alt="Instagram Icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;