import React from 'react';
import { ShieldCheck, Mail, Lock, Database } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-stone min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ShieldCheck className="h-16 w-16 text-forest mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-forest mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-forest/70 font-medium">Your data, your privacy, your peace of mind.</p>
          <div className="h-1.5 w-24 bg-gold mx-auto mt-8 rounded-full" />
        </div>

        <div className="prose prose-forest prose-lg max-w-none bg-forest/5 p-12 rounded-3xl border border-forest/5">
          <p className="mb-6 font-semibold text-forest/80 italic">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-bold text-forest mt-10 mb-4 tracking-tight flex items-center">
            <Lock className="h-6 w-6 mr-3 text-gold" />
            Introduction
          </h2>
          <p className="text-forest/70 mb-8 leading-relaxed font-medium">
            At Fletched, we take your privacy seriously. This policy explains how we collect, use, and protect your information when you use our mobile application and related services.
          </p>

          <h2 className="text-2xl font-bold text-forest mt-10 mb-4 tracking-tight flex items-center">
             <Database className="h-6 w-6 mr-3 text-gold" />
             Information We Collect
          </h2>
          <p className="text-forest/70 mb-4 leading-relaxed font-medium">
            We collect information that you provide directly to us when you create an account, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-forest/70 mb-8 font-medium">
            <li>Name and email address</li>
            <li>Archery performance data (shot logs, scores)</li>
            <li>Location data (only if you grant permission for mapping features)</li>
            <li>Device information and usage statistics</li>
          </ul>

          <h2 className="text-2xl font-bold text-forest mt-10 mb-4 tracking-tight">How We Use Your Data</h2>
          <p className="text-forest/70 mb-8 leading-relaxed font-medium">
            Your data is used to provide and improve our services, including personalized performance insights and mapping tools. We do not sell your personal data to third parties.
          </p>

          <h2 className="text-2xl font-bold text-forest mt-10 mb-4 tracking-tight flex items-center">
             <Mail className="h-6 w-6 mr-3 text-gold" />
             Contact Us
          </h2>
          <p className="text-forest/70 mb-4 leading-relaxed font-medium">
            If you have any questions about this Privacy Policy, please contact our privacy officer at:
          </p>
          <p className="font-bold text-forest mb-12">
            privacy@fletchedapp.com
          </p>
          
          <div className="mt-12 p-8 bg-forest text-stone rounded-2xl">
             <h3 className="text-xl font-bold mb-4">Compliance Notice</h3>
             <p className="text-stone/70 text-sm font-medium">
               This Privacy Policy is intended for the purpose of iOS App Store Review compliance and follows general industry standards for mobile application privacy transparency.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
