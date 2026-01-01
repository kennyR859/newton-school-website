import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from './common/Typography';
import { MapPin, Phone, Mail, Sparkles, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1F1F1F] via-[#2D1F3D] to-[#1F1F1F] text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B9D]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 max-w-[1320px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] text-white flex items-center justify-center font-heading text-lg rounded-xl shadow-[0_4px_15px_rgba(255,107,157,0.4)]">
                <Sparkles size={18} />
              </div>
              <Typography variant="h5" color="white" className="bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] bg-clip-text text-transparent font-bold">
                Newton School
              </Typography>
            </div>
            <Typography variant="body" className="text-white/60">
              원리를 이해하고 사고력을 기르는 프리미엄 교육. 아이들의 잠재력을 깨우고 미래의 리더로 성장시킵니다.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <Typography variant="h6" color="white" className="font-semibold">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-white/60 hover:text-[#FF6B9D] transition-colors">About Us</Link>
              <Link to="/curriculum" className="text-white/60 hover:text-[#FF6B9D] transition-colors">Curriculum</Link>
              <Link to="/facilities" className="text-white/60 hover:text-[#FF6B9D] transition-colors">Facilities</Link>
              <Link to="/success-stories" className="text-white/60 hover:text-[#FF6B9D] transition-colors">Success Stories</Link>
              <Link to="/contact" className="text-white/60 hover:text-[#FF6B9D] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <Typography variant="h6" color="white" className="font-semibold">
              Contact Us
            </Typography>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-[#FF6B9D] mt-1" />
                <p>2175 Lemoine Ave #304<br />Fort Lee, NJ 07024</p>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-[#FF6B9D]" />
                <p>(201) 252-7252</p>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-[#FF6B9D]" />
                <p>Kenny@newtonschool.net</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <Typography variant="h6" color="white" className="font-semibold">
              Hours
            </Typography>
            <div className="space-y-2 text-white/60">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>3:00 PM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Typography variant="caption" className="text-white/40 flex items-center gap-1">
            Made with <Heart size={12} className="text-[#FF6B9D] fill-current" /> &copy; {new Date().getFullYear()} Newton School. All rights reserved.
          </Typography>
          <div className="flex gap-6">
            <Link to="/policy" className="text-xs text-white/40 hover:text-[#FF6B9D] transition-colors">Privacy Policy</Link>
            <Link to="/policy" className="text-xs text-white/40 hover:text-[#FF6B9D] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
