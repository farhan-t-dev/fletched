import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Security: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-20 transition-colors">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Security Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-12">Last Updated: February 25, 2026</p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">1. Data Protection</h2>
              <p>We implement industry-standard administrative, technical, and physical security measures to protect your information. This includes SSL/TLS encryption for data in transit and secure server storage. We prioritize the integrity and safety of all user-inputted data and calculations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">2. User Responsibility</h2>
              <p>Security is a shared responsibility. You are responsible for maintaining the confidentiality of your account password. If you suspect a breach or unauthorized access to your account, you must notify Fletched support immediately.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">3. Limitation of Liability</h2>
              <p>While we take every reasonable precaution, no method of electronic transmission or storage is 100% secure. By using Fletched, you acknowledge that we cannot guarantee absolute security and that you provide your information at your own risk. Fletched shall not be held liable for unauthorized access to data resulting from circumstances beyond our reasonable control.</p>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Data Sharing Preferences</h2>
              <p className="mb-6">Transparency is key to our security and privacy practices. We may share anonymized, aggregated data with bow manufacturers to improve industry standards. We will never sell your personal contact information without your explicit consent.</p>
              
              <div className="flex items-center gap-6">
                <button 
                   onClick={() => setIsEnabled(!isEnabled)}
                   className={`relative w-14 h-8 rounded-full transition-colors duration-300 flex items-center px-1 ${isEnabled ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                >
                   <div className={`size-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Anonymized Data Contribution: <strong>{isEnabled ? 'Enabled' : 'Disabled'}</strong>
                </span>
              </div>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Security;
