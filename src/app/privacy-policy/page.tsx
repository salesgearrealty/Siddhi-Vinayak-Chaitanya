"use client";

import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans selection:bg-[#C5A059]/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif tracking-tighter mb-4 text-[#C5A059]">
            Privacy Policy
          </h1>
          <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-12">
            Effective Date: May 21, 2026
          </p>
        </motion.div>

        <section className="space-y-12">
          {/* Section 1: Introduction */}
          <div className="border-l border-white/10 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">1. Scope of Policy</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              This Privacy Policy describes how <strong>Siddhi Vinayak Developers</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your information when you visit this official project website for <strong>Siddhi Vinayak Chaitanya</strong>. We are committed to ensuring your privacy is protected in compliance with digital advertising standards and applicable data protection laws.
            </p>
          </div>

          {/* Section 2: Data Collection */}
          <div className="border-l border-white/10 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">2. Information We Collect</h2>
            <p className="text-white/60 leading-relaxed text-sm mb-4">
              When you interact with this site, we may collect the following:
            </p>
            <ul className="list-disc list-inside text-white/40 text-sm space-y-2 ml-4">
              <li>Personal Identifiers: Name, Phone Number, and Email Address provided via enquiry forms.</li>
              <li>Technical Data: IP address, browser type, and device identifiers.</li>
              <li>Usage Data: Information on how you use our website (via Cookies and Tracking Pixels).</li>
            </ul>
          </div>

          {/* Section 3: Advertising & Cookies */}
          <div className="border-l border-[#C5A059]/30 pl-8 py-2 bg-[#C5A059]/5 rounded-r-lg">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4 text-[#C5A059]">3. Advertising & Cookies</h2>
            <p className="text-white/60 leading-relaxed text-sm mb-4">
              This website uses <strong>Google Ads Remarketing</strong> and tracking technologies to advertise our project to interested visitors.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Third-party vendors, including Google, use cookies to serve ads based on someone’s past visits. Any data collected will be used in accordance with our own privacy policy and Google&apos;s privacy policy. You can set preferences for how Google advertises to you using the <strong>Google Ad Preferences</strong> page.
            </p>
          </div>

          {/* Section 4: Data Usage */}
          <div className="border-l border-white/10 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">4. How We Use Your Data</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              The information we collect is used solely for:
            </p>
            <ul className="list-disc list-inside text-white/40 text-sm mt-4 space-y-2 ml-4">
              <li>Providing project details, pricing, and site visit schedules.</li>
              <li>Verifying your identity to prevent fraudulent inquiries.</li>
              <li>Improving our website performance and marketing relevance.</li>
              <li>Communicating via Call/SMS/WhatsApp as authorized by your form submission to our sales team.</li>
            </ul>
          </div>

          {/* Section 5: Third-Party Disclosure */}
          <div className="border-l border-white/10 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">5. Third-Party Disclosure</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties for their independent marketing. This does not include trusted service providers who assist us in operating our website, so long as those parties agree to keep this information confidential.
            </p>
          </div>

          {/* Section 6: User Rights */}
          <div className="border-l border-white/10 pl-8 py-2">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">6. Opt-Out & Contact</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              Users may request the deletion of their data or opt-out of future communications by contacting the developer’s sales office directly at <strong>sales@svchaitanya.com</strong>.
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

export default PrivacyPolicy;