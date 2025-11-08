import { Link } from "react-router-dom";

import BoldoLogoBlack from '../assets/images/BoldoLogoBlack.png'
import NewsLetter from "./NewsLetter";

export default function Footer(){
    return (
        <section className="bg-white">
            <div className="space-y-12 w-11/12 mx-auto">
                <NewsLetter />

                <footer className="py-24">
                    <div className="flex gap-26">
                        <div className="flex flex-col gap-6 md:w-[24%]">
                            <div>
                                <img src={BoldoLogoBlack} alt="Boldo Logo Black" />
                            </div>

                            <p className="text-base text-[rgba(119,119,119,1)]">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                        </div>

                        <div className="md:w-[50%] flex justify-between gap-4">
                            <div className="space-y-6">
                                <div className="text-xl font-bold text-[rgba(0,0,0,1)] leading-8">
                                    Landings
                                </div>
                                <ul className="flex flex-col gap-6">
                                    <li><Link to="" className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8 ">Home</Link></li>
                                    <li><Link to="" className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8 ">Products</Link></li>
                                    <li><Link to="" className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8 ">Services</Link></li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <div className="text-xl font-bold text-[rgba(0,0,0,1)] leading-8">
                                    Company
                                </div>
                                <ul className="flex flex-col gap-6">
                                    <li><Link to="" className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8 ">Home</Link></li>
                                    <li><Link to="" className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8 ">Careers <span className="bg-[rgba(101,228,163,1)] text-[13px] font-bold leading-7 text-[rgba(10,38,64,1)] py-1 px-3.5 rounded-full">Hiring</span></Link></li>
                                    <li><Link to="" className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8 ">Services</Link></li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <div className="text-xl font-bold text-[rgba(0,0,0,1)] leading-8">
                                    Resources
                                </div>
                                <ul className="flex flex-col gap-6">
                                    <li><Link to="" className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8 ">Blog</Link></li>
                                    <li><Link to="" className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8 ">Products</Link></li>
                                    <li><Link to="" className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8 ">Services</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-base leading-7 text-[rgba(119,119,119,1)]">
                        All rights reserved.
                    </div>
                </footer>
            </div>
        </section>
    )
}