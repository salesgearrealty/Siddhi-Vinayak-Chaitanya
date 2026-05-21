"use client";

import { motion } from "framer-motion";

const DisclaimerPage = () => {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans selection:bg-[#C5A059]/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif tracking-tighter mb-4 text-[#C5A059]">
            Legal Disclaimer
          </h1>
          <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-12">
            Last Updated: May 2026
          </p>
        </motion.div>

        <section className="space-y-12">
          {/* Section 1: Official Representation */}
          <div className="border-l border-[#C5A059]/30 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">1. Official Representation</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              This is the official project website for <strong>Siddhi Vinayak Chaitanya</strong>, developed and managed by <strong>Siddhi Vinayak Developers</strong>. All information provided herein is authorized by the developer for the purpose of project promotion and informational transparency.
            </p>
          </div>

          {/* Section 2: RERA Exemption */}
          <div className="border-l border-[#C5A059]/30 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4 text-[#C5A059]">2. Statutory RERA Disclosure</h2>
            <p className="text-white/60 leading-relaxed text-sm italic mb-4">
              "Exempt from Registration under Section 3(2)(a) of the Real Estate (Regulation and Development) Act, 2016."
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Siddhi Vinayak Chaitanya is a boutique residential development consisting of only <strong>5 residential units</strong> situated on a land parcel measuring less than <strong>500 square meters (approx. 3 Guntas)</strong>. Under the Real Estate (Regulation and Development) Act, 2016 (RERA), projects where the land area does not exceed five hundred square meters or the number of units does not exceed eight are not required to be registered with the MahaRERA Authority.
            </p>
          </div>

          {/* Section 3: Information Accuracy */}
          <div className="border-l border-[#C5A059]/30 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">3. Accuracy of Information</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              All information, images, floor plans, and amenities mentioned on this website are for representational and informational purposes only. While we strive to provide the most current and accurate data, the specifications are subject to change as per the developer&apos;s discretion or as required by competent authorities. 
            </p>
          </div>

          {/* Section 4: Artistic Impressions */}
          <div className="border-l border-[#C5A059]/30 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">4. Artistic Impressions & Visuals</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              The 3D renders, walkthrough videos, and stock photography used across this site are artistic impressions intended to demonstrate the lifestyle and aesthetic of the project. They may not represent the final actual views or finished product.
            </p>
          </div>

          {/* Section 5: Lead Generation & Data */}
          <div className="border-l border-[#C5A059]/30 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">5. Communication Consent</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              By submitting your name, phone number, or email on this website, you explicitly authorize the <strong>Siddhi Vinayak Developers</strong> sales team to contact you via Phone Call, SMS, WhatsApp, or Email regarding project details, pricing, and site visits, even if you are registered on the National Do Not Call (DNC) Registry.
            </p>
          </div>

          {/* Section 6: Financial Obligations */}
          <div className="border-l border-[#C5A059]/30 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">6. Financial Commitments</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              No information on this site constitutes a legal offer or a binding contract. Prices mentioned are indicative and exclude statutory taxes, registration fees, and stamp duty unless otherwise specified. Final commercial terms will be documented only through a formal Agreement for Sale executed at our corporate office.
            </p>
          </div>
        </section>

        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2026 Siddhi Vinayak Developers | Official Project Site
          </p>
        </div>
      </div>
    </main>
  );
};

export default DisclaimerPage;