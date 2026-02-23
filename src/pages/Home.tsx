import React, { useState, useEffect, useRef } from 'react';
import { Target, Zap, Shield, Database, ArrowDown, Activity, Settings } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);

  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Interactive KE Demo State
  const [arrowWeight, setArrowWeight] = useState(450);
  const [bowSpeed, setBowSpeed] = useState(285);
  const [ke, setKe] = useState(0);

  useEffect(() => {
    // KE = (arrow weight × speed²) ÷ 450,240
    const calculatedKe = (arrowWeight * Math.pow(bowSpeed, 2)) / 450240;
    setKe(parseFloat(calculatedKe.toFixed(2)));
  }, [arrowWeight, bowSpeed]);

  const features = [
    {
      title: 'KE Calculation',
      description: 'Instant Kinetic Energy results using industry-standard ballistics formulas.',
      icon: <Zap className="h-6 w-6 text-safety-orange" />,
    },
    {
      title: '49 Game Species',
      description: 'Comprehensive data for Small, Medium, Large, and Dangerous game animals.',
      icon: <Target className="h-6 w-6 text-safety-orange" />,
    },
    {
      title: 'Scoring Algorithm',
      description: 'Proprietary scoring (0-100) based on ideal arrow weight for each animal.',
      icon: <Activity className="h-6 w-6 text-safety-orange" />,
    },
    {
      title: 'Cloud Sync',
      description: 'Sync up to 7 bow profiles across all your iOS devices with Supabase.',
      icon: <Database className="h-6 w-6 text-safety-orange" />,
    },
  ];

  return (
    <div className="flex flex-col bg-tactical-black overflow-hidden font-inter">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 border-b border-white/5">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-tactical-black/0 via-tactical-black/80 to-tactical-black z-10" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] scale-110" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.05)_0%,rgba(0,0,0,0)_60%)] animate-pulse" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div 
            style={{ opacity: heroOpacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-safety-orange">
              <span className="w-1.5 h-1.5 rounded-full bg-safety-orange animate-ping" />
              <span>Ballistics Ready / v1.0.0</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.8] transition-all">
              Precision<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-safety-orange to-[#FF8C66]">Ballistics</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto font-medium tracking-tight">
              The professional archery calculator for mobile. Evaluate your setup, track kinetic energy, and hunt ethically with the power of Bow Ballistics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="h-16 px-12 italic border-0">
                Download on App Store
              </Button>
              <Button size="lg" variant="secondary" className="h-16 px-12 italic font-black uppercase tracking-widest text-xs">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
           <ArrowDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* Calculator Demo Section */}
      <section id="demo" className="py-32 relative bg-tactical-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <AnimatedSection>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 text-white">
                  Real-Time<br />Calculation.
                </h2>
                <p className="text-xl text-white/50 mb-12 font-medium max-w-lg leading-relaxed">
                  Experience the precision. Adjust your arrow weight and bow speed to see instant Kinetic Energy (KE) calculations—just like in the app.
                </p>
                <div className="space-y-8">
                   <div className="space-y-4">
                      <div className="flex justify-between font-black uppercase tracking-widest text-[10px] text-white/40">
                         <span>Arrow Weight (grains)</span>
                         <span className="text-safety-orange">{arrowWeight} gr</span>
                      </div>
                      <input 
                        type="range" min="300" max="900" step="1" 
                        value={arrowWeight} 
                        onChange={(e) => setArrowWeight(Number(e.target.value))}
                        className="w-full accent-safety-orange bg-white/5 h-2 rounded-lg cursor-pointer appearance-none"
                      />
                   </div>
                   <div className="space-y-4">
                      <div className="flex justify-between font-black uppercase tracking-widest text-[10px] text-white/40">
                         <span>Bow Speed (fps)</span>
                         <span className="text-safety-orange">{bowSpeed} fps</span>
                      </div>
                      <input 
                        type="range" min="200" max="400" step="1" 
                        value={bowSpeed} 
                        onChange={(e) => setBowSpeed(Number(e.target.value))}
                        className="w-full accent-safety-orange bg-white/5 h-2 rounded-lg cursor-pointer appearance-none"
                      />
                   </div>
                </div>
             </AnimatedSection>

             <AnimatedSection className="relative">
                <div className="bg-tactical-black border-2 border-white/5 p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8">
                      <Zap className="h-12 w-12 text-safety-orange/20" />
                   </div>
                   <div className="relative z-10 text-center">
                      <h4 className="font-black uppercase tracking-widest text-[10px] text-white/40 mb-4">Calculated Kinetic Energy</h4>
                      <div className="text-8xl md:text-9xl font-black italic tracking-tighter text-white mb-2">
                         {ke}
                      </div>
                      <div className="text-safety-orange font-black uppercase tracking-[0.2em] text-sm">
                         ft-lbs of kinetic energy
                      </div>
                   </div>
                   
                   <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 gap-8">
                      <div className="text-center">
                         <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Game Class</div>
                         <div className="text-xl font-bold text-white uppercase italic">Large Game</div>
                      </div>
                      <div className="text-center">
                         <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Setup Status</div>
                         <div className="text-xl font-bold text-green-500 uppercase italic">Ready</div>
                      </div>
                   </div>
                </div>
                {/* Visual HUD decor */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-safety-orange" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-safety-orange" />
             </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 text-white">Built for the Hunt.</h2>
            <p className="text-xl text-white/50 font-medium">
              A comprehensive toolset designed for professional archers who demand reliability and precision.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="group">
                <div className="h-full p-10 bg-tactical-gray border border-white/5 rounded-2xl hover:bg-tactical-light hover:border-safety-orange/50 transition-all duration-300">
                  <div className="mb-8 w-14 h-14 bg-safety-orange/10 border border-safety-orange/20 rounded-lg flex items-center justify-center group-hover:bg-safety-orange group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/40 font-medium text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-32 relative bg-tactical-gray border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <AnimatedSection className="lg:w-1/2">
                  <div className="relative group">
                     {/* Mockup */}
                     <div className="relative w-[300px] h-[600px] mx-auto bg-black rounded-[3rem] border-[12px] border-tactical-light overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-0 bg-tactical-black p-6 pt-12">
                           <div className="flex justify-between items-center mb-12">
                              <Target className="h-6 w-6 text-safety-orange" />
                              <Settings className="h-6 w-6 text-white/20" />
                           </div>
                           <div className="space-y-6">
                              <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                              <div className="h-[200px] w-full bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                                 <div className="text-4xl font-black text-safety-orange">94.2</div>
                              </div>
                              <div className="space-y-4 pt-4">
                                 {[1,2,3].map(i => (
                                    <div key={i} className="h-12 w-full bg-white/5 border border-white/10 rounded-xl" />
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* Decorative overlays */}
                     <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-safety-orange/10 blur-[120px] rounded-full" />
                  </div>
               </AnimatedSection>
               
               <AnimatedSection className="lg:w-1/2 space-y-12">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 text-white">Cloud Synced Bow Profiles.</h2>
                    <p className="text-xl text-white/50 font-medium max-w-lg leading-relaxed mb-8">
                      Manage up to 7 unique bow configurations. Set a default bow that auto-populates the calculator, and sync everything securely with your account.
                    </p>
                    <ul className="space-y-4">
                       {[
                         'Full bow specifications (Brand, Model, Draw weight)',
                         'Broadhead and arrow weight tracking',
                         'Automatic default bow population',
                         'Secure PostgreSQL / Supabase backend'
                       ].map((item, i) => (
                         <li key={i} className="flex items-center space-x-3 text-white/70 font-bold text-sm italic uppercase tracking-widest">
                            <Shield className="h-5 w-5 text-safety-orange" />
                            <span>{item}</span>
                         </li>
                       ))}
                    </ul>
                  </div>
                  <Button size="lg" className="h-16 px-12 italic border-0">
                    Get Started Free
                  </Button>
               </AnimatedSection>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-safety-orange opacity-5 pointer-events-none" />
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
               <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 text-white">Aim Small. Miss Small.</h2>
               <p className="text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-medium">
                 Ready to optimize your archery setup? Download the only calculator designed for the modern hunter.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Button size="lg" className="h-20 px-16 text-xl">
                    App Store
                 </Button>
                 <Button size="lg" variant="outline" className="h-20 px-16 text-xl border-white/10 text-white hover:bg-white/5">
                    Contact Sales
                 </Button>
               </div>
            </AnimatedSection>
         </div>
      </section>
    </div>
  );
};

export default Home;
