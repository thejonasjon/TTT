import { Link } from "react-router-dom";
import BoldoLogoBlack from "../assets/images/BoldoLogoBlack.png";
import NewsLetter from "./NewsLetter";

export default function Footer() {
  return (
    <section className="bg-white">
      <div className="space-y-12 w-11/12 mx-auto">
        <NewsLetter />

        <footer className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:gap-26 gap-12 md:justify-between">
            <div className="flex flex-col gap-6 md:w-[24%] w-full text-center md:text-left">
              <Link to="#" className="flex justify-center md:justify-start">
                <img
                  src={BoldoLogoBlack}
                  alt="Boldo Logo Black"
                  className="mx-auto md:mx-0 w-32 md:w-auto"
                />
              </Link>

              <p className="text-base text-[rgba(119,119,119,1)] leading-7">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </p>
            </div>

            {/* Links */}
            <div className="w-full md:w-[80%] flex flex-col sm:flex-row justify-around gap-8 sm:gap-4">
              <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
                <div className="text-xl font-bold text-[rgba(0,0,0,1)] leading-8">
                  Landings
                </div>
                <ul className="flex flex-col gap-4 sm:gap-6">
                  <li>
                    <Link
                      to=""
                      className="text-lg sm:text-xl text-[rgba(119,119,119,1)] leading-8"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-lg sm:text-xl text-[rgba(119,119,119,1)] leading-8"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-lg sm:text-xl text-[rgba(119,119,119,1)] leading-8"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
                <div className="text-xl font-bold text-[rgba(0,0,0,1)] leading-8">
                  Company
                </div>
                <ul className="flex flex-col gap-4 sm:gap-6">
                  <li>
                    <Link
                      to=""
                      className="text-lg sm:text-xl text-[rgba(119,119,119,1)] leading-8"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-lg sm:text-xl text-[rgba(119,119,119,1)] leading-8"
                    >
                      Careers{" "}
                      <span className="bg-[rgba(101,228,163,1)] text-[13px] font-bold leading-7 text-[rgba(10,38,64,1)] py-1 px-3.5 rounded-full">
                        Hiring
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-lg sm:text-xl text-[rgba(119,119,119,1)] leading-8"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
                <div className="text-xl font-bold text-[rgba(0,0,0,1)] leading-8">
                  Resources
                </div>
                <ul className="flex flex-col gap-4 sm:gap-6">
                  <li>
                    <Link
                      to=""
                      className="text-lg sm:text-xl text-[rgba(119,119,119,1)] leading-8"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-lg sm:text-xl text-[rgba(119,119,119,1)] leading-8"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-lg sm:text-xl text-[rgba(119,119,119,1)] leading-8"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left text-base leading-7 text-[rgba(119,119,119,1)] mt-12">
            All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
}
