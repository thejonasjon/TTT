import Footer from "../components/Footer";
import Hero from "../components/hero";

import FAQImage from '../assets/images/FAQimg.png'
import WhyUsImage1 from '../assets/images/whyUsimg1.png'
import WhyUsImage2 from '../assets/images/whyUsimg2.jpg'
import ApproachImage1 from '../assets/images/approachImg1.png'
import ApproachImage2 from '../assets/images/approachImg2.jpg'
import ServiceImage1 from '../assets/images/serviceImg1.png'
import ServiceImage2 from '../assets/images/serviceImg2.png'
import ServiceImage3 from '../assets/images/serviceImg3.png'
import UserPhoto1 from '../assets/images/userPhoto1.png'
import UserPhoto2 from '../assets/images/userPhoto2.png'
import UserPhoto3 from '../assets/images/userPhoto3.png'
import ArticleUserPhoto1 from '../assets/images/articleUserPhoto1.png'
import ArticleUserPhoto2 from '../assets/images/articleUserPhoto2.png'
import ArticleUserPhoto3 from '../assets/images/articleUserPhoto3.png'
import ArticleImg1 from '../assets/images/articleImg1.png'
import ArticleImg2 from '../assets/images/articleImg2.png'
import ArticleImg3 from '../assets/images/articleImg3.png'

import { ArrowLeft, ArrowRight, Check, ChevronDown, Eye, Feather, Sun } from "lucide-react";
import Button from "../ui/Button";

