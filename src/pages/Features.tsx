import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

const Features: React.FC = () => {
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark pt-32 pb-20 overflow-hidden relative min-h-screen transition-colors blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="mb-16">
          <Badge variant="default" className="mb-6">
            <span className="material-symbols-outlined text-[12px] mr-1">architecture</span> SYSTEM.CAPABILITIES [v1.0]
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-800 dark:text-white mb-4">
            Technical <span className="text-primary italic">Features.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl font-medium text-lg">
            Documenting the architectural foundations of our ballistics engine and field synchronization infrastructure.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <AnimatedSection delay={0.1}>
            <Card className="group h-full">
              <CardContent className="p-8 pt-8">
                <div className="aspect-video mb-8 rounded-xl bg-primary/5 blueprint-x border border-dashed border-primary/20 flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform font-bold">architecture</span>
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-800 dark:text-white uppercase tracking-tighter">Precision Modeling</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                  Advanced physics simulation with sub-millimeter snapping. Automatically aligns your equipment profiles with kinetic constraints.
                </p>
                <Badge variant="outline">Kinetic_Modeling</Badge>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Card 2 */}
          <AnimatedSection delay={0.2} className="lg:row-span-2">
            <Card className="bg-primary text-white h-full border-none shadow-2xl shadow-primary/30 relative overflow-hidden flex flex-col justify-center p-10">
              <div className="absolute -right-10 -bottom-10 opacity-10 text-white">
                <span className="material-symbols-outlined text-[250px] font-bold">terminal</span>
              </div>
              <div className="relative z-10">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-8">CORE_MODULE</Badge>
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter leading-none">Field Data <br /> Export</h3>
                <p className="text-white/80 text-lg mb-10 leading-relaxed font-medium">
                  Generate production-ready ballistics documentation. Bridge the gap from laboratory specs to field execution with one tap.
                </p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full md:w-fit">
                  Copy Setup Spec
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Card 3 */}
          <AnimatedSection delay={0.3}>
            <Card className="h-full">
              <CardContent className="p-8 pt-8">
                <div className="aspect-square mb-8 rounded-xl bg-primary/5 blueprint-x border border-dashed border-primary/30 flex items-center justify-center overflow-hidden">
                   <span className="material-symbols-outlined text-primary text-5xl group-hover:rotate-12 transition-transform font-bold">hub</span>
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-800 dark:text-white uppercase tracking-tighter">Sync Infrastructure</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  Real-time profile synchronization with version control. Collaborate on equipment configurations across your entire team.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Card 4 */}
          <AnimatedSection delay={0.4}>
            <Card className="h-full">
              <CardContent className="p-8 pt-8">
                <div className="h-40 mb-8 rounded-xl bg-primary/5 blueprint-x border border-dashed border-primary/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-5xl font-bold">cloud_sync</span>
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-800 dark:text-white uppercase tracking-tighter">Cloud Sync</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  Full version history with branch management. All technical specs are synced securely across all devices.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Card 5 */}
          <AnimatedSection delay={0.5}>
            <Card className="h-full">
              <CardContent className="p-8 pt-8">
                <div className="h-40 mb-8 rounded-xl bg-primary/5 blueprint-x border border-dashed border-primary/30 flex flex-col items-center justify-center p-4">
                  <div className="w-full space-y-3">
                    <div className="h-3 bg-primary/20 rounded w-full"></div>
                    <div className="h-3 bg-primary/20 rounded w-5/6"></div>
                    <div className="h-3 bg-primary/20 rounded w-4/6"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-800 dark:text-white uppercase tracking-tighter">Component Library</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  Access over 500+ pre-calculated equipment components with architectural blueprint styling.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <div className="flex justify-center">
           <Button size="lg" className="h-16 px-12 rounded-2xl group">
              <span>Download Full Spec</span>
              <span className="material-symbols-outlined ml-2 group-hover:translate-y-1 transition-transform">download</span>
           </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
