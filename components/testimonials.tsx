'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Ana has been cleaning our apartment for over 5 years. She is incredibly thorough, trustworthy, and kind. I recommend her to everyone in our building.",
    author: "Emily R.",
    location: "Upper West Side"
  },
  {
    quote: "Finding a cleaner you can trust in NYC is hard. Ana is a gem. She treats our home with such care and always does an amazing job.",
    author: "Michael T.",
    location: "Tribeca"
  },
  {
    quote: "Professional, punctual, and detailed. My apartment looks brand new every time she leaves. The best cleaning service I've used in Manhattan.",
    author: "Sarah L.",
    location: "Midtown East"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            What My Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl relative">
              <Quote className="absolute top-8 right-8 text-slate-200 h-10 w-10 rotate-180" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 relative z-10 leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <p className="font-bold text-slate-900">{item.author}</p>
                <p className="text-sm text-slate-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
