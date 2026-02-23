import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark pt-32 pb-20 overflow-hidden relative min-h-screen transition-colors blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-3xl mb-24">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-sm">lock</span> SYSTEM.PRIVACY_ENCRYPTION [v1.0]
           </div>
           <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter mb-10 text-slate-900 dark:text-white">
             Privacy <br />
             <span className="text-primary italic">Encrypted.</span>
           </h1>
           <p className="text-2xl text-slate-500 leading-relaxed font-medium">
             Your hunting data is your own. We prioritize your privacy so you can focus on the mountains.
           </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
           <AnimatedSection className="space-y-12">
              <div className="grid gap-8">
                 {[
                   { 
                     title: 'Secure Data Storage', 
                     icon: <span className="material-symbols-outlined">lock</span>, 
                     desc: 'All bow profiles and personal calculations are stored securely and never shared with third parties.'
                   },
                   { 
                     title: 'No Location Tracking', 
                     icon: <span className="material-symbols-outlined">visibility_off</span>, 
                     desc: 'We never track your GPS coordinates or hunting spots. Your honey hole is safe with us.'
                   },
                   { 
                     title: 'Privacy By Design', 
                     icon: <span className="material-symbols-outlined">shield</span>, 
                     desc: 'Every feature is built with the archer\'s privacy as the highest priority.'
                   }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="flex-shrink-0 w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                          {item.icon}
                       </div>
                       <div className="space-y-2">
                          <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">{item.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </AnimatedSection>

           <AnimatedSection delay={0.2} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[3rem] p-12 shadow-2xl space-y-10 blueprint-x">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-900 dark:text-white">Data Highlights</h3>
              <div className="space-y-6">
                 {[
                   'Profiles stay local to your device by default.',
                   'We do not sell any data to outdoor brands.',
                   'You can delete your account and all data at any time.',
                   'End-to-end encryption for cloud-synced profiles.',
                   'Compliance with GDPR and CCPA standards.'
                 ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 text-slate-500 font-medium">
                       <span className="material-symbols-outlined text-primary">check_circle</span>
                       <span>{item}</span>
                    </div>
                 ))}
              </div>
              <div className="pt-8 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                 <div className="flex items-center space-x-3 opacity-30">
                    <span className="material-symbols-outlined text-sm text-slate-500">description</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Version 1.0.0 Privacy Policy</span>
                 </div>
                 <span className="text-slate-400 text-[10px] font-black">Last Updated: Feb 23, 2026</span>
              </div>
           </AnimatedSection>
        </div>

        <AnimatedSection className="max-w-4xl mx-auto space-y-12">
           <div className="max-w-none text-slate-500 font-medium leading-relaxed space-y-8">
              <h4 className="text-2xl font-black uppercase text-slate-900 dark:text-white tracking-tighter">1. Information Collection</h4>
              <p>We collect minimal information necessary to provide ballistics calculations. This includes bow technical specs, arrow weight, and chronographed speed. We do not collect names or identifiers unless you opt for Cloud Sync.</p>
              
              <h4 className="text-2xl font-black uppercase text-slate-900 dark:text-white tracking-tighter mt-12">2. Use of Information</h4>
              <p>Collected data is used solely for generating Kinetic Energy results and scoring suitability against game species. If Cloud Sync is enabled, this data is used to provide cross-device access to your bow library.</p>
              
              <h4 className="text-2xl font-black uppercase text-slate-900 dark:text-white tracking-tighter mt-12">3. Data Protection</h4>
              <p>We implement a variety of security measures to maintain the safety of your information. Your data is protected using SSL encryption and hosted on secure enterprise-grade servers.</p>
           </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Privacy;
