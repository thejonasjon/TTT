import Button from "../ui/Button";

export default function NewsLetter(){
    return (
        <div className="relative overflow-hidden bg-[rgba(10,38,64,1)] rounded-2xl md:py-16">
        <div className="absolute top-[-620px] right-[-150px] w-[100vh] aspect-square rounded-full bg-[rgba(28,61,91,1)] z-0"></div>

            <div className="space-y-12 w-7/12 mx-auto md:px-4 z-10 relative">
                <h3 className="text-5xl text-white font-manrope leading-18 text-center">An enterprise template to ramp up your company website</h3>

                <form action="#" className="flex items-center gap-4">
                    <input type="email" className="w-full bg-white text-xl text-[rgba(0,0,0,1)] rounded-4xl px-4 py-4 outline-0" placeholder="Your email address" />
                    <Button btnType="primary">Start Now</Button>
                </form>
            </div>
        </div>
    )
}