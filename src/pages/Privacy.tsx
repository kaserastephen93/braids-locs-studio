const Privacy = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last Updated: May 20, 2024</p>
          <p>At Lovet's Locs and Braids, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our booking services.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6">
            <li>Name, email address, and phone number when you book an appointment or contact us.</li>
            <li>Information about your hair type and style preferences.</li>
            <li>Payment information processed securely via our third-party payment processors (Stripe/PayPal).</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6">
            <li>Process and confirm your hair appointments.</li>
            <li>Send you appointment reminders via email or SMS.</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Improve our services and develop new organic products.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data is encrypted via Secure Socket Layer (SSL) technology.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@lovetslocs.com.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;