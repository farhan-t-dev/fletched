import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Support: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-stone min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MessageCircle className="h-16 w-16 text-forest mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-forest mb-6 tracking-tight">Support & Contact</h1>
          <p className="text-lg text-forest/70 font-medium">Have a question or need assistance? We're here to help.</p>
          <div className="h-1.5 w-24 bg-gold mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-forest/5 p-12 rounded-3xl border border-forest/5 items-start">
          <div className="space-y-12 pr-6">
            <h2 className="text-3xl font-bold text-forest mb-8 tracking-tight">Get in Touch</h2>
            <div className="flex items-start space-x-6 p-6 bg-stone rounded-2xl border border-forest/10 hover:border-gold/30 transition-all">
               <Mail className="h-8 w-8 text-gold flex-shrink-0" />
               <div>
                  <h3 className="text-xl font-bold text-forest mb-2">Email Us</h3>
                  <p className="text-forest/70 font-medium">support@fletchedapp.com</p>
                  <p className="text-xs text-forest/40 mt-2 italic font-semibold uppercase tracking-widest">Average response time: &lt; 24h</p>
               </div>
            </div>

            <div className="p-10 bg-forest text-stone rounded-2xl shadow-xl transform -rotate-1">
               <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight">We value your feedback.</h3>
               <p className="text-stone/70 mb-6 font-medium">
                 Your insights help us build the best possible tool for the archery community. Let us know how we can improve.
               </p>
            </div>
          </div>

          <div className="bg-stone p-10 rounded-3xl shadow-2xl border border-forest/5">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-forest mb-3 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-5 py-4 bg-forest/5 border border-forest/10 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all font-medium text-forest"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-forest mb-3 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-5 py-4 bg-forest/5 border border-forest/10 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all font-medium text-forest"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-forest mb-3 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-5 py-4 bg-forest/5 border border-forest/10 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all font-medium text-forest"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-10 py-5 bg-forest text-stone text-xl font-bold rounded-xl shadow-xl hover:bg-forest/90 transition-all group"
                >
                  Send Message
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="text-center py-16 space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center">
                  <CheckCircle className="h-24 w-24 text-gold mb-6 animate-bounce" />
                </div>
                <h2 className="text-3xl font-bold text-forest tracking-tight">Message Received!</h2>
                <p className="text-forest/70 text-lg font-medium leading-relaxed">
                  Thank you for reaching out. A member of the Fletched team will be in touch with you shortly.
                </p>
                <button
                   onClick={() => setFormSubmitted(false)}
                   className="mt-12 text-forest/50 font-bold hover:text-gold transition-colors underline underline-offset-8"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
