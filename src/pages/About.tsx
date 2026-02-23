import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark pt-32 pb-20 overflow-hidden relative min-h-screen transition-colors blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-3xl mb-24">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-sm font-bold">info</span> SYSTEM.CORE_SPEC [v1.0]
           </div>
           <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter mb-10 text-slate-800 dark:text-white">
             The Fletched <br />
             <span className="text-primary italic">Foundation.</span>
           </h1>
           <p className="text-2xl text-slate-500 leading-relaxed font-medium">
             Engineered for the high-country. Designed for archers who prioritize technical precision and ethical execution.
           </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
           <AnimatedSection className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-800 dark:text-white">Technical Integrity</h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                In a field where every grain of arrow weight influences downstream kinetics, guesswork is the enemy of ethics. Fletched provides a sophisticated environment for modeling and simulating archery ballistics with laboratory-grade accuracy.
              </p>
              <div className="grid gap-6 pt-6">
                 {[
                   { title: 'Data-Driven Accuracy', icon: <span className="material-symbols-outlined">bolt</span>, desc: 'Using industry-standard ballistics formulas refined for modern archery tackle.' },
                   { title: 'Conservation First', icon: <span className="material-symbols-outlined">favorite</span>, desc: 'Promoting ethical shot placement and setup suitability for all 49 game species.' },
                   { title: 'Field-Tested Tools', icon: <span className="material-symbols-outlined">shield</span>, desc: "Designed to work where service doesn't. Minimalist, fast, and reliable." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                       <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          {item.icon}
                       </div>
                       <div>
                          <h4 className="font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-1">{item.title}</h4>
                          <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </AnimatedSection>

           <AnimatedSection delay={0.2} className="relative">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-[3rem] border border-primary/10 aspect-video flex items-center justify-center shadow-2xl relative overflow-hidden group blueprint-x">
                 <img 
                    src="/A59A75B2-975A-41C5-998E-FA20C34B2679.png" 
                    alt="Fletched App Interface" 
                    className="w-full h-full object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
                 />
                 <div className="absolute bottom-6 left-10 right-10 flex justify-between items-center text-[8px] font-mono font-bold uppercase tracking-[0.4em] text-primary/40 pointer-events-none">
                    <span>INTERFACE_SPEC</span>
                    <span>v1.0.8_PRODUCTION</span>
                 </div>
              </div>
           </AnimatedSection>
        </div>

        <AnimatedSection className="bg-white dark:bg-slate-800 border border-primary/10 rounded-[3rem] p-16 text-center max-w-4xl mx-auto shadow-2xl">
           <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 text-slate-900 dark:text-white">Ready to Calibrate?</h3>
           <p className="text-slate-500 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
             Join the thousands of archers who are optimizing their gear for the field. Precision is just a download away.
           </p>
           <button className="inline-flex items-center space-x-4 bg-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-lg text-white hover:brightness-110 transition-all shadow-xl shadow-primary/20 active:scale-95 group">
              <span>Join the Hunt</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
           </button>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
