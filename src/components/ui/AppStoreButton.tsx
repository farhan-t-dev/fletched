import React from "react"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

interface AppStoreButtonProps {
  className?: string
  variant?: "black" | "slate" | "navbar"
}

export function AppStoreButton({ className, variant = "black" }: AppStoreButtonProps) {
  if (variant === "navbar") {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative overflow-hidden bg-black text-white px-5 py-2 rounded-xl flex items-center gap-3 transition-all shadow-lg shadow-black/20 hover:shadow-black/40 group border border-white/10",
          className
        )}
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img 
          src="https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png" 
          alt="Apple Logo" 
          className="w-5 h-5 object-contain invert brightness-0 relative z-10 group-hover:rotate-12 transition-transform duration-500"
        />
        <div className="flex flex-col items-start leading-none relative z-10">
           <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/70 mb-0.5">Get it on</span>
           <span className="text-[10px] font-black uppercase tracking-tighter italic">App Store</span>
        </div>
      </motion.button>
    )
  }

  const bgClass = variant === "black" ? "bg-black" : "bg-slate-900 dark:bg-slate-800"
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-8 py-3 rounded-2xl flex items-center gap-5 transition-all shadow-xl hover:shadow-primary/10 border border-white/10 group",
        bgClass,
        className
      )}
    >
      <img 
        src="https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png" 
        alt="Apple Logo" 
        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
      />
      <div className="text-left border-l border-white/10 pl-5">
        <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em] block mb-1">Download on the</span>
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none italic">App Store</h3>
      </div>
    </motion.button>
  )
}
