import Footer from "../components/Footer";
import Hero from "../components/hero";
import NavBar from "../components/navbar";

import BlogImage1 from '../assets/images/blogimg1.png'
import FAQImage from '../assets/images/FAQimg.png'
import WhyUsImage1 from '../assets/images/whyUsimg1.png'
import WhyUsImage2 from '../assets/images/whyUsimg2.jpg'
import ApproachImage1 from '../assets/images/approachImg1.png'
import ApproachImage2 from '../assets/images/approachImg2.jpg'


import { ArrowRight, Check, ChevronDown, Eye, Feather, Sun } from "lucide-react";
import Button from "../ui/Button";

export default function Home(){
    const faqs = [

        {
            question: "We connect our customers with the best?",
            description: "Yes, we carefully match our customers with top-quality service providers that meet their specific needs.",
        },
        {
            question: "Android research & development rockstar?",
            description: "Our Android team constantly innovates to deliver high-performance mobile solutions that exceed expectations.",
        },
    ];

    return(
        <div>
            {/* Header */}
            <Hero />
            <div>
                hello
            </div>

            {/* Main */}
            <main className="space-y-12">
                {/* Our Services */}
                <section>
                    <div className="space-y-12 py-20">
                        <div className="w-8/12 mx-auto text-center">
                            <h5 className="text-xl text-[rgba(119,119,119,1)] font-sans leading-8">Our Services</h5>
                            <h2 className="text-5xl text-[rgba(0,0,0,1)] font-manrope font-normal leading-18">Handshake infographic mass market crowdfunding iteration.</h2>
                        </div>

                        <div className="w-10/12 mx-auto flex justify-between gap-8">
                            {[1, 2, 3].map((blog, index) => (
                            <div key={index} className="space-y-6 w-[300px]">
                                {/* Image container */}
                                <div
                                    className="w-[300px] h-auto rounded-2xl overflow-hidden"
                                    >
                                    <img
                                    src={BlogImage1}
                                    alt="Service Thumbnail"
                                    className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <div className="space-y-1">
                                        <div className="text-2xl leading-9 text-[rgba(0,0,0,1)]">
                                            Cool feature title
                                        </div>

                                        <div className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8">
                                            Learning curve network effects return on investment.
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <a href="#" className="flex items-center gap-4 text-xl text-[rgba(10,38,64,1)] font-bold leading-9 border-b-2 border-[rgba(10,38,64,1)] py-2">Explore page <ArrowRight /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>

                {/* WHY US  */}
                <section>
                    <div className="space-y-8 w-10/12 mx-auto">
                        <div className="flex justify-between items-center gap-36 ">
                            <div>
                            <div className="relative flex-1 rounded-3xl">
                                    {/* Bottom image */}
                                    <img
                                        src={WhyUsImage1}
                                        alt="Why Us Image 1"
                                        className="object-cover rounded-3xl"
                                    />

                                    {/* Top image */}
                                    <img
                                        src={WhyUsImage2}
                                        alt="Why Us Image 2"
                                        className="absolute left-1/2 top-[200px] object-cover rounded-3xl shadow-lg -translate-x-1/2"
                                    />
                                </div>
                            </div>

                            <div className="space-y-14 flex-1">
                                <h3 className="text-4xl leading-14">We connect our customers with the best, and help them keep up-and stay open.</h3>

                                <div className="flex flex-col gap-6">
                                    {[
                                        "We connect our customers with the best.",
                                        "Advisor success customer launch party.",
                                        "Business-to-consumer long tail."
                                    ].map((whyUs, index) => (
                                        <div key={index} className="text-xl leading-8 flex items-center gap-4">
                                            <span className="p-1 rounded-full bg-[rgba(10,38,64,1)] text-[rgba(255,255,255,1)]"><Check className="w-4 h-4" /></span>
                                            {whyUs}
                                        </div>
                                    ))
                                    }
                                </div>

                                <Button>Start Now</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Approach  */}
                <section>
                    <div className="space-y-8 w-10/12 mx-auto">
                        <div className="flex flex-row-reverse justify-between items-center gap-36 ">
                            <div>
                            <div className="relative flex-1 rounded-3xl">
                                    {/* Bottom image */}
                                    <img
                                        src={ApproachImage1}
                                        alt="Approach Image 1"
                                        className="object-cover rounded-3xl"
                                    />

                                    {/* Top image */}
                                    <img
                                        src={ApproachImage2}
                                        alt="Approach Image 2"
                                        className="absolute left-1/2 top-80 object-cover rounded-xl shadow-lg -translate-x-1/2"
                                    />
                                </div>
                            </div>

                            <div className="space-y-14 flex-1">
                                <h3 className="text-4xl leading-14">We connect our customers with the best, and help them keep up-and stay open.</h3>

                                <div className="flex flex-col gap-6">
                                    {[{
                                        heading: "We connect our customers with the best.",
                                        icon: Feather
                                    },
                                    {
                                        heading: "Advisor success customer launch party.",
                                        icon: Eye
                                    },
                                    {
                                        heading: "Business-to-consumer long tail.",
                                        icon: Sun
                                    },

                                    ].map((approach, index) => (
                                        <div key={index} className={`${index === 0 ? "text-[rgba(255,255,255,1)] bg-[rgba(10,38,64,1)]" : "text-[rgba(10,38,64,1)] bg-[rgba(255,255,255,1)]" } text-base font-semibold rounded-sm leading-7 flex items-center gap-4 p-6`}>
                                            <approach.icon className="w-5 h-5" />
                                            {approach.heading}
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                { /* FAQ */}
                <section>
                    <div className="space-y-8 w-10/12 mx-auto">
                        <div className="w-full h-auto rounded-4xl">
                            <img src={FAQImage} alt="FAQ Image" className="w-full h-full object-contain rounded-4xl" />
                        </div>

                        <div className="flex justify-between items-stretch gap-36">
                            <h4 className="text-4xl leading-snug flex-1">
                                We connect our customers with the best, and help them keep up-and stay open.
                            </h4>

                            <div className="w-8/12 space-y-4 flex-1">
                                {faqs.map((faq, index) => (
                                    <div
                                    key={index}
                                    className="border-b border-[rgba(196,196,196,1)] py-4 group cursor-pointer"
                                    >
                                    {/* Question */}
                                    <button className="w-full flex items-center justify-between text-left text-xl gap-4">
                                        <span>{faq.question}</span>
                                        <span className="p-1 rounded-full text-white bg-[rgba(10,38,64,1)] group-hover:rotate-180 transition-transform duration-300">
                                        <ChevronDown className="w-4 h-4" />
                                        </span>
                                    </button>

                                    {/* Answer (hidden by default, visible on hover) */}
                                    <p className="text-[rgba(119,119,119,1)] text-base mt-2 hidden group-hover:block transition-all duration-300">
                                        {faq.description}
                                    </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our blog */}
                <section>
                    <div className="space-y-12 py-20">
                        <div className="w-8/12 mx-auto text-center">
                            <h5 className="text-xl text-[rgba(119,119,119,1)] font-sans leading-8">Our Blog</h5>
                            <h2 className="text-5xl text-[rgba(0,0,0,1)] font-manrope font-normal leading-18">Value proposition accelerator product management venture</h2>
                        </div>

                        <div className="w-8/12 mx-auto flex gap-8">
                            {[1, 2, 3].map((blog, index) => (
                            <div key={index} className="space-y-6">
                                {/* Image container */}
                                <div
                                    className="w-[290px] h-[200px] rounded-2xl overflow-hidden"
                                    >
                                    <img
                                    src={BlogImage1}
                                    alt="Blog Thumbnail"
                                    className="w-full h-full object-cover object-[center_30%]"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-12">
                                    <div className="space-y-2">
                                        <div className="flex gap-4 text-base leading-7 text-[rgba(119,119,119,1)]">
                                            <span className="text-[rgba(10,38,64,1)] font-bold">Category</span>{" "}
                                            November 22, 2021
                                        </div>

                                        <div className="text-xl text-[rgba(0,0,0,1)] leading-8">
                                            Pitch termsheet backing validation focus release.
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full overflow-hidden">
                                            <img
                                            src={BlogImage1}
                                            alt="Author"
                                            className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <div className="text-base text-[rgba(0,0,0,1)] leading-7">
                                            Chandler Bing
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}