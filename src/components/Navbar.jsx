
"use client";
import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
  <div className="fixed top-0 left-0 w-full z-50 shadow-md border-b border-[#48A1C7] bg-white">
        {/* Top bar */}
  <div className="flex flex-col sm:flex-row items-center justify-between bg-[#449833] text-[#48A1C7] text-xs sm:text-sm px-2 sm:px-4 h-auto sm:h-8 py-1 sm:py-0 top-bar">
          <div className="flex items-center gap-2 sm:gap-4 border-l-2 border-[#48A1C7] pl-2 w-full sm:w-auto justify-center sm:justify-start">
            <a href="tel:+918287334248" className="flex items-center gap-1 text-black hover:text-blue-300">
              <FaPhoneAlt className="text-xs sm:text-sm" />
              <span className="inline">+91-8287334248</span>
            </a>
            <a href="mailto:ajitkg@rocketmail.com" className="flex items-center gap-1 text-black hover:text-blue-300">
              <FaEnvelope className="text-xs sm:text-sm" />
              <span className="inline">ajitkg@rocketmail.com </span>
            </a>
          </div>
          <div className="hidden sm:flex gap-3 mt-1 sm:mt-0 justify-center">
            <a aria-label="Facebook" href="#" className="text-black text-xs sm:text-sm"><FaFacebookF /></a>
            <a aria-label="Instagram" href="#" className="text-black text-xs sm:text-sm"><FaInstagram /></a>
            <a aria-label="Twitter" href="#" className="text-black text-xs sm:text-sm"><FaTwitter /></a>
            <a aria-label="Pinterest" href="#" className="text-black text-xs sm:text-sm"><FaPinterestP /></a>
            <a aria-label="LinkedIn" href="#" className="text-black text-xs sm:text-sm"><FaLinkedinIn /></a>
            <a aria-label="YouTube" href="#" className="text-black text-xs sm:text-sm"><FaYoutube /></a>
          </div>
        </div>
        {/* Main nav */}
  <header className="flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 py-2 bg-white gap-2 md:gap-0 relative">
          <div aria-label="Chahat Packaging logo" className="flex items-center gap-2 pl-0 sm:pl-4 w-full md:w-auto justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-2">
              <img
                alt="Blue and dark blue stylized S logo"
                height="40"
                width="40"
                src="/logo.jpeg"
                className="w-[40px] h-[40px] object-contain md:w-[50px] md:h-[50px] cursor-pointer"
              />
              <span aria-label="Chahat Packaging text logo" className="font-bold text-lg sm:text-xl md:text-2xl text-[#449833] select-none cursor-pointer">
                <span>R</span> 
                <span className='text-[#48A1C7]'>AA</span> 
                <span className="text-[#449833] ml-1">POLYPLAST</span>
                <sup className="text-xs text-[#449833]">®</sup>
              </span>
            </Link>
          </div>
          {/* Hamburger icon for mobile/tablet */}
          <button
            className="md:hidden absolute right-4 top-3 text-[#449833] text-2xl focus:outline-none"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className={`hidden md:flex flex-row items-center gap-5 w-full md:w-auto justify-center md:justify-end text-xs sm:text-sm md:text-base`}
          >
            <Link aria-current="page" className="font-bold text-black hover:underline px-2 py-1" href="/">
              HOME
            </Link>
            <Link className="font-bold text-black hover:underline px-2 py-1" href="/about">
              ABOUT US
            </Link>
            {/* Dropdown with delay on mouse leave */}
            {(() => {
              const [open, setOpen] = useState(false);
              const timeoutRef = useRef();
              const handleEnter = () => {
                clearTimeout(timeoutRef.current);
                setOpen(true);
              };
              const handleLeave = () => {
                timeoutRef.current = setTimeout(() => setOpen(false), 300);
              };
              return (
                <div
                  className="relative"
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  onFocus={handleEnter}
                  onBlur={handleLeave}
                >
                  <Link className="font-bold text-black hover:underline px-2 py-1" href="#product">
                    PRODUCT
                  </Link>
                  <div className={`absolute left-0 top-full min-w-[200px] bg-white border border-[#449833] rounded-lg shadow-lg mt-2 z-20 pointer-events-auto ${open ? 'block' : 'hidden'}`}>
                    <ul className="py-2">
                      {/* ABS Category */}
                      <li className="relative group">
                        <div className="block px-4 py-2 text-[#449833] font-medium hover:bg-[#48A1C7] hover:text-white transition-all duration-200 cursor-pointer">
                          ABS
                          
                        </div>
                        <div className="absolute left-full top-0 min-w-[250px] bg-white border border-[#449833] rounded-lg shadow-lg ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                          <ul className="py-2">
                            <li><Link href="/products/virgin-abs-granules" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Virgin ABS Granules</Link></li>
                            <li><Link href="/products/reprocess-abs-granules" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Reprocess ABS Granules</Link></li>
                          </ul>
                        </div>
                      </li>
                      
                      {/* Polystyrene Category */}
                      <li className="relative group">
                        <div className="block px-4 py-2 text-[#449833] font-medium hover:bg-[#48A1C7] hover:text-white transition-all duration-200 cursor-pointer">
                          PG
                          
                        </div>
                        <div className="absolute left-full top-0 min-w-[200px] bg-white border border-[#449833] rounded-lg shadow-lg ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                          <ul className="py-2">
                            <li><Link href="/products/virgin-gpps" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Virgin GPPS</Link></li>
                            <li><Link href="/products/reprocess-gpps" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Reprocess GPPS</Link></li>
                            <li><Link href="/products/virgin-hips" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Virgin HIPS</Link></li>
                            <li><Link href="/products/reprocess-hips" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Reprocess HIPS</Link></li>
                          </ul>
                        </div>
                      </li>
                      
                      {/* PP Category */}
                      <li className="relative group">
                        <div className="block px-4 py-2 text-[#449833] font-medium hover:bg-[#48A1C7] hover:text-white transition-all duration-200 cursor-pointer">
                          PP
                          
                        </div>
                        <div className="absolute left-full top-0 min-w-[200px] bg-white border border-[#449833] rounded-lg shadow-lg ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                          <ul className="py-2">
                            <li><Link href="/products/virgin-pp" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Virgin PP</Link></li>
                            <li><Link href="/products/reprocess-pp" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Reprocess PP</Link></li>
                          </ul>
                        </div>
                      </li>
                      
                      {/* SAN Category */}
                      <li className="relative group">
                        <div className="block px-4 py-2 text-[#449833] font-medium hover:bg-[#48A1C7] hover:text-white transition-all duration-200 cursor-pointer">
                          SAN
                          
                        </div>
                        <div className="absolute left-full top-0 min-w-[250px] bg-white border border-[#449833] rounded-lg shadow-lg ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                          <ul className="py-2">
                            <li><Link href="/products/virgin-san-granules" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Virgin SAN Granules</Link></li>
                            <li><Link href="/products/reprocess-san-granules" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Reprocess SAN Granules</Link></li>
                            <li><Link href="/products/san-regrind" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• SAN Regrind</Link></li>
                          </ul>
                        </div>
                      </li>
                      
                      {/* PC Category */}
                      <li className="relative group">
                        <div className="block px-4 py-2 text-[#449833] font-medium hover:bg-[#48A1C7] hover:text-white transition-all duration-200 cursor-pointer">
                          PC
                          
                        </div>
                        <div className="absolute left-full top-0 min-w-[300px] bg-white border border-[#449833] rounded-lg shadow-lg ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                          <ul className="py-2">
                            <li><Link href="/products/virgin-polycarbonate-granules" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Virgin Polycarbonate Granules</Link></li>
                            <li><Link href="/products/reprocess-polycarbonate-granules" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Reprocess Polycarbonate Granules</Link></li>
                            <li><Link href="/products/polycarbonate-regrind" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Polycarbonate Regrind</Link></li>
                          </ul>
                        </div>
                      </li>
                      
                      {/* PET Category */}
                      <li className="relative group">
                        <div className="block px-4 py-2 text-[#449833] font-medium hover:bg-[#48A1C7] hover:text-white transition-all duration-200 cursor-pointer">
                          PET
                          
                        </div>
                        <div className="absolute left-full top-0 min-w-[220px] bg-white border border-[#449833] rounded-lg shadow-lg ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                          <ul className="py-2">
                            <li><Link href="/products/virgin-pet-resin" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Virgin PET Resin</Link></li>
                            <li><Link href="/products/pet-preform-regrind" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• PET Preform Regrind</Link></li>
                            <li><Link href="/products/hot-wash-pet-flakes" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• Hot wash PET Flakes</Link></li>
                          </ul>
                        </div>
                      </li>
                      
                      {/* PE Category */}
                      <li className="relative group">
                        <div className="block px-4 py-2 text-[#449833] font-medium hover:bg-[#48A1C7] hover:text-white transition-all duration-200 cursor-pointer">
                          PE
                          
                        </div>
                        <div className="absolute left-full top-0 min-w-[150px] bg-white border border-[#449833] rounded-lg shadow-lg ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                          <ul className="py-2">
                            <li><Link href="/products/ldpe" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• LDPE</Link></li>
                            <li><Link href="/products/lldpe" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• LLDPE</Link></li>
                            <li><Link href="/products/hdpe" className="block px-4 py-2 text-[#449833] text-sm hover:bg-[#48A1C7] hover:text-white transition-all duration-200">• HDPE</Link></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })()}
            <Link className="font-bold text-black hover:underline px-2 py-1" href="/contact">
              CONTACT US
            </Link>
          </nav>
          {/* Mobile/tablet nav */}
          <nav
            aria-label="Mobile navigation"
            className={`md:hidden flex-col items-center gap-2 w-full bg-white absolute left-0 top-full shadow-lg border-t border-[#48A1C7] z-40 transition-all duration-200 ${navOpen ? 'flex' : 'hidden'}`}
          >
            <Link onClick={() => setNavOpen(false)} aria-current="page" className="font-bold text-black hover:underline px-4 py-2 w-full text-left text-xs sm:text-sm" href="/">
              HOME
            </Link>
            <Link onClick={() => setNavOpen(false)} className="font-bold text-black hover:underline px-4 py-2 w-full text-left text-xs sm:text-sm" href="/about">
              ABOUT US
            </Link>
            {/* Dropdown for mobile/tablet */}
            <details className="w-full">
              <summary className="font-bold text-black hover:underline px-4 py-2 cursor-pointer select-none text-xs sm:text-sm">PRODUCT</summary>
              <div className="pl-4 pb-2 max-h-80 overflow-y-auto">
                
                {/* ABS Category */}
                <details className="mb-2">
                  <summary className="text-[#449833] font-bold text-xs cursor-pointer select-none py-1">ABS</summary>
                  <ul className="ml-3 mt-1">
                    <li><Link onClick={() => setNavOpen(false)} href="/products/virgin-abs-granules" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Virgin ABS Granules</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/reprocess-abs-granules" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Reprocess ABS Granules</Link></li>
                  </ul>
                </details>
                
                {/* Polystyrene Category */}
                <details className="mb-2">
                  <summary className="text-[#449833] font-bold text-xs cursor-pointer select-none py-1">PG</summary>
                  <ul className="ml-3 mt-1">
                    <li><Link onClick={() => setNavOpen(false)} href="/products/virgin-gpps" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Virgin GPPS</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/reprocess-gpps" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Reprocess GPPS</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/virgin-hips" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Virgin HIPS</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/reprocess-hips" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Reprocess HIPS</Link></li>
                  </ul>
                </details>
                
                {/* PP Category */}
                <details className="mb-2">
                  <summary className="text-[#449833] font-bold text-xs cursor-pointer select-none py-1">PP</summary>
                  <ul className="ml-3 mt-1">
                    <li><Link onClick={() => setNavOpen(false)} href="/products/virgin-pp" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Virgin PP</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/reprocess-pp" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Reprocess PP</Link></li>
                  </ul>
                </details>
                
                {/* SAN Category */}
                <details className="mb-2">
                  <summary className="text-[#449833] font-bold text-xs cursor-pointer select-none py-1">SAN</summary>
                  <ul className="ml-3 mt-1">
                    <li><Link onClick={() => setNavOpen(false)} href="/products/virgin-san-granules" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Virgin SAN Granules</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/reprocess-san-granules" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Reprocess SAN Granules</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/san-regrind" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• SAN Regrind</Link></li>
                  </ul>
                </details>
                
                {/* PC Category */}
                <details className="mb-2">
                  <summary className="text-[#449833] font-bold text-xs cursor-pointer select-none py-1">PC</summary>
                  <ul className="ml-3 mt-1">
                    <li><Link onClick={() => setNavOpen(false)} href="/products/virgin-polycarbonate-granules" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Virgin Polycarbonate Granules</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/reprocess-polycarbonate-granules" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Reprocess Polycarbonate Granules</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/polycarbonate-regrind" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Polycarbonate Regrind</Link></li>
                  </ul>
                </details>
                
                {/* PET Category */}
                <details className="mb-2">
                  <summary className="text-[#449833] font-bold text-xs cursor-pointer select-none py-1">PET</summary>
                  <ul className="ml-3 mt-1">
                    <li><Link onClick={() => setNavOpen(false)} href="/products/virgin-pet-resin" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Virgin PET Resin</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/pet-preform-regrind" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• PET Preform Regrind</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/hot-wash-pet-flakes" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• Hot wash PET Flakes</Link></li>
                  </ul>
                </details>
                
                {/* PE Category */}
                <details className="mb-2">
                  <summary className="text-[#449833] font-bold text-xs cursor-pointer select-none py-1">PE</summary>
                  <ul className="ml-3 mt-1">
                    <li><Link onClick={() => setNavOpen(false)} href="/products/ldpe" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• LDPE</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/lldpe" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• LLDPE</Link></li>
                    <li><Link onClick={() => setNavOpen(false)} href="/products/hdpe" className="block py-1 text-[#449833] text-xs hover:bg-[#48A1C7] hover:text-white transition-all duration-200 rounded px-2">• HDPE</Link></li>
                  </ul>
                </details>
                
              </div>
            </details>
            <Link onClick={() => setNavOpen(false)} className="font-bold text-black hover:underline px-4 py-2 w-full text-left text-xs sm:text-sm" href="/contact">
              CONTACT US
            </Link>
            {/* WhatsApp icon and button for mobile/tablet nav - moved to last */}
            <a
              href="https://wa.me/918287334248"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center gap-2 px-4 py-3 w-full justify-start"
            >
              <FaWhatsapp className="text-green-500 text-2xl sm:text-3xl" />
              <span className="text-green-700 font-semibold text-base sm:text-lg transition-colors duration-200 group-hover:text-white">WhatsApp</span>
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-2 w-full md:w-auto justify-center md:justify-end mt-2 md:mt-0">
            <a
              href="https://wa.me/918287334248"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group"
            >
              <button className="bg-[#449833] hover:bg-[#48A1C7] text-black font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors w-full md:w-auto group-hover:text-white">
                WhatsApp
              </button>
            </a>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;