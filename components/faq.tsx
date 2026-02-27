'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Do you bring your own supplies?",
    answer: "Yes, I bring my own professional cleaning supplies and equipment. However, if you have specific products you prefer me to use (for allergies or surface-specific needs), just let me know and I'm happy to use them."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Absolutely! I offer free estimates. For the most accurate quote, I can briefly visit your apartment or we can discuss the details over the phone/email regarding the size and condition of your home."
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "Your satisfaction is my priority. If you are not happy with any aspect of the service, please contact me within 24 hours and I will return to re-clean the specific area at no extra charge."
  },
  {
    question: "Do you work in Brooklyn?",
    answer: "My primary service area is Manhattan, but I do accept clients in Brooklyn upon request, depending on the location and schedule availability."
  },
  {
    question: "Are you pet friendly?",
    answer: "Yes! I love pets. I started my career as a babysitter and am very comfortable working in homes with dogs and cats."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-sky-500 shrink-0" />
                ) : (
                  <Plus className="text-slate-400 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
