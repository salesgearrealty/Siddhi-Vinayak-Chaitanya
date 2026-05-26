"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            
            {/* Logo */}
            <div className="mb-6">
              <Image src="/Logoo.avif" alt="SiddhiVinayak Logo" width={120} height={120} className="object-contain" />
            </div>

            {/* Brand Text */}
            <div className="text-white font-serif text-xl md:text-2xl tracking-tighter cursor-pointer flex flex-col leading-none mb-6">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-1 font-bold">
                SiddhiVinayak
              </span>
              CHAITANYA
              <div className="flex items-center gap-2 mt-2">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span className="text-[7px] uppercase tracking-[0.2em] text-white/40 font-sans font-bold">
                  Official Project Website
                </span>
              </div>
            </div>

            <p className="text-white/40 text-[11px] font-light leading-relaxed max-w-xs uppercase tracking-wider">
              An exclusive collection of five residences. Forest serenity meets urban sophistication in NIBM.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Overview", "Location", "Pricing"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-white/40 hover:text-[#C5A059] text-[10px] uppercase tracking-widest transition-colors duration-300 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Office */}
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Corporate Office</h4>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-light leading-relaxed">
              SiddhiVinayak Developers<br />
              [Insert Office Address]<br />
              Pune, Maharashtra
            </p>
          </div>

          {/* Project Site */}
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Project Site</h4>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-light leading-relaxed">
              NIBM Annexe, Near Cloud 9,<br />
              Kondhwa, Pune - 411048
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div id="disclaimer" className="mb-12 p-6 border border-white/5 bg-white/[0.01] rounded-sm">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[8px] px-2 py-0.5 border border-[#C5A059]/30 text-[#C5A059] tracking-widest uppercase font-bold">
              Statutory Disclosure
            </span>
          </div>
          <p className="text-[9px] leading-relaxed text-white/20 uppercase tracking-widest font-light text-justify">
            <strong>Project Compliance:</strong> This is a boutique residential development consisting of 5 units on a land parcel under 3 Guntas. 
            In accordance with <strong>Section 3(2)(a) of the Real Estate (Regulation and Development) Act, 2016</strong>, 
            projects where the area of land does not exceed 500 square meters or the number of units does not exceed eight are <strong>exempt from RERA registration</strong>. 
            All information, images, and specifications on this website are for representational purposes only and subject to change by the developer. 
            By submitting an inquiry, you authorize the developer's sales team to contact you.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/10 text-[8px] uppercase tracking-[0.2em]">© 2026 SIDDHIVINAYAK DEVELOPERS. All Rights Reserved.</p>
          
          <div className="flex gap-8">
            <a href="/disclaimer" className="text-white/20 text-[8px] uppercase tracking-[0.2em] hover:text-white transition-colors">Disclaimer</a>
            <a href="/privacy-policy" className="text-white/20 text-[8px] uppercase tracking-[0.2em] hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-white/20 text-[8px] uppercase tracking-[0.2em] hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;