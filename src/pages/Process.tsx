import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const Process: React.FC = () => {
  const steps = [
    {
      icon: 'analytics',
      title: '1. Data Entry',
      desc: 'Input your raw technical specifications into our high-fidelity drafting environment. Cover every grain, FPS, and measurement.',
      color: 'bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-blue-500/5'
    },
    {
      icon: 'model_training',
      title: '2. Simulation',
      desc: 'Apply physics-based constraints and architectural rules to refine your equipment profile. Our engine models real-world variables.',
      color: 'bg-primary/10 text-primary border-primary/20 shadow-primary/5'
    },
    {
      icon: 'ios_share',
      title: '3. Export',
      desc: 'Generate technical documentation and assets ready for real-world field deployment. Your setup, documented to perfection.',
      color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-emerald-500/5'
    }
  ];

  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark pt-32 pb-20 overflow-hidden relative min-h-screen transition-colors blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <Badge variant="default" className="mb-6">
            <span className="material-symbols-outlined text-[12px] mr-1">settings_suggest</span> SYSTEM.WORKFLOW [v1.0]
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-slate-800 dark:text-white mb-6">
            The <span className="text-primary italic">Process.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-xl leading-relaxed">
            From raw data input to production-ready specifications in three technical phases. Simple, precise, and lethal.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12 relative mb-32">
           {/* Decorative Line */}
           <div className="hidden lg:block absolute top-24 left-0 w-full h-px border-t-2 border-dashed border-primary/10 z-0"></div>
           
           {steps.map((step, i) => (
             <AnimatedSection key={i} delay={i * 0.2} className="relative z-10 flex flex-col items-center">
                <div className={`size-48 rounded-full bg-white dark:bg-slate-800 border-4 shadow-2xl flex items-center justify-center mb-10 group hover:scale-105 transition-all duration-500 ${step.color}`}>
                   <span className="material-symbols-outlined text-6xl font-bold">{step.icon}</span>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 leading-none">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-center font-medium leading-relaxed px-6">
                  {step.desc}
                </p>
             </AnimatedSection>
           ))}
        </div>

        <AnimatedSection>
           <Card className="bg-slate-900 dark:bg-slate-800/80 border-none rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                 <div>
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Built for <br /> the Field.</h2>
                    <p className="text-slate-400 text-xl font-medium leading-relaxed mb-10">
                      Our workflow is designed to work where service doesn't. Once your data is in, the engine processes everything locally, ensuring you have your specs ready whenever you need them.
                    </p>
                    <div className="flex flex-wrap gap-4">
                       <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">OFFLINE_MODE: ENABLED</Badge>
                       <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">LOCAL_STORAGE: SYNCED</Badge>
                    </div>
                 </div>
                 <div className="flex justify-center">
                    <div className="size-64 rounded-[2.5rem] border-2 border-dashed border-primary/30 flex items-center justify-center blueprint-x bg-white/5 backdrop-blur-sm">
                       <span className="material-symbols-outlined text-9xl text-primary animate-pulse font-bold">cell_tower</span>
                    </div>
                 </div>
              </div>
           </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Process;
