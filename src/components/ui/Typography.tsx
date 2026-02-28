import React from "react"
import { cn } from "../../lib/utils"

export function TypographyH1({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <h1 className={cn(
      "scroll-m-20 text-5xl font-black uppercase tracking-tighter lg:text-8xl leading-[0.9]",
      className
    )}>
      {children}
    </h1>
  )
}

export function TypographyH2({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <h2 className={cn(
      "scroll-m-20 text-3xl font-black uppercase tracking-tighter lg:text-5xl leading-none",
      className
    )}>
      {children}
    </h2>
  )
}

export function TypographyH3({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <h3 className={cn(
      "scroll-m-20 text-2xl font-black uppercase tracking-tighter lg:text-3xl leading-none",
      className
    )}>
      {children}
    </h3>
  )
}

export function TypographyH4({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <h4 className={cn(
      "scroll-m-20 text-xl font-black uppercase tracking-tight",
      className
    )}>
      {children}
    </h4>
  )
}

export function TypographyP({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <p className={cn("leading-relaxed text-slate-500 font-medium [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <blockquote className={cn(
      "mt-6 border-l-4 border-primary pl-6 italic font-black text-2xl md:text-4xl tracking-tighter text-slate-800 dark:text-white",
      className
    )}>
      {children}
    </blockquote>
  )
}

export function TypographyLead({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <p className={cn("text-xl md:text-2xl text-slate-500 font-medium leading-relaxed", className)}>
      {children}
    </p>
  )
}

export function TypographyLarge({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={cn("text-lg font-black uppercase tracking-widest text-slate-900 dark:text-white", className)}>
      {children}
    </div>
  )
}

export function TypographySmall({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <small className={cn("text-sm font-bold leading-none uppercase tracking-widest", className)}>
      {children}
    </small>
  )
}

export function TypographyMuted({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <p className={cn("text-sm text-slate-500 font-mono uppercase tracking-[0.2em]", className)}>
      {children}
    </p>
  )
}