export default function Home(){

    const services = [
        {
            title: "Cool feature title",
            description: "Learning curve network effects return on investment.",
            image: ServiceImage1
        },
        {
            title: "Even cooler feature",
            description: "Learning curve network effects return on investment.",
            image: ServiceImage2
        },
        {
            title: "Cool feature title",
            description: "Learning curve network effects return on investment.",
            image: ServiceImage3
        },
    ];

    const testimonials = [{
            quote: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
            user: {
            fullName: "Albus Dumbledore",
            role: "Manager",
            company: "Howarts",
            profilePhoto: UserPhoto1
            }
        },
        {
            quote: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
            user: {
            fullName: "Severus Snape",
            role: "Manager",
            company: "Slytherin",
            profilePhoto: UserPhoto2
            }
        },
        {
            quote: "“Release facebook responsive web design business model canvas seed money monetization.”",
            user: {
            fullName: "Harry Potter",
            role: "Team Leader",
            company: "Gryffindor",
            profilePhoto: UserPhoto3
            }
    }]

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

     const articles = [{
            title: "Pitch termsheet backing validation focus release.",
            date: "November 22, 2021",
            img: ArticleImg1,
            user: {
            fullName: "Chandler Bing",
            profilePhoto: ArticleUserPhoto1
            }
        },
        {
            title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
            date: "November 22, 2021",
            img: ArticleImg2,
            user: {
            fullName: "Rachel Green",
            profilePhoto: ArticleUserPhoto2
            }
        },
        {
            title: "Beta prototype sales iPad gen-z marketing network effects value proposition.",
            date: "November 22, 2021",
            img: ArticleImg3,
            user: {
            fullName: "Monica Geller",
            profilePhoto: ArticleUserPhoto3
            }
    }]

    return(
        <div>
            {/* Header */}
            <Hero />

            {/* Main */}
            <main className="space-y-36">
                {/* Our Services */}
                <section>
                    <div className="space-y-12 py-20">
                        <div className="w-8/12 mx-auto text-center">
                            <h5 className="text-xl text-[rgba(119,119,119,1)] font-sans leading-8">Our Services</h5>
                            <h2 className="text-5xl text-[rgba(0,0,0,1)] font-manrope font-normal leading-18">Handshake infographic mass market crowdfunding iteration.</h2>
                        </div>

                        <div className="w-10/12 mx-auto flex justify-between gap-8">
                            {services.map((service, index) => (
                            <div key={index} className="space-y-6 w-[300px]">
                                {/* Image container */}
                                <div
                                    className="w-[300px] h-auto rounded-2xl overflow-hidden"
                                    >
                                    <img
                                    src={service.image}
                                    alt={`${service.image} Image`}
                                    className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <div className="space-y-1">
                                        <div className="text-2xl leading-9 text-[rgba(0,0,0,1)]">
                                            {service.title}
                                        </div>

                                        <div className="text-xl font-normal text-[rgba(119,119,119,1)] leading-8">
                                            {service.description}
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
                    <div className="w-10/12 mx-auto py-20 space-y-8">
                        <div className="flex justify-between items-center gap-36">
                            {/* Left side (images) */}
                            <div className="flex-1 relative">
                                <img
                                src={WhyUsImage1}
                                alt="Why Us Image 1"
                                className="w-full object-cover rounded-3xl"
                                />

                                <div className="relative -mt-74 -mr-40 flex justify-center">
                                    <div className="flex bg-white shadow-md rounded-xl px-8 py-10">
                                        <img
                                        src={WhyUsImage2}
                                        alt="Why Us Image 2"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right side (text content) */}
                            <div className="flex-1 space-y-14">
                                <h3 className="text-4xl leading-[1.4]">
                                    We connect our customers with the best, and help them keep up—and stay open.
                                </h3>

                                <div className="flex flex-col gap-6">
                                {[
                                    "We connect our customers with the best.",
                                    "Advisor success customer launch party.",
                                    "Business-to-consumer long tail."
                                ].map((whyUs, index) => (
                                    <div key={index} className="text-xl leading-8 flex items-center gap-4">
                                    <span className="p-1 rounded-full bg-[rgba(10,38,64,1)] text-white">
                                        <Check className="w-4 h-4" />
                                    </span>
                                    {whyUs}
                                    </div>
                                ))}
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
                            <div className="flex-1 relative">
                                    {/* Bottom image */}
                                    <img
                                        src={ApproachImage1}
                                        alt="Approach Image 1"
                                        className="object-cover rounded-3xl"
                                    />

                                    {/* Top image */}
                                    <div className="relative -mt-50 -ml-25 flex justify-center">
                                        <img
                                        src={ApproachImage2}
                                        alt="Approach Image 2"
                                        className="object-cover rounded-3xl shadow-lg"
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="space-y-14 md:w-5/12">
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
                                        <div key={index} className={`${index === 0 ? "text-[rgba(255,255,255,1)] bg-[rgba(10,38,64,1)]" : "text-[rgba(10,38,64,1)] bg-[rgba(255,255,255,1)] shadow-md" } text-base font-semibold rounded-sm leading-7 flex items-center gap-4 p-3`}>
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

                {/* Testimonial */}
                <section>
                    <div className="space-y-12 bg-[rgba(10,38,64,1)] p-26">
                        <div className="w-full flex justify-between items-center">
                            <h2 className="text-5xl text-[rgba(225,225,225,1)] font-manrope font-normal leading-18 max-w-[60%]">
                                An enterprise template to ramp up your company website
                            </h2>

                            <div className="flex self-end gap-4">
                                <button className="text-[rgba(10,38,64,1)] bg-[rgba(225,225,225,1)] rounded-full hover:bg-[rgba(225,225,225,1)]/90 transition-all duration-75 p-4">
                                <ArrowRight className="w-6 h-6" />
                                </button>
                                <button className="text-[rgba(10,38,64,1)] bg-[rgba(225,225,225,1)] rounded-full hover:bg-[rgba(225,225,225,1)]/90 transition-all duration-75 p-4">
                                <ArrowLeft className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="space-y-8 bg-[rgba(255,255,255,1)] rounded-xl w-2/6 h-fit p-10">
                                    <div className="text-2xl text-[rgba(0,0,0,1)] leading-9">
                                        {testimonial.quote}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full">
                                            <img src={testimonial.user.profilePhoto} alt={`${testimonial.user.fullName} profile photo`} className="w-full h-full rounded-full" />
                                        </div>

                                        <div>
                                            <div className="text-base text-[rgba(10,38,64,1)] font-bold leading-8">
                                                {testimonial.user.fullName}
                                            </div>
                                            <div className="text-sm text-[rgba(10,38,64,1)] leading-8">
                                                {testimonial.user.role} @ {testimonial.user.company}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
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
                                        <ChevronDown className="w-6 h-6" />
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
                            {articles.map((article, index) => (
                            <div key={index} className="space-y-6">
                                {/* Image container */}
                                <div
                                    className="w-[290px] h-[200px] rounded-2xl overflow-hidden"
                                    >
                                    <img
                                    src={article.img}
                                    alt="Blog Thumbnail"
                                    className="w-full h-full object-cover object-[center_30%]"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-12">
                                    <div className="space-y-2">
                                        <div className="flex gap-4 text-base leading-7 text-[rgba(119,119,119,1)]">
                                            <span className="text-[rgba(10,38,64,1)] font-bold">Category</span>{" "}
                                            {article.date}
                                        </div>

                                        <div className="text-xl text-[rgba(0,0,0,1)] leading-8">
                                            {article.title}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full overflow-hidden">
                                            <img
                                            src={article.user.profilePhoto}
                                            alt="Author"
                                            className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <div className="text-base text-[rgba(0,0,0,1)] leading-7">
                                            {article.user.fullName}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>

                        <div className="text-center">
                            <Button btnType="outline" className="text-blue-950 bg-transparent border-2 border-[rgba(10,38,64,1)]">Learn more</Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}