import React from 'react';
import { ShieldCheck, Mail, Lock, Database, Target } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Privacy: React.FC = () => {
  return (
    <div className="bg-tactical-black min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-24">
          <div className="w-20 h-20 bg-safety-orange/10 border border-safety-orange/20 rounded-full flex items-center justify-center mx-auto mb-8">
             <ShieldCheck className="h-10 w-10 text-safety-orange" />
          </div>
          <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-white/40 font-medium">Your setup. Your data. Your privacy.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="bg-tactical-gray p-12 rounded-3xl border border-white/5 shadow-2xl">
          <p className="mb-12 font-black text-safety-orange uppercase tracking-[0.3em] text-[10px]">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-6 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-safety-orange" />
                Data Integrity
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed font-medium">
                At Bow Ballistics, we understand that your bow setups and hunting configurations are private. This policy details our commitment to data security and transparency.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-6 flex items-center">
                 <Database className="h-6 w-6 mr-3 text-safety-orange" />
                 Information Collection
              </h2>
              <p className="text-white/50 mb-6 leading-relaxed font-medium">
                To provide cloud synchronization across your iOS devices, we collect specific data points:
              </p>
              <ul className="space-y-4 text-white/50 font-bold text-sm italic uppercase tracking-widest">
                <li className="flex items-center space-x-3"><Target className="h-4 w-4 text-safety-orange" /><span>Secure User Credentials (bcrypt hashed)</span></li>
                <li className="flex items-center space-x-3"><Target className="h-4 w-4 text-safety-orange" /><span>Bow Specifications (Brand, Model, Speed)</span></li>
                <li className="flex items-center space-x-3"><Target className="h-4 w-4 text-safety-orange" /><span>Arrow Ballistics Data (Weight, KE logs)</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-6 flex items-center">
                 <Mail className="h-6 w-6 mr-3 text-safety-orange" />
                 Communications
              </h2>
              <p className="text-white/50 mb-6 leading-relaxed font-medium">
                We use your email exclusively for account management and password reset operations via the Resend API. We do not share your contact information with third-party advertisers.
              </p>
              <p className="font-black text-white bg-safety-orange inline-block px-4 py-2 rounded-sm text-xs italic tracking-widest uppercase">
                privacy@bowballistics.com
              </p>
            </section>
          </div>
          
          <div className="mt-16 p-8 bg-tactical-black border border-white/5 rounded-xl">
             <h3 className="text-sm font-black italic uppercase tracking-widest text-white mb-4">Compliance Notice</h3>
             <p className="text-white/30 text-xs font-bold leading-relaxed uppercase tracking-tighter">
               This Privacy Policy is designed to comply with iOS App Store Review guidelines. For specific GDPR or CCPA requests, contact our legal department at the address provided above.
             </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Privacy;
