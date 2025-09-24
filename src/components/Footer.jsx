import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
  <footer className="bg-gradient-to-br from-[#2D4A2F] via-[#449833] to-[#1A2B1C] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href="/">
                <h1 className="text-2xl font-bold text-white mb-2 cursor-pointer" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  RAA Polyplast
                </h1>
              </Link>
              <p className="text-sm text-[#48A1C7] font-medium mb-3">
                PLASTIC GRANULES MANUFACTURER
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                D-120, Sector-5, Bawana Industrial Area, New Delhi-110039, Delhi, India<br/>
                GST: 07BHWPM6220Q1ZH<br/>
                Email: ajitkg@rocketmail.com
              </p>
            </div>
          </div>

          {/* Services and Quick Links - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4 lg:contents">
            {/* Services */}
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1">
                Our Products
              </h3>
              <div className=' w-16 lg:w-20 h-0.5 bg-[#48A1C7] mb-3.5'></div>
              <ul className="text-white text-[11px] sm:text-xs lg:text-sm space-y-1 lg:space-y-1.5">
                <li><Link href="/products/abs" className="hover:text-[#48A1C7] cursor-pointer transition-colors">ABS</Link></li>
                <li><Link href="/products/polystyrene-granules" className="hover:text-[#48A1C7] cursor-pointer transition-colors">POLYSTYRENE GRANULES</Link></li>
                <li><Link href="/products/pp" className="hover:text-[#48A1C7] cursor-pointer transition-colors">PP</Link></li>
                <li><Link href="/products/san" className="hover:text-[#48A1C7] cursor-pointer transition-colors">SAN</Link></li>
                <li><Link href="/products/pc" className="hover:text-[#48A1C7] cursor-pointer transition-colors">PC</Link></li>
                <li><Link href="/products/pet" className="hover:text-[#48A1C7] cursor-pointer transition-colors">PET</Link></li>
                <li><Link href="/products/pe" className="hover:text-[#48A1C7] cursor-pointer transition-colors">PE</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1">
                Quick Links
              </h3>
              <div className=' w-16 lg:w-20 h-0.5 bg-[#48A1C7] mb-3.5'></div>
              <ul className="text-white text-[11px] sm:text-xs lg:text-sm space-y-1 lg:space-y-1.5">
                <li><Link href="/" className="hover:text-[#48A1C7] cursor-pointer transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#48A1C7] cursor-pointer transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#48A1C7] cursor-pointer transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info and Follow Us - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4 lg:block">
            {/* Contact Information */}
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1">
                Contact Info
              </h3>
              <div className=' w-16 lg:w-20 h-0.5 bg-[#48A1C7] mb-3.5'></div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#449833] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm">Phone</p>
                    <p className="text-white font-semibold text-xs sm:text-sm">+91-8287334248</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#449833] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm">Email</p>
                    <p className="text-white font-semibold text-xs sm:text-sm">ajitkg@rocketmail.com</p>
                  </div>
                </div>
              </div>
              
              {/* Follow Us - Below Contact Info on Desktop Only */}
              <div className="hidden lg:block mt-6 lg:mt-8">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1">
                  Follow Us
                </h3>
                <div className=' w-16 lg:w-20 h-0.5 bg-[#48A1C7] mb-3.5'></div>
                <div className="flex flex-wrap gap-2">
                  {/* Facebook */}
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 lg:w-8 lg:h-8 bg-[#449833] rounded-full flex items-center justify-center hover:bg-[#48A1C7] transition-colors" aria-label="Facebook">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 lg:w-8 lg:h-8 bg-[#449833] rounded-full flex items-center justify-center hover:bg-[#48A1C7] transition-colors" aria-label="Instagram">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.783 2.295 7.149 2.233 8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.608 1.385 2.557 2.436 2.351 3.548 2.293 4.829 2.235 6.109 2.223 6.518 2.223 12c0 5.482.012 5.891.07 7.171.058 1.281.264 2.393 1.315 3.444 1.051 1.051 2.163 1.257 3.444 1.315 1.28.058 1.689.07 7.171.07s5.891-.012 7.171-.07c1.281-.058 2.393-.264 3.444-1.315 1.051-1.051 1.257-2.163 1.315-3.444.058-1.28.07-1.689.07-7.171s-.012-5.891-.07-7.171c-.058-1.281-.264-2.393-1.315-3.444C19.393.334 18.281.128 17 .07 15.719.012 15.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/918287334248" target="_blank" rel="noopener noreferrer" className="w-6 h-6 lg:w-8 lg:h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us - Mobile/Tablet Side by Side */}
            <div className="lg:hidden">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                Follow Us
              </h3>
              <div className=' w-16 h-0.5 bg-[#48A1C7] mb-3.5'></div>
              <div className="flex flex-wrap gap-2">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#449833] rounded-full flex items-center justify-center hover:bg-[#48A1C7] transition-colors">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                  </svg>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#449833] rounded-full flex items-center justify-center hover:bg-[#48A1C7] transition-colors">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.783 2.295 7.149 2.233 8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.608 1.385 2.557 2.436 2.351 3.548 2.293 4.829 2.235 6.109 2.223 6.518 2.223 12c0 5.482.012 5.891.07 7.171.058 1.281.264 2.393 1.315 3.444 1.051 1.051 2.163 1.257 3.444 1.315 1.28.058 1.689.07 7.171.07s5.891-.012 7.171-.07c1.281-.058 2.393-.264 3.444-1.315 1.051-1.051 1.257-2.163 1.315-3.444.058-1.28.07-1.689.07-7.171s-.012-5.891-.07-7.171c-.058-1.281-.264-2.393-1.315-3.444C19.393.334 18.281.128 17 .07 15.719.012 15.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                  </svg>
                </a>
                <a href="https://wa.me/918287334248" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
  <div className="border-t border-[#449833] bg-gradient-to-r from-[#2d5a20] to-[#449833]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
            <div className="text-[#48A1C7] mb-2 md:mb-0 text-center md:text-left font-medium">
              © 2025 RAA Polyplast. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end text-white text-xs md:text-sm">
              <span>Developed with</span>
              <svg className="w-3 h-3 md:w-4 md:h-4 text-[#48A1C7] mx-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span>by</span>
              <a href="https://webintro.in/" target="_blank" rel="noopener noreferrer" className="text-[#48A1C7] hover:text-white transition-colors font-medium mx-1">
                Webintro.in
              </a>
              <span>and</span>
              <a href="https://webintro.in/delhi/" target="_blank" rel="noopener noreferrer" className="text-[#48A1C7] hover:text-white transition-colors font-medium mx-1">
                Google Promotion Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;