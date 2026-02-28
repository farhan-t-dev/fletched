import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/Accordion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  const faqs = [
    {
      q: 'How accurate is the ballistics generation?',
      a: 'Our export engine generates production-ready archery specs with 99.9% accuracy. It maps blueprint constraints directly to field conditions and utilizes standard kinetic energy and momentum formulas refined for modern archery tackle.'
    },
    {
      q: 'Can I import existing setup data?',
      a: 'Currently, Fletched is a dedicated drafting tool focused on precision from scratch. We support PNG/SVG reference overlays to help you reconstruct setups accurately within the app environment.'
    },
    {
      q: 'Does it support collaborative real-time editing?',
      a: 'Yes. Multiple archers can work on the same .spec file simultaneously with sub-millisecond cursor synchronization. Perfect for teams and bow shops.'
    },
    {
      q: 'What is the "Flinch Rate"?',
      a: 'The Flinch Rate is our proprietary calculation for "string jump." It quantifies how an animal might react to the sound or sight of an incoming arrow, calculating the likelihood of impact shift based on distance and arrow speed.'
    },
    {
      q: 'Is an internet connection required in the field?',
      a: 'No. Fletched is designed for the backcountry. All core ballistics calculations and profile data are stored locally on your device. Syncing only occurs when you regain cellular or Wi-Fi service.'
    }
  ];

  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark pt-32 pb-20 overflow-hidden relative min-h-screen transition-colors blueprint-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection className="mb-16 text-center">
          <Badge variant="default" className="mb-6">
            <span className="material-symbols-outlined text-[12px] mr-1">help_center</span> SYSTEM.SUPPORT [v1.0]
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-slate-800 dark:text-white mb-6">
            Frequently <span className="text-primary italic">Asked.</span>
          </h1>
          <p className="text-slate-500 font-medium text-xl leading-relaxed">
            Technical support and architectural documentation for the Fletched ballistics engine.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-20">
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger 
                  isOpen={openItem === `item-${i}`}
                  onClick={() => setOpenItem(openItem === `item-${i}` ? null : `item-${i}`)}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-primary/40 font-mono text-sm font-bold">[{i+1 < 10 ? `0${i+1}` : i+1}]</span>
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent isOpen={openItem === `item-${i}`}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        <AnimatedSection className="text-center p-12 bg-white dark:bg-slate-800 border-2 border-dashed border-primary/20 rounded-[3rem] shadow-xl">
           <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900 dark:text-white">Still have questions?</h3>
           <p className="text-slate-500 font-medium mb-10 max-w-md mx-auto">Our technical field team is standing by to assist with your specific configuration.</p>
           <Button variant="default" size="lg">
              Contact Technical Support
           </Button>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default FAQ;
