import Button from "../ui/Button";

export default function NewsLetter() {
  return (
    <div className="relative overflow-hidden bg-[rgba(10,38,64,1)] rounded-2xl py-10 md:py-16">
      {/* Background Circle */}
      <div className="absolute top-[-420px] right-[-150px] w-[100vh] aspect-square rounded-full bg-[rgba(28,61,91,1)] z-0"></div>

      <div className="relative z-10 w-11/12 sm:w-10/12 md:w-7/12 mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-4">
        <h3 className="text-2xl sm:text-3xl md:text-5xl text-white font-manrope leading-tight md:leading-[1.3] text-center">
          An enterprise template to ramp up your company website
        </h3>

        <form
        //   action="#"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            className="w-full bg-white text-base sm:text-lg md:text-xl text-[rgba(0,0,0,1)] rounded-4xl px-4 py-3 sm:py-4 outline-0"
            placeholder="Your email address"
          />
          <Button
            btnType="primary"
            className="w-full sm:w-auto px-10 py-3 sm:px-14 sm:py-4 text-base sm:text-lg"
          >
            Start Now
          </Button>
        </form>
      </div>
    </div>
  );
}
