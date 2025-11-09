import Button from "../ui/Button";
import NavBar from "./navbar";
import { motion } from "framer-motion";

import heroGraphics1 from "../assets/images/heroimg1.png";
import heroGraphics2 from "../assets/images/heroimg2.png";
import heroGraphics3 from "../assets/images/heroimg3.png";
import BoldoLogoWhite from "../assets/images/boldologowhite.png";
import PrestoLogo from "../assets/images/prestologo.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden flex flex-col min-h-screen bg-[rgba(10,38,64,1)]">
      <div className="absolute top-[-280px] right-[-260px] w-[100vh] aspect-square rounded-full bg-[rgba(28,61,91,1)] z-0"></div>

      <div className="w-11/12 md:w-10/12 mx-auto  space-y-12 md:space-y-16 relative z-10">
        {/* Navbar */}
        <NavBar />

        {/* Hero main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10 md:gap-16">
            {/* Text Section */}
            <div className="space-y-8 md:space-y-10 text-center md:text-left">
                <div className="space-y-4">
                    <h1 className="font-manrope text-4xl sm:text-5xl md:text-5xl font-normal leading-[1.3] text-white md:w-[98%]">
                        Save time by building fast with Boldo Template
                    </h1>
                    <p className="font-sans text-base sm:text-lg leading-7 text-[rgba(241,241,241,1)] max-w-xl mx-auto md:mx-0 md:w-[98%]">
                        Funding handshake buyer business-to-business metrics iPad
                        partnership. First mover advantage innovator success deployment
                        non-disclosure.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
                <Button
                    btnType="primary"
                    className="w-full sm:w-auto text-base sm:text-lg"
                >
                    Buy Template
                </Button>
                <Button
                    btnType="outline"
                    className="w-full sm:w-auto text-base sm:text-lg"
                >
                    Explore
                </Button>
                </div>
            </div>

          {/* Hero Images */}
          <div className="hidden md:flex flex-col items-center md:items-end gap-6 md:gap-8 relative">
            <div className="w-10/12 sm:w-8/12 md:w-fit flex justify-end">
              <img
                src={heroGraphics1}
                alt="Hero Graphics 1"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex justify-center md:justify-between gap-4 sm:gap-8 w-full md:w-fit">
              <img
                src={heroGraphics2}
                alt="Hero Graphics 2"
                className="w-1/2 sm:w-5/12 md:w-full h-auto object-contain"
              />
              <img
                src={heroGraphics3}
                alt="Hero Graphics 3"
                className="w-1/2 sm:w-5/12 md:w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden py-6">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,38,64,1)_0%,rgba(10,38,64,0.11)_25%,rgba(10,38,64,0)_50%,rgba(10,38,64,1)_100%)] pointer-events-none z-10"></div>

          {/* Scrolling Logos */}
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 12,
              repeat: Infinity,
            }}
          >
            {[...Array(1)].map((_, i) => (
              <div key={i} className="flex gap-12">
                <img
                  src={BoldoLogoWhite}
                  alt="Boldo logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={PrestoLogo}
                  alt="Presto logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={BoldoLogoWhite}
                  alt="Boldo logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={PrestoLogo}
                  alt="Presto logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={BoldoLogoWhite}
                  alt="Boldo logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={PrestoLogo}
                  alt="Presto logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={BoldoLogoWhite}
                  alt="Boldo logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={PrestoLogo}
                  alt="Presto logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={BoldoLogoWhite}
                  alt="Boldo logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={PrestoLogo}
                  alt="Presto logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={BoldoLogoWhite}
                  alt="Boldo logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={PrestoLogo}
                  alt="Presto logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={BoldoLogoWhite}
                  alt="Boldo logo"
                  className="h-6 md:h-8"
                />
                <img
                  src={PrestoLogo}
                  alt="Presto logo"
                  className="h-6 md:h-8"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
