import { cn } from "../utils/cn";

export default function Button({ btnType = "default", className, children }) {
  return (
    <button
      className={cn(
        "inline-flex justify-center items-center whitespace-nowrap font-sans font-bold rounded-4xl transition-all duration-200",
        "text-base sm:text-lg md:text-xl",
        "px-6 py-3 sm:px-10 sm:py-3.5 md:px-14 md:py-4",
        btnType === "primary"
          ? "bg-[rgba(101,228,163,1)] text-[rgba(10,38,64,1)] hover:bg-[rgba(80,200,140,1)]"
          : btnType === "outline"
          ? "bg-transparent text-[rgba(255,255,255,1)] border-2 border-[rgba(255,255,255,1)] hover:bg-white/10"
          : "bg-[rgba(10,38,64,1)] text-[rgba(255,255,255,1)] hover:bg-[rgba(10,38,64,1)]/90",
        className
      )}
    >
      {children}
    </button>
  );
}
