
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
            <a href="mailto:chahatbopp@gmail.com" className="flex items-center gap-1 text-black hover:text-blue-300">
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
                src="/logo.jpg"
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
                  <div className={`absolute left-0 top-full min-w-[220px] bg-white border border-[#449833] rounded-lg shadow-lg mt-2 z-20 pointer-events-auto ${open ? 'block' : 'hidden'}`}>
                    <ul className="py-2">
                      <li><Link href="/products/reprocess-abs-granules" className="block px-5 py-2 text-[#449833] font-medium whitespace-nowrap transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">REPROCESS ABS GRANULES</Link></li>
                      <li><Link href="/products/virgin-abs-granules" className="block px-5 py-2 text-[#449833] font-medium whitespace-nowrap transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">VIRGIN ABS GRANULES</Link></li>
                      <li><Link href="/products/polystyrene-granules" className="block px-5 py-2 text-[#449833] font-medium whitespace-nowrap transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">POLYSTYRENE GRANULES</Link></li>
                      <li><Link href="/products/reprocess-gpps-granules" className="block px-5 py-2 text-[#449833] font-medium whitespace-nowrap transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">REPROCESS GPPS GRANULES</Link></li>
                      <li><Link href="/products/virgin-gpps-granules" className="block px-5 py-2 text-[#449833] font-medium whitespace-nowrap transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">VIRGIN GPPS GRANULES</Link></li>
                      <li><Link href="/products/pet-granules" className="block px-5 py-2 text-[#449833] font-medium whitespace-nowrap transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">PET GRANULES</Link></li>
                     
                      <li><Link href="/products/reprocess-san-granules" className="block px-5 py-2 text-[#449833] font-medium whitespace-nowrap transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">REPROCESS SAN GRANULES</Link></li>
                      <li><Link href="/products/san-regrind" className="block px-5 py-2 text-[#449833] font-medium whitespace-nowrap transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">SAN REGRIND</Link></li>
                      <li><Link href="/products/virgin-pp-granules" className="block px-5 py-2 text-[#449833] font-medium whitespace-nowrap transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">VIRGIN PP GRANULES</Link></li>
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
              <ul className="pl-4 pb-2">
                <li><Link onClick={() => setNavOpen(false)} href="/products/reprocess-abs-granules" className="block py-1 text-[#449833] font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">REPROCESS ABS GRANULES</Link></li>
                <li><Link onClick={() => setNavOpen(false)} href="/products/virgin-abs-granules" className="block py-1 text-[#449833] font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">VIRGIN ABS GRANULES</Link></li>
                <li><Link onClick={() => setNavOpen(false)} href="/products/polystyrene-granules" className="block py-1 text-[#449833] font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">POLYSTYRENE GRANULES</Link></li>
                <li><Link onClick={() => setNavOpen(false)} href="/products/reprocess-gpps-granules" className="block py-1 text-[#449833] font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">REPROCESS GPPS GRANULES</Link></li>
                <li><Link onClick={() => setNavOpen(false)} href="/products/virgin-gpps-granules" className="block py-1 text-[#449833] font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">VIRGIN GPPS GRANULES</Link></li>
                <li><Link onClick={() => setNavOpen(false)} href="/products/pet-granules" className="block py-1 text-[#449833] font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">PET GRANULES</Link></li>
                
                <li><Link onClick={() => setNavOpen(false)} href="/products/reprocess-san-granules" className="block py-1 text-[#449833] font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">REPROCESS SAN GRANULES</Link></li>
                <li><Link onClick={() => setNavOpen(false)} href="/products/san-regrind" className="block py-1 text-[#449833] font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">SAN REGRIND</Link></li>
                <li><Link onClick={() => setNavOpen(false)} href="/products/virgin-pp-granules" className="block py-1 text-[#449833] font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-[#48A1C7] hover:text-white hover:scale-105 rounded-md shadow-sm">VIRGIN PP GRANULES</Link></li>
              </ul>
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