import Footer from "../components/Footer";
import Hero from "../components/hero";
import NavBar from "../components/navbar";

import BlogImage1 from '../assets/images/blogimg1.png'

export default function Home(){
    return(
        <div>
            {/* Header */}
            <Hero />
            <div>
                hello
            </div>

            {/* Main */}
            <main className="space-y-12">

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
                                <div className="w-[250px] h-auto rounded-4xl border">
                                    <img src={BlogImage1} alt="Blog Thumbnail" className="w-full h-full object-cover" />
                                </div>

                                <div className="space-y-12">
                                    <div className="space-y-2">
                                        <div className="flex gap-4 text-base leading-7 text-[rgba(119,119,119,1)]">
                                            <span className="text-[rgba(10,38,64,1)] font-bold">Category</span> November 22, 2021
                                        </div>

                                        <div className="text-xl text-[rgba(0,0,0,1)] leading-8">
                                            Pitch termsheet backing validation focus release.
                                        </div>
                                    </div>

                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <img src={BlogImage1} alt="Author" className="w-full h-full object-cover rounded-full" />
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