import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, ArrowRight, Shield, Target } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

const Support: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-tactical-black min-h-screen py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-24">
          <div className="w-20 h-20 bg-safety-orange/10 border border-safety-orange/20 rounded-full flex items-center justify-center mx-auto mb-8">
             <MessageCircle className="h-10 w-10 text-safety-orange" />
          </div>
          <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-6">Technical Support</h1>
          <p className="text-xl text-white/40 font-medium">Have a question or need assistance? We're here to help.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 bg-tactical-gray p-12 rounded-3xl border border-white/5 items-start relative overflow-hidden">
          <AnimatedSection delay={0.2} className="space-y-12 pr-6">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">Get in Touch</h2>
            <div className="flex items-start space-x-6 p-8 bg-tactical-black border border-white/5 rounded-2xl hover:border-safety-orange/30 transition-all cursor-default group">
               <Mail className="h-8 w-8 text-safety-orange flex-shrink-0 group-hover:scale-110 transition-transform" />
               <div>
                  <h3 className="text-xl font-black italic uppercase tracking-tighter text-white mb-2">Email Support</h3>
                  <p className="text-white/50 font-bold text-xs uppercase italic tracking-widest select-all">support@bowballistics.com</p>
                  <p className="text-[10px] text-white/20 mt-4 font-black uppercase tracking-widest italic">Response time: &lt; 24h</p>
               </div>
            </div>

            <div className="p-10 bg-safety-orange text-white rounded-2xl shadow-2xl shadow-safety-orange/20 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
               <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 leading-tight">Professional Guidance.</h3>
               <p className="text-white/80 mb-6 font-bold text-sm leading-relaxed uppercase tracking-tight italic">
                 Your feedback helps us build the most accurate tool for the archery community. Let us know how we can improve.
               </p>
               <div className="h-1 w-12 bg-white/50 rounded-full" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="bg-tactical-black p-10 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-safety-orange/5 rounded-bl-full -mr-16 -mt-16" />
            
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black italic text-white/40 mb-2 uppercase tracking-[0.3em]">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-5 py-4 bg-tactical-gray border border-white/10 rounded-lg focus:ring-2 focus:ring-safety-orange focus:border-transparent outline-none transition-all font-bold text-white placeholder:text-white/20 italic tracking-widest text-xs uppercase"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-black italic text-white/40 mb-2 uppercase tracking-[0.3em]">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-5 py-4 bg-tactical-gray border border-white/10 rounded-lg focus:ring-2 focus:ring-safety-orange focus:border-transparent outline-none transition-all font-bold text-white placeholder:text-white/20 italic tracking-widest text-xs uppercase"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] font-black italic text-white/40 mb-2 uppercase tracking-[0.3em]">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-5 py-4 bg-tactical-gray border border-white/10 rounded-lg focus:ring-2 focus:ring-safety-orange focus:border-transparent outline-none transition-all font-bold text-white placeholder:text-white/20 resize-none italic tracking-widest text-xs uppercase"
                    placeholder="Describe your issue..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 text-sm group"
                >
                  Send Message
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            ) : (
              <div className="text-center py-16 space-y-6 animate-in fade-in zoom-in duration-500 relative z-10">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-safety-orange/10 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="h-10 w-10 text-safety-orange" />
                  </div>
                </div>
                <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Message Received!</h2>
                <p className="text-white/40 text-sm font-bold leading-relaxed uppercase tracking-tighter italic">
                  Thank you for reaching out. A technician from the Bow Ballistics team will be in touch with you shortly.
                </p>
                <button
                   onClick={() => setFormSubmitted(false)}
                   className="mt-12 text-white/30 font-black italic uppercase tracking-widest hover:text-safety-orange transition-colors flex items-center justify-center mx-auto group text-[10px]"
                >
                  New Support Ticket <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </AnimatedSection>
        </div>
        
        {/* Help Badges */}
        <div className="mt-20 flex flex-wrap justify-center gap-8">
           {[
             { label: 'Cloud Status', value: 'Operational', icon: <Shield className="h-4 w-4 text-green-500" /> },
             { label: 'API Version', value: 'v1.0.0', icon: <Target className="h-4 w-4 text-safety-orange" /> },
             { label: 'System Uptime', value: '99.9%', icon: <Target className="h-4 w-4 text-safety-orange" /> }
           ].map((badge, i) => (
             <div key={i} className="flex items-center space-x-2 px-6 py-3 bg-tactical-gray border border-white/5 rounded-full">
                {badge.icon}
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{badge.label}:</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">{badge.value}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
