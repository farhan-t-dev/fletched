import React from 'react';
import { ArrowDownCircle, Target, Compass, Users } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      title: 'Precision Tracking',
      description: 'Log every shot with precision, and track your performance in real-time in any environment.',
      icon: <Target className="h-8 w-8 text-gold" />,
    },
    {
      title: 'Outdoor Map Mastery',
      description: 'Advanced maps tailored for archers, showing wind patterns, terrain details, and more.',
      icon: <Compass className="h-8 w-8 text-gold" />,
    },
    {
      title: 'Connect & Share',
      description: 'Join a community of dedicated archers and hunters to share insights and achievements.',
      icon: <Users className="h-8 w-8 text-gold" />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-forest text-stone pt-20 pb-32">
        {/* Subtle texture overlay placeholder */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F9F7F2_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center md:text-left md:flex md:items-center">
            <div className="md:w-3/5">
              <span className="inline-block px-3 py-1 bg-stone/10 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-stone/70">
                Precision for the Outdoor Archer
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
                Aim for Perfection.<br />
                Hit the Bullseye.
              </h1>
              <p className="text-xl md:text-2xl text-stone/70 mb-10 max-w-2xl font-light">
                Fletched is the archery companion that elevates your outdoor and hunting experience. Precise tracking, powerful insights, and dedicated community in your pocket.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-stone text-forest text-lg font-bold rounded-lg shadow-lg hover:bg-stone/90 transition-all transform hover:-translate-y-1">
                  Download on the App Store
                </a>
                <a href="#about" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-stone/30 text-stone text-lg font-bold rounded-lg hover:bg-stone/10 transition-all">
                  Learn More
                </a>
              </div>
            </div>
            {/* App Screen Mockup Placeholder */}
            <div className="hidden md:flex md:w-2/5 justify-end relative mt-12 md:mt-0">
              <div className="w-64 h-[520px] bg-stone/5 border-4 border-stone/20 rounded-[3rem] shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 w-full h-8 bg-stone/10" />
                <div className="p-8 pt-12">
                   <div className="w-full h-12 bg-stone/20 rounded mb-4" />
                   <div className="w-2/3 h-4 bg-stone/20 rounded mb-2" />
                   <div className="w-full h-4 bg-stone/20 rounded mb-8" />
                   <div className="w-full aspect-square bg-forest/50 rounded-xl mb-4 flex items-center justify-center">
                      <Target className="h-20 w-20 text-stone/20" />
                   </div>
                   <div className="w-full h-12 bg-gold/30 rounded" />
                </div>
              </div>
              {/* Floating element 1 */}
              <div className="absolute -left-12 bottom-20 w-48 p-4 bg-earth rounded-xl shadow-xl text-stone/90 text-sm font-semibold flex items-center space-x-3 transform -rotate-6 border border-stone/10">
                <div className="w-8 h-8 rounded-full bg-gold/40 flex items-center justify-center"><ArrowDownCircle className="h-5 w-5" /></div>
                <span>98% Accuracy Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-forest mb-6 tracking-tight">Built for the Hunt</h2>
            <div className="h-1.5 w-24 bg-gold mx-auto mb-8 rounded-full" />
            <p className="text-lg text-forest/70 font-medium">
              We understand that the field requires different tools. Fletched was built from the ground up to support archers in the wilderness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="p-10 bg-forest/5 rounded-3xl border border-forest/5 hover:border-gold/30 transition-all group">
                <div className="mb-6 p-4 inline-block bg-forest text-stone rounded-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-forest mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-forest/70 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-earth text-stone relative overflow-hidden">
         <div className="absolute inset-0 opacity-5 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#F9F7F2_20px,#F9F7F2_21px)]" />
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">Elevate your game today.<br /> Download Fletched.</h2>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center">
              <a href="#" className="w-full sm:w-auto px-10 py-5 bg-stone text-forest text-xl font-bold rounded-xl shadow-xl hover:scale-105 transition-all">
                Get on App Store
              </a>
              <a href="/support" className="w-full sm:w-auto px-10 py-5 bg-forest text-stone text-xl font-bold rounded-xl shadow-xl border border-stone/10 hover:bg-forest/80 transition-all">
                Need Help?
              </a>
            </div>
            <p className="mt-8 text-stone/50 font-medium italic">
              Available exclusively for iOS.
            </p>
         </div>
      </section>
    </div>
  );
};

export default Home;
