"use client";

import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans selection:bg-[#C5A059]/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif tracking-tighter mb-4 text-[#C5A059]">
            Terms & Conditions
          </h1>
          <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-12">
            Last Revised: May 21, 2026
          </p>
        </motion.div>

        <section className="space-y-12">
          {/* Section 1: Acceptance of Terms */}
          <div className="border-l border-white/10 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">1. Acceptance of Terms</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              By accessing and using this website, you agree to be bound by these Terms and Conditions. This website is owned and operated by <strong>Siddhi Vinayak Developers</strong> as the official digital platform for the project <strong>Siddhi Vinayak Chaitanya</strong>. If you do not agree with any part of these terms, you must not use this website.
            </p>
          </div>

          {/* Section 2: Nature of Content */}
          <div className="border-l border-white/10 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">2. Nature of Content</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              The content provided on this website is for general information purposes only. It does not constitute a legal offer, an invitation to offer, or a commitment of any nature. All plans, specifications, images, and other details are indicative and the Developer reserves the right to change any or all of these in the interest of the project.
            </p>
          </div>

          {/* Section 3: Professional Relationship */}
          <div className="border-l border-[#C5A059]/30 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4 text-[#C5A059]">
              3. Official Representation
            </h2>
            <p className="text-white/60 leading-relaxed text-sm">
              This website is managed directly by the developer. All inquiries submitted via this platform are processed by the internal sales team of <strong>Siddhi Vinayak Developers</strong>. Final purchase decisions and commercial negotiations should be conducted directly with the developer at their registered corporate office.
            </p>
          </div>

          {/* Section 4: Limitation of Liability */}
          <div className="border-l border-white/10 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">4. Limitation of Liability</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              Under no circumstances shall Siddhi Vinayak Developers be liable for any direct, indirect, or consequential loss or damage arising from the use of the information on this website. While we make every effort to keep the site updated, we do not guarantee the absolute completeness or accuracy of the data at all times.
            </p>
          </div>

          {/* Section 5: Intellectual Property */}
          <div className="border-l border-white/10 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">5. Intellectual Property</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              All logos, designs, architectural renders, and content displayed on this website are the property of <strong>Siddhi Vinayak Developers</strong> or are used under valid authorization. Unauthorized reproduction, distribution, or use of this content is strictly prohibited.
            </p>
          </div>

          {/* Section 6: Jurisdiction */}
          <div className="border-l border-white/10 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">6. Jurisdiction</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              Any dispute arising out of the use of this website shall be subject to the exclusive jurisdiction of the courts in <strong>Pune, Maharashtra, India</strong>.
            </p>
          </div>
        </section>

        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-white/20 text-[10px] uppercase tracking-widest text-center">
            © 2026 Siddhi Vinayak Developers | Official Project Site
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;