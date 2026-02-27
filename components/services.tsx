'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, Box, Truck, Briefcase, Building2, CalendarCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Sparkles,
    title: 'Regular Cleaning',
    description: 'Weekly, bi-weekly, or monthly maintenance to keep your home sparkling clean and organized.',
    image: 'https://picsum.photos/seed/regular_clean_living_room/800/600',
    link: '/contact'
  },
  {
    icon: Box,
    title: 'Deep Cleaning',
    description: 'A thorough top-to-bottom clean. Perfect for spring cleaning or homes that haven\'t been cleaned professionally in a while.',
    image: 'https://picsum.photos/seed/deep_clean_bathroom/800/600',
    link: '/contact'
  },
  {
    icon: Truck,
    title: 'Move-In / Move-Out',
    description: 'Ensure the place is spotless for the next tenant or ready for you to make it your new home.',
    image: 'https://picsum.photos/seed/empty_apartment_clean/800/600',
    link: '/contact'
  },
  {
    icon: Briefcase,
    title: 'Office Cleaning',
    description: 'Keep your workspace professional and sanitary. Tailored for small offices and studios.',
    image: 'https://picsum.photos/seed/modern_office_clean/800/600',
    link: '/contact'
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    description: 'Reliable cleaning solutions for retail spaces, showrooms, and galleries in Manhattan.',
    image: 'https://picsum.photos/seed/retail_store_clean/800/600',
    link: '/contact'
  },
  {
    icon: CalendarCheck,
    title: 'Custom Requests',
    description: 'Have specific needs? I can tailor a cleaning plan just for you. Just ask!',
    image: 'https://picsum.photos/seed/laundry_organized/800/600',
    link: '/contact'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Professional Cleaning Services in Manhattan
          </h2>
          <p className="text-lg text-slate-600">
            Whether you need a one-time deep clean or regular maintenance, I provide high-quality services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                    <service.icon size={20} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-sm font-semibold text-sky-500 hover:text-sky-600 transition-colors mt-auto"
                >
                  Get a Quote <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
