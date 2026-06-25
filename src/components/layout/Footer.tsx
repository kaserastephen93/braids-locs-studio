import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-purple-500 bg-white shadow-lg">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/attachments/176895b1-f89a-4fe0-811c-90aa65760d48/1776028418820_inbound2925486177753809408.jpg" 
                  alt="Lovet's Locs and Braids Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Lovet's <span className="text-purple-400">Locs & Braids</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              West Roxbury's premier destination for professional hair braiding, loc maintenance, and organic hair care. We celebrate natural beauty one strand at a time.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/vollen.lovet.3" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900 p-2 text-slate-400 hover:bg-purple-600 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/lovet_s_locs_and_braids" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900 p-2 text-slate-400 hover:bg-purple-600 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900 p-2 text-slate-400 hover:bg-purple-600 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-purple-400 transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-purple-400 transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-purple-400 transition-colors">Shop Products</Link></li>
              <li><Link to="/booking" className="text-slate-400 hover:text-purple-400 transition-colors">Book Appointment</Link></li>
              <li><Link to="/gallery" className="text-slate-400 hover:text-purple-400 transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-purple-400 transition-colors">Hair Care Tips</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-purple-400" />
                <span>223 Grove St, West Roxbury, MA 02132</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 flex-shrink-0 text-purple-400" />
                <a href="tel:+18572375946" className="hover:text-purple-400 transition-colors">+1 857-237-5946</a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-purple-400" />
                <a href="https://wa.me/18572375946" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">WhatsApp Chat</a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 flex-shrink-0 text-purple-400" />
                <a href="mailto:info@lovetslocsandbraids.com" className="hover:text-purple-400 transition-colors">info@lovetslocsandbraids.com</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Business Hours</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-purple-400">Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-900 pt-8 text-center text-sm text-slate-500">
          <div className="mb-4 flex justify-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Lovet's Locs and Braids. All rights reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;