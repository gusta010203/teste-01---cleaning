import Link from 'next/link';
import { Sparkles, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-sky-500 p-1.5 rounded-lg text-white">
                <Sparkles size={20} />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Ana Rosa<span className="text-sky-500">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional, reliable, and personalized cleaning services for Manhattan homes and businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-sky-400 transition-colors">Regular Cleaning</Link></li>
              <li><Link href="/services" className="hover:text-sky-400 transition-colors">Deep Cleaning</Link></li>
              <li><Link href="/services" className="hover:text-sky-400 transition-colors">Move-In / Move-Out</Link></li>
              <li><Link href="/services" className="hover:text-sky-400 transition-colors">Office Cleaning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-sky-400 transition-colors">About Me</Link></li>
              <li><Link href="/#why-me" className="hover:text-sky-400 transition-colors">Why Choose Me</Link></li>
              <li><Link href="/#testimonials" className="hover:text-sky-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Manhattan, NY</li>
              <li>(555) 123-4567</li>
              <li>hello@anarosacleaning.com</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="hover:text-sky-400 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-sky-400 transition-colors"><Facebook size={20} /></a>
                <a href="mailto:hello@anarosacleaning.com" className="hover:text-sky-400 transition-colors"><Mail size={20} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ana Rosa Cleaning. All rights reserved.</p>
          <p>Designed for Trust & Quality.</p>
        </div>
      </div>
    </footer>
  );
}
