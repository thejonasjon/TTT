import Footer from "../components/Footer";
import Hero from "../components/hero";

import FAQImage from "../assets/images/FAQimg.png";
import WhyUsImage1 from "../assets/images/whyUsimg1.png";
import WhyUsImage2 from "../assets/images/whyUsimg2.jpg";
import ApproachImage1 from "../assets/images/approachImg1.png";
import ApproachImage2 from "../assets/images/approachImg2.jpg";
import ServiceImage1 from "../assets/images/serviceImg1.png";
import ServiceImage2 from "../assets/images/serviceImg2.png";
import ServiceImage3 from "../assets/images/serviceImg3.png";
import UserPhoto1 from "../assets/images/userPhoto1.png";
import UserPhoto2 from "../assets/images/userPhoto2.png";
import UserPhoto3 from "../assets/images/userPhoto3.png";
import ArticleUserPhoto1 from "../assets/images/articleUserPhoto1.png";
import ArticleUserPhoto2 from "../assets/images/articleUserPhoto2.png";
import ArticleUserPhoto3 from "../assets/images/articleUserPhoto3.png";
import ArticleImg1 from "../assets/images/articleImg1.png";
import ArticleImg2 from "../assets/images/articleImg2.png";
import ArticleImg3 from "../assets/images/articleImg3.png";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Eye,
  Feather,
  Sun,
} from "lucide-react";
import Button from "../ui/Button";

