import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-20 transition-colors">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-12">Last Updated: February 25, 2026</p>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">To provide the most accurate Arrow Ballistic Score (ABS), we collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, and login credentials.</li>
                <li><strong>Archery Data:</strong> Arrow weight, velocity, bow specifications, and equipment brands.</li>
                <li><strong>Biological/Usage Data:</strong> Specific species hunted and environment-related inputs.</li>
                <li><strong>Device Data:</strong> IP address, device type, operating system, and app usage statistics via cookies or similar tracking technologies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">2. How We Use Your Data</h2>
              <p className="mb-4">We use the information collected to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Operate and improve the Fletched algorithms and user experience.</li>
                <li>Provide personalized ABS and Pass Through Index (PTI) results.</li>
                <li><strong>Marketing and Analytics:</strong> We may use anonymized, aggregated data to identify hunting trends or for targeted promotional offers from Fletched or our partners.</li>
                <li>Communicate updates, safety alerts, and support.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">By using Fletched, you agree that we may share data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>With Service Providers:</strong> We share data with third-party vendors who help us with hosting, analytics, and email delivery.</li>
                <li><strong>Business Transfers:</strong> If Fletched is involved in a merger or sale, your data may be transferred as a business asset.</li>
                <li><strong>Legal Requirements:</strong> We reserve the right to disclose data if required by law or to protect the safety and rights of Fletched and its users.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">4. User Rights and Choices</h2>
              <p>You can update your account information at any time within the app. While we strive to give you control over your data, certain data is necessary for the app to function. You may request account deletion at any time, subject to our data retention policies for legal compliance.</p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Privacy;
