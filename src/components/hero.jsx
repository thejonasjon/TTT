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
    <div className="relative overflow-hidden flex h-screen bg-[rgba(10,38,64,1)]">
        {/* gradient top-right */}
        <div className="absolute top-[-280px] right-[-260px] w-[100vh] aspect-square rounded-full bg-[rgba(28,61,91,1)] z-0"></div>
        <div className="space-y-16 w-10/12 mx-auto my-auto">
            <NavBar />

            {/* Hero main content */}
            <div className="relative z-10 grid grid-cols-2 items-center justify-between gap-10">
                <div className="space-y-10">
                <div className="space-y-4">
                    <h1 className="font-manrope text-5xl font-normal leading-[1.3] text-[rgba(255,255,255,1)]">
                    Save time by building fast with Boldo Template
                    </h1>
                    <p className="font-sans text-base leading-7 text-[rgba(241,241,241,1)]">
                    Funding handshake buyer business-to-business metrics iPad partnership.
                    First mover advantage innovator success deployment non-disclosure.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Button btnType="primary">Buy Template</Button>
                    <Button btnType="outline">Explore</Button>
                </div>
                </div>

                {/* Hero images */}
                <div className="flex flex-col items-end gap-8">
                <div className="w-full flex justify-end">
                    <img
                    src={heroGraphics1}
                    alt="Hero Graphics 1"
                    className="w-fit h-auto object-contain"
                    />
                </div>

                <div className="w-fit flex justify-between gap-8">
                    <img
                    src={heroGraphics2}
                    alt="Hero Graphics 2"
                    className="w-full h-full object-contain"
                    />
                    <img
                    src={heroGraphics3}
                    alt="Hero Graphics 3"
                    className="w-full h-full object-contain"
                    />
                </div>
                </div>
            </div>
            <div className="relative w-full overflow-hidden py-6">
            {/* Transparent gradient overlay */}
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
                        <img src={BoldoLogoWhite} alt="Boldo logo" className="h-8" />
                        <img src={PrestoLogo} alt="Presto logo" className="h-8" />
                        <img src={BoldoLogoWhite} alt="Boldo logo" className="h-8" />
                        <img src={PrestoLogo} alt="Presto logo" className="h-8" />
                        <img src={BoldoLogoWhite} alt="Boldo logo" className="h-8" />
                        <img src={PrestoLogo} alt="Presto logo" className="h-8" />
                        <img src={BoldoLogoWhite} alt="Boldo logo" className="h-8" />
                        <img src={PrestoLogo} alt="Presto logo" className="h-8" />
                        <img src={BoldoLogoWhite} alt="Boldo logo" className="h-8" />
                        <img src={PrestoLogo} alt="Presto logo" className="h-8" />
                        <img src={BoldoLogoWhite} alt="Boldo logo" className="h-8" />
                        <img src={PrestoLogo} alt="Presto logo" className="h-8" />
                        <img src={BoldoLogoWhite} alt="Boldo logo" className="h-8" />
                        <img src={PrestoLogo} alt="Presto logo" className="h-8" />
                    </div>
                ))}
                </motion.div>
            </div>
        </div>
    </div>
    );
}