export default function Home() {
  const services = [
    {
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
      image: ServiceImage1,
    },
    {
      title: "Even cooler feature",
      description: "Learning curve network effects return on investment.",
      image: ServiceImage2,
    },
    {
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
      image: ServiceImage3,
    },
  ];

  const testimonials = [
    {
      quote:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      user: {
        fullName: "Albus Dumbledore",
        role: "Manager",
        company: "Howarts",
        profilePhoto: UserPhoto1,
      },
    },
    {
      quote:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      user: {
        fullName: "Severus Snape",
        role: "Manager",
        company: "Slytherin",
        profilePhoto: UserPhoto2,
      },
    },
    {
      quote:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      user: {
        fullName: "Harry Potter",
        role: "Team Leader",
        company: "Gryffindor",
        profilePhoto: UserPhoto3,
      },
    },
  ];

  const faqs = [
    {
      question: "We connect our customers with the best?",
      description:
        "Yes, we carefully match our customers with top-quality service providers that meet their specific needs.",
    },
    {
      question: "Android research & development rockstar?",
      description:
        "Our Android team constantly innovates to deliver high-performance mobile solutions that exceed expectations.",
    },
  ];

  const articles = [
    {
      title: "Pitch termsheet backing validation focus release.",
      date: "November 22, 2021",
      img: ArticleImg1,
      user: {
        fullName: "Chandler Bing",
        profilePhoto: ArticleUserPhoto1,
      },
    },
    {
      title:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      date: "November 22, 2021",
      img: ArticleImg2,
      user: {
        fullName: "Rachel Green",
        profilePhoto: ArticleUserPhoto2,
      },
    },
    {
      title:
        "Beta prototype sales iPad gen-z marketing network effects value proposition.",
      date: "November 22, 2021",
      img: ArticleImg3,
      user: {
        fullName: "Monica Geller",
        profilePhoto: ArticleUserPhoto3,
      },
    },
  ];

  return (
    <div>
      {/* Header */}
      <Hero />

      {/* Main */}
      <main className="space-y-12 md:space-y-36">
        {/* Services */}
        <section>
          <div className="space-y-12 py-16 sm:py-20 px-4 sm:px-8">
            {/* Header Section */}
            <div className="w-full md:w-8/12 mx-auto text-center space-y-4">
              <h5 className="text-base sm:text-lg md:text-xl text-[rgba(119,119,119,1)] font-sans leading-7 sm:leading-8">
                Our Services
              </h5>
              <h2 className="text-2xl sm:text-3xl md:text-5xl text-[rgba(0,0,0,1)] font-manrope font-normal leading-snug sm:leading-tight">
                Handshake infographic mass market crowdfunding iteration.
              </h2>
            </div>

            <div className="w-full md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 md:gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="space-y-6 w-full sm:w-[300px] flex flex-col items-center text-center sm:text-left"
                >
                  <div className="w-full sm:w-[300px] h-auto rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} Image`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="text-lg sm:text-xl md:text-2xl leading-7 sm:leading-9 text-[rgba(0,0,0,1)]">
                        {service.title}
                      </div>

                      <div className="text-base sm:text-lg md:text-xl font-normal text-[rgba(119,119,119,1)] leading-6 sm:leading-8">
                        {service.description}
                      </div>
                    </div>

                    <div className="flex justify-center sm:justify-start items-center gap-2">
                      <a
                        href="#"
                        className="flex items-center gap-2 sm:gap-4 text-base sm:text-lg md:text-xl text-[rgba(10,38,64,1)] font-bold leading-7 sm:leading-9 border-b-2 border-[rgba(10,38,64,1)] py-2 hover:opacity-80 transition-all"
                      >
                        Explore page <ArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US  */}
        <section>
          <div className="w-11/12 md:w-10/12 mx-auto py-12 md:py-20 space-y-8 ">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-36">
              <div className="flex-1 relative flex flex-col items-center lg:items-start">
                <img
                  src={WhyUsImage1}
                  alt="Why Us Image 1"
                  className="w-full object-cover rounded-3xl"
                />

                <div className="hidden lg:flex relative -mt-72 ml-60 justify-center">
                  <div className="flex bg-white shadow-md rounded-xl px-8 py-10">
                    <img
                      src={WhyUsImage2}
                      alt="Why Us Image 2"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8 sm:space-y-10 lg:space-y-14 text-center lg:text-left mt-8 lg:mt-0">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-snug sm:leading-[1.4] font-manrope text-[rgba(0,0,0,1)]">
                  We connect our customers with the best, and help them keep
                  up—and stay open.
                </h3>

                <div className="flex flex-col gap-4 sm:gap-6">
                  {[
                    "We connect our customers with the best.",
                    "Advisor success customer launch party.",
                    "Business-to-consumer long tail.",
                  ].map((whyUs, index) => (
                    <div
                      key={index}
                      className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 flex items-start sm:items-center sm:justify-start lg:justify-start gap-3 sm:gap-4"
                    >
                      <span className="p-1.5 sm:p-2 rounded-full bg-[rgba(10,38,64,1)] text-white flex items-center justify-center">
                        <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                      </span>
                      {whyUs}
                    </div>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Button>Start Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach  */}
        <section>
          <div className="space-y-8 w-11/12 md:w-10/12 mx-auto">
            <div className="flex flex-col lg:flex-row-reverse justify-between items-start lg:items-center gap-6 lg:gap-36">
              <div className="flex-1 w-full lg:w-auto order-1 lg:order-1">
                <img
                  src={ApproachImage1}
                  alt="Approach Image 1"
                  className="w-full object-cover rounded-3xl"
                />

                <div className="hidden lg:flex w-fit relative -mt-70 ml-10 px-8 py-10 justify-center lg:justify-end bg-white rounded-xl shadow-lg">
                  <img
                    src={ApproachImage2}
                    alt="Approach Image 2"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-8 lg:space-y-14 w-full lg:w-5/12 order-2 lg:order-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-snug lg:leading-14 font-manrope text-[rgba(0,0,0,1)] text-center lg:text-left">
                  We connect our customers with the best, and help them keep
                  up-and stay open.
                </h3>

                <div className="flex flex-col gap-3 sm:gap-6">
                  {[
                    {
                      heading: "We connect our customers with the best.",
                      icon: Feather,
                    },
                    {
                      heading: "Advisor success customer launch party.",
                      icon: Eye,
                    },
                    { heading: "Business-to-consumer long tail.", icon: Sun },
                  ].map((approach, index) => (
                    <div
                      key={index}
                      className={`${
                        index === 0
                          ? "text-[rgba(255,255,255,1)] bg-[rgba(10,38,64,1)]"
                          : "text-[rgba(10,38,64,1)] bg-[rgba(255,255,255,1)] shadow-md"
                      } text-[14px] sm:text-lg font-semibold rounded-sm leading-7 flex items-center gap-4 p-3`}
                    >
                      <approach.icon className="w-5 h-5" />
                      {approach.heading}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section>
          <div className="space-y-12 bg-[rgba(10,38,64,1)] p-6 md:p-26">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[rgba(225,225,225,1)] font-manrope font-normal leading-snug lg:leading-18 max-w-full lg:max-w-[60%] text-center lg:text-left">
                An enterprise template to ramp up your company website
              </h2>

              <div className="hidden md:flex gap-4 self-center lg:self-end">
                <button className="text-[rgba(10,38,64,1)] bg-[rgba(225,225,225,1)] rounded-full hover:bg-[rgba(225,225,225,1)]/90 transition-all duration-75 p-3 sm:p-4">
                  <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button className="text-[rgba(10,38,64,1)] bg-[rgba(225,225,225,1)] rounded-full hover:bg-[rgba(225,225,225,1)]/90 transition-all duration-75 p-3 sm:p-4">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="space-y-6 lg:space-y-8 bg-[rgba(255,255,255,1)] rounded-xl w-full lg:w-2/6 h-fit p-4 sm:p-10"
                >
                  <div className="text-lg sm:text-2xl text-[rgba(0,0,0,1)] leading-7 sm:leading-9">
                    {testimonial.quote}
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.user.profilePhoto}
                        alt={`${testimonial.user.fullName} profile photo`}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    <div>
                      <div className="text-sm sm:text-base text-[rgba(10,38,64,1)] font-bold leading-6 sm:leading-8">
                        {testimonial.user.fullName}
                      </div>
                      <div className="text-xs sm:text-sm text-[rgba(10,38,64,1)] leading-5 sm:leading-8">
                        {testimonial.user.role} @ {testimonial.user.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="space-y-8 w-10/12 mx-auto">
            <div className="w-full h-auto rounded-4xl overflow-hidden">
              <img
                src={FAQImage}
                alt="FAQ Image"
                className="w-full h-full object-contain rounded-4xl"
              />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-8 lg:gap-36">
              <h4 className="text-2xl sm:text-3xl lg:text-4xl leading-snug flex-1 text-center lg:text-left">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h4>

              <div className="w-full lg:w-8/12 space-y-4 flex-1">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-[rgba(196,196,196,1)] py-4 group cursor-pointer"
                  >
                    {/* Question */}
                    <button className="w-full flex items-center justify-between text-left text-base sm:text-xl gap-4">
                      <span>{faq.question}</span>
                      <span className="p-1 rounded-full text-white bg-[rgba(10,38,64,1)] group-hover:rotate-180 transition-transform duration-300">
                        <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6" />
                      </span>
                    </button>

                    {/* Answer */}
                    <p className="text-[rgba(119,119,119,1)] text-sm sm:text-base mt-2 hidden group-hover:block transition-all duration-300">
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
            <div className="w-full md:w-8/12 mx-auto text-center">
              <h5 className="text-lg sm:text-xl text-[rgba(119,119,119,1)] font-sans leading-7 sm:leading-8">
                Our Blog
              </h5>
              <h2 className="text-3xl sm:text-5xl text-[rgba(0,0,0,1)] font-manrope font-normal leading-10 sm:leading-18">
                Value proposition accelerator product management venture
              </h2>
            </div>

            <div className="w-full md:w-8/12 mx-auto flex flex-col md:flex-row flex-wrap gap-8 justify-center">
              {articles.map((article, index) => (
                <div key={index} className="space-y-6 w-full sm:w-[290px] px-4 md:px-0">
                  <div className="w-full h-48 sm:h-[200px] rounded-2xl overflow-hidden">
                    <img
                      src={article.img}
                      alt="Blog Thumbnail"
                      className="w-full h-full object-cover object-[center_30%]"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex gap-2 text-sm sm:text-base leading-6 sm:leading-7 text-[rgba(119,119,119,1)]">
                        <span className="text-[rgba(10,38,64,1)] font-bold">
                          Category
                        </span>{" "}
                        {article.date}
                      </div>

                      <div className="text-lg sm:text-xl text-[rgba(0,0,0,1)] leading-7 sm:leading-8">
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
                      <div className="text-sm sm:text-base text-[rgba(0,0,0,1)] leading-6 sm:leading-7">
                        {article.user.fullName}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                btnType="outline"
                className="text-blue-950 bg-transparent border-2 border-blue-950"
              >
                Learn more
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
