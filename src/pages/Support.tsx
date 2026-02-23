import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Support: React.FC = () => {
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark pt-32 pb-20 overflow-hidden relative min-h-screen transition-colors blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-3xl mb-24">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-sm">support_agent</span> SYSTEM.SUPPORT [v1.0]
           </div>
           <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter mb-10 text-slate-900 dark:text-white">
             Field <br />
             <span className="text-primary italic">Support.</span>
           </h1>
           <p className="text-2xl text-slate-500 leading-relaxed font-medium">
             Our team of archers and engineers is here to help you get the most out of Fletched.
           </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
           <AnimatedSection className="space-y-12">
              <div className="grid gap-8">
                 {[
                   { 
                     title: 'Technical Support', 
                     icon: <span className="material-symbols-outlined">help</span>, 
                     desc: 'Facing issues with your bow profiles or KE calculations? Our support team is available 24/7.',
                     contact: 'support@fletched.archery'
                   },
                   { 
                     title: 'App Feedback', 
                     icon: <span className="material-symbols-outlined">chat</span>, 
                     desc: 'Have an idea for a feature or want to see a new species added to our database?',
                     contact: 'feedback@fletched.archery'
                   },
                   { 
                     title: 'Business Inquiries', 
                     icon: <span className="material-symbols-outlined">mail</span>, 
                     desc: 'Partnering with manufacturers or range owners interested in Fletched Pro.',
                     contact: 'partners@fletched.archery'
                   }
                 ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 hover:border-primary transition-all group shadow-sm">
                       <div className="flex items-center space-x-4 mb-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                             {item.icon}
                          </div>
                          <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">{item.title}</h4>
                       </div>
                       <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">{item.desc}</p>
                       <a href={`mailto:${item.contact}`} className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:brightness-110 transition-all border-b border-primary/20 pb-1">{item.contact}</a>
                    </div>
                 ))}
              </div>
           </AnimatedSection>

           <AnimatedSection delay={0.2} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[3rem] p-12 shadow-2xl relative blueprint-x">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-900 dark:text-white">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                       <input type="text" placeholder="Your Name" className="w-full h-14 bg-background-light dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 text-sm font-medium focus:outline-none focus:border-primary transition-all placeholder:text-slate-400 dark:text-white outline-none" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                       <input type="email" placeholder="Your Email" className="w-full h-14 bg-background-light dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 text-sm font-medium focus:outline-none focus:border-primary transition-all placeholder:text-slate-400 dark:text-white outline-none" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">How can we help?</label>
                    <textarea placeholder="Tell us what you need..." rows={4} className="w-full bg-background-light dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-sm font-medium focus:outline-none focus:border-primary transition-all placeholder:text-slate-400 dark:text-white outline-none resize-none" />
                 </div>
                 <button className="w-full h-16 bg-primary rounded-2xl font-black uppercase tracking-widest text-lg text-white hover:brightness-110 transition-all shadow-xl shadow-primary/20 active:scale-95 group flex items-center justify-center space-x-3">
                    <span>Send Transmission</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
                 </button>
              </form>
           </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Support;
