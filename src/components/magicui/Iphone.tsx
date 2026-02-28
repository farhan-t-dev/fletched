import { cn } from "../../lib/utils";
import type { HTMLAttributes } from "react";

interface Iphone15ProProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  videoSrc?: string;
}

export default function Iphone15Pro({
  src,
  videoSrc,
  className,
  ...props
}: Iphone15ProProps) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[510px] w-[250px] select-none md:h-[580px] md:w-[280px]",
        className,
      )}
      {...props}
    >
      {/* Device Frame */}
      <img
        src="https://magicui.design/iphone-15-pro.png"
        alt="iPhone 15 Pro"
        className="pointer-events-none absolute inset-0 h-full w-full z-10"
      />
      
      {/* Screen Content */}
      <div className="absolute inset-[7px] overflow-hidden rounded-[34px] bg-black md:inset-[8px] md:rounded-[40px]">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : src ? (
          <img
            src={src}
            alt="Screen Content"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-zinc-900 flex items-center justify-center">
             <div className="size-16 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center animate-spin-slow">
                <span className="material-symbols-outlined text-4xl text-primary font-bold">architecture</span>
             </div>
          </div>
        )}
      </div>

      {/* Dynamic Island Area */}
      <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[70px] h-[20px] bg-black rounded-full z-20 md:top-[20px] md:w-[80px] md:h-[24px]"></div>
    </div>
  );
}
