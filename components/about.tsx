'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Heart, Clock, Users, Home } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src="https://picsum.photos/seed/cleaning_hands_detail/600/800"
                    alt="Attention to detail cleaning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="bg-sky-50 p-6 rounded-2xl">
                  <h3 className="font-heading font-bold text-3xl text-sky-600 mb-1">16+</h3>
                  <p className="text-slate-600 font-medium">Years of Experience</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <Users className="h-8 w-8 text-slate-400 mb-3" />
                  <p className="text-slate-900 font-semibold">Client Referrals</p>
                  <p className="text-sm text-slate-500">Built on trust & word of mouth</p>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src="https://picsum.photos/seed/ana_rosa_portrait_smile/600/800"
                    alt="Ana Rosa"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">About Me</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              A Personal Approach to Cleaning
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                Hi, I&apos;m Ana Rosa. My journey in home services began over 16 years ago right here in New York.
                I started as a babysitter, where I learned the importance of trust and care in a family&apos;s home.
              </p>
              <p>
                Through word-of-mouth referrals from happy families, I transitioned into professional cleaning.
                Today, I&apos;m proud to serve clients throughout Manhattan, treating every apartment with the same
                care and respect I would my own.
              </p>
              <p>
                I don&apos;t just clean spaces; I build relationships. My clients trust me with their keys and their homes,
                and that is a responsibility I take very seriously.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-100 text-sky-600 rounded-lg shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Trust & Care</h4>
                  <p className="text-sm text-slate-500 mt-1">Treating your home like my own.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-100 text-sky-600 rounded-lg shrink-0">
                  <Home size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Manhattan Specialist</h4>
                  <p className="text-sm text-slate-500 mt-1">Expert in apartment living.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
