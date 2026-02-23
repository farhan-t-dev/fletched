import React from 'react';
import { Apple } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Home: React.FC = () => {
  const stats = [
    { label: 'Technical Simulations', value: '1.2M+' },
    { label: 'Active Archers', value: '12K+' },
    { label: 'Layout Precision', value: '0.01mm' },
    { label: 'Species Catalog', value: '49+' },
  ];

  return (
    <div className="flex flex-col overflow-hidden relative blueprint-grid">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedSection className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm font-bold">analytics</span> Production Environment / v1.0.8
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-800 dark:text-white">
              Archery Ballistics <br />
              <span className="text-primary italic">Refined</span>.
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
              A high-fidelity drafting environment for modern archers. Bridge the gap between raw kinetic data and field execution with architectural precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center gap-2 shadow-lg shadow-primary/20">
                Start Analysis <span className="material-symbols-outlined font-bold">arrow_forward</span>
              </button>
              <button className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-xl font-bold text-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-800 dark:text-white">
                Technical Docs
              </button>
            </div>
            <div className="flex items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="size-10 rounded-full border-2 border-background-light dark:border-background-dark bg-slate-300 bg-cover" style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=${i+10}')` }}></div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500">Validated by <span className="text-slate-900 dark:text-slate-100 font-bold">12,000+</span> Professional Archers</p>
            </div>
          </AnimatedSection>

          {/* Hero Mockup Container */}
          <AnimatedSection delay={0.2} className="relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3.5rem] p-3 shadow-2xl border-[12px] border-slate-800 dark:border-slate-950 ring-1 ring-slate-400/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-900 rounded-b-3xl z-20"></div>
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute inset-0 blueprint-grid opacity-20"></div>
                <div className="relative h-full flex flex-col p-6">
                  <div className="mt-8 space-y-4">
                    <div className="w-2/3 h-6 bg-primary/10 rounded-full"></div>
                    <div className="w-full aspect-[9/16] border-2 border-dashed border-primary/30 rounded-3xl bg-primary/5 flex flex-col items-center justify-center group/screen cursor-pointer hover:bg-primary/10 transition-colors overflow-hidden">
                      <span className="material-symbols-outlined text-primary/40 text-5xl mb-2">target</span>
                      <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Setup Scoring</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                      <div className="h-2 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-[14px] top-28 w-[4px] h-12 bg-slate-800 rounded-l-lg"></div>
              <div className="absolute -left-[14px] top-44 w-[4px] h-16 bg-slate-800 rounded-l-lg"></div>
              <div className="absolute -right-[14px] top-44 w-[4px] h-24 bg-slate-800 rounded-r-lg"></div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-primary/20 shadow-xl text-[10px] font-mono z-30">
              <span className="text-primary font-bold">DEVICE:</span> iPhone 15 Pro
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white/50 dark:bg-slate-900/30 border-y border-primary/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center group">
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white group-hover:text-primary transition-all group-hover:scale-110 duration-300">{stat.value}</div>
                <div className="text-[11px] font-black text-slate-500 tracking-[0.3em] uppercase mt-3">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Masonry Grid */}
      <section className="py-24 px-4 bg-white/50 dark:bg-slate-900/10" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight text-primary mb-2">Technical Capabilities</h2>
            <p className="text-slate-500">Documenting the architectural foundations of our ballistics engine.</p>
          </div>
          <div className="masonry-grid">
            {/* Card 1 */}
            <div className="masonry-item bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-primary transition-all group shadow-sm">
              <div className="aspect-video mb-6 rounded-lg bg-primary/5 blueprint-x border border-dashed border-primary/20 flex items-center justify-center relative">
                <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform font-bold">architecture</span>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-primary/40 uppercase">Module_01</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Precision Modeling</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Advanced physics simulation with sub-millimeter snapping. Automatically aligns your equipment profiles with kinetic constraints.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded uppercase tracking-wider">Kinetic_Modeling</span>
                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded uppercase tracking-wider">Physics_Sim</span>
              </div>
            </div>

            {/* Card 4 (Primary Highlight) */}
            <div className="masonry-item bg-primary text-white rounded-xl p-8 group relative overflow-hidden shadow-xl">
              <div className="absolute -right-4 -bottom-4 opacity-10 text-white">
                <span className="material-symbols-outlined text-[120px] font-bold">terminal</span>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Field Data Export</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed font-medium">
                Generate production-ready ballistics documentation. Bridge the gap from laboratory specs to field execution.
              </p>
              <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">Copy Setup Spec</button>
            </div>

            {/* Card 2 */}
            <div className="masonry-item bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-primary transition-all group shadow-sm">
              <div className="aspect-square mb-6 rounded-lg bg-primary/5 blueprint-x border border-dashed border-primary/30 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-full h-px bg-primary/20 rotate-45"></div>
                  <div className="absolute w-full h-px bg-primary/20 -rotate-45"></div>
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:rotate-12 transition-transform font-bold">hub</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Sync Infrastructure</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Real-time profile synchronization with version control. Collaborate on equipment configurations across your entire team.
              </p>
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-primary flex items-center justify-center text-[8px] text-white font-bold">JD</div>
                <span className="text-xs font-mono text-slate-400">Updating Setup.spec...</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="masonry-item bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-primary transition-all group shadow-sm">
              <div className="h-48 mb-6 rounded-lg bg-primary/5 blueprint-x border border-dashed border-primary/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl font-bold">cloud_sync</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Cloud Sync</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Full version history with branch management. All technical specs are synced securely across all devices.
              </p>
            </div>

            {/* Card 5 */}
            <div className="masonry-item bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-primary transition-all group shadow-sm">
              <div className="h-64 mb-6 rounded-lg bg-primary/5 blueprint-x border border-dashed border-primary/30 flex flex-col items-center justify-center p-4">
                <div className="w-full space-y-4">
                  <div className="h-4 bg-primary/20 rounded w-full"></div>
                  <div className="h-4 bg-primary/20 rounded w-5/6"></div>
                  <div className="h-4 bg-primary/20 rounded w-4/6"></div>
                  <div className="h-4 bg-primary/20 rounded w-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Component Library</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Access over 500+ pre-calculated equipment components with architectural blueprint styling.
              </p>
              <div className="text-[10px] font-mono text-primary bg-primary/10 p-2 rounded">
                import {'{ Profile, Spec, Asset }'} from "FletchedKit"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Process */}
      <section className="py-24 px-4 relative" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-slate-800 dark:text-white">The Analysis Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">From raw data input to production-ready specifications in three technical phases.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px border-t border-dashed border-primary/20 z-0"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="size-24 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center shadow-xl mb-6 group hover:bg-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors font-bold">analytics</span>
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-800 dark:text-white">1. Data Entry</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm px-6">Input your raw technical specifications into our high-fidelity drafting environment.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="size-24 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center shadow-xl mb-6 group hover:bg-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors font-bold">model_training</span>
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-800 dark:text-white">2. Simulation</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm px-6">Apply physics-based constraints and architectural rules to refine your equipment profile.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="size-24 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center shadow-xl mb-6 group hover:bg-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors font-bold">ios_share</span>
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-slate-800 dark:text-white">3. Export</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm px-6">Generate technical documentation and assets ready for real-world field deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-forest-black text-white relative overflow-hidden" id="faq">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Technical Support / FAQ</h2>
            <p className="text-primary-light font-mono text-xs uppercase tracking-[0.2em]">System.Questions_and_Answers [v1.0]</p>
          </div>
          <div className="space-y-6">
            {[
              { q: 'How accurate is the ballistics generation?', a: 'Our export engine generates production-ready archery specs with 99.9% accuracy. It maps blueprint constraints directly to field conditions.' },
              { q: 'Can I import existing setup data?', a: 'Currently, Fletched is a dedicated drafting tool focused on precision from scratch. We support PNG/SVG reference overlays to help you reconstruct setups.' },
              { q: 'Does it support collaborative real-time editing?', a: 'Yes. Multiple archers can work on the same .spec file simultaneously with sub-millisecond cursor synchronization.' }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group">
                <div className="flex gap-4">
                  <span className="text-primary-light font-mono text-sm">[{i+1 < 10 ? `0${i+1}` : i+1}]</span>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">{faq.q}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 flex justify-center">
            <p className="text-slate-500 text-[10px] font-mono">END_OF_DOCUMENT // CONTACT_SUPPORT_FOR_ADDITIONAL_LOGS</p>
          </div>
        </div>
      </section>

      {/* App Store CTA Section */}
      <section id="download" className="py-32 px-4 bg-background-light dark:bg-background-dark text-slate-800 dark:text-white relative overflow-hidden z-10 border-t border-primary/10">
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-10">
                  <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
                    Hunt With <br /><span className="text-primary">Precision.</span>
                  </h2>
                  <p className="text-xl text-slate-500 max-w-lg font-medium leading-relaxed">
                    The ultimate archery calculator for the modern backcountry hunter. Join thousands of archers who trust Fletched.
                  </p>
                  <div className="flex flex-wrap gap-6 pt-4">
                     <button className="flex items-center space-x-5 bg-primary text-white px-10 py-6 rounded-3xl hover:brightness-110 transition-all group shadow-2xl shadow-primary/20 active:scale-95">
                        <Apple className="w-10 h-10" />
                        <div className="text-left">
                           <div className="text-[11px] uppercase font-black tracking-[0.2em] opacity-70">Coming Soon to</div>
                           <div className="font-black italic uppercase tracking-tighter text-2xl leading-none mt-1">App Store</div>
                        </div>
                     </button>
                  </div>
               </div>
               
               <AnimatedSection className="relative lg:h-[600px] flex items-center justify-center">
                  <div className="bg-slate-900 rounded-[4rem] p-4 border-2 border-white/5 shadow-2xl relative rotate-3 group hover:rotate-0 transition-all duration-700">
                     <div className="bg-slate-950 w-[300px] h-[600px] rounded-[3.5rem] p-10 flex flex-col items-center justify-center border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                        <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center animate-spin-slow">
                           <span className="material-symbols-outlined text-4xl text-primary font-bold">target</span>
                        </div>
                        <div className="mt-12 text-center">
                           <div className="text-2xl font-black italic text-white uppercase tracking-widest">Target Acquired</div>
                           <div className="text-primary-light/60 text-[10px] font-black uppercase tracking-[0.4em] mt-3 animate-pulse">Scanning Field...</div>
                        </div>
                     </div>
                  </div>
               </AnimatedSection>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
