import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Terms: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-20 transition-colors">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-12">Effective Date: February 25, 2026</p>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300">
            <p>By using the Fletched mobile application and website (“The Service”), you agree to be bound by the following terms. If you do not agree, do not use the service.</p>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">1. Nature of the Service</h2>
              <p>Fletched is a ballistics tool designed to provide estimates for archery performance based on user-inputted data. Calculations including, but not limited to, the Arrow Ballistic Score (ABS), Pass Through Index (PTI), and Flinch Rate are mathematical models and are intended for educational and optimization purposes only.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">2. User Responsibility & Safety</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Knowledge of Equipment:</strong> You are solely responsible for knowing your equipment’s limits. Fletched is not responsible for any damage to bows, arrows, or accessories resulting from configurations suggested by the app.</li>
                <li><strong>Field Use:</strong> Ballistics change based on environmental factors. You should always verify your setup on a physical range before attempting a hunt.</li>
                <li><strong>Weapon Safety:</strong> You agree to follow all local hunting laws and standard weapon safety protocols. Fletched does not advocate for unsafe shooting practices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">3. Assumption of Risk & "No Guarantee"</h2>
              <p className="mb-4">Archery involves live animals and unpredictable environments.</p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Flinch Rate Disclaimer:</strong> While Fletched quantifies animal reaction times, we cannot predict the behavior of every individual animal. A "High ABS" score does not guarantee a hit or an ethical kill.</li>
                <li><strong>Biological Variables:</strong> Calculations involving bone density and body composition are estimates. Real-world results may vary. You assume all risk associated with the shot taken in the field.</li>
              </ul>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Limitation of Liability</h2>
              <p className="mb-4 font-semibold italic uppercase text-xs tracking-wide opacity-80">Hold Harmless Clause</p>
              <p className="mb-4">To the maximum extent permitted by law, Fletched, its developers, and its affiliates shall not be liable for any direct, indirect, or incidental damages, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-sm">
                <li>Personal injury or death resulting from the use of archery equipment.</li>
                <li>Loss of or damage to property (bows, arrows, etc.).</li>
                <li>"Wounded-but-not-recovered" game or unsuccessful hunts.</li>
                <li>Inaccurate data inputs by the user.</li>
              </ul>
              <p className="font-semibold">You agree to hold Fletched harmless from any claims arising from your use of the app’s calculations in a hunting or target-shooting environment.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">5. Intellectual Property</h2>
              <p>The Fletched name, logo, and proprietary algorithms—specifically the Flinch Rate calculation model and the Arrow Ballistic Score (ABS) framework—are the sole property of Fletched. Unauthorized reverse engineering or reproduction of these tools is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">6. Data Usage</h2>
              <p>By using Fletched, you grant us the right to use anonymized, aggregated data for the purpose of improving our algorithms and for industry analytics. Personal identifying information will be handled according to our Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">7. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Your continued use of the app constitutes acceptance of the updated terms.</p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Terms;
