
const TermsAndConditions = () => {
  return (
    <div className="container bg-gray-200 mx-auto py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
      <h1 className="font-bold text-4xl text-red-900 text-center mb-6">Terms of Use</h1>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Agreement to Terms</h3>
          <p className="text-gray-700 leading-relaxed">
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Routemaster (“Routemaster”, “we”, “us”, or “our”), concerning your access to and use of the routemaster.com website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Privacy Policy</h3>
          <p className="text-gray-700 leading-relaxed">
            We care about data privacy and security. Please review our Privacy Policy. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site is hosted in the United States. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to the United States, and you agree to have your data transferred to and processed in the United States.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Intellectual Property</h3>
          <p className="text-gray-700 leading-relaxed">
            The Site and its original content, features, and functionality are owned by Routemaster and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Governing Law</h3>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>
        </section>

        {/* Contact information */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-gray-700 mb-2">
            In order to resolve a complaint regarding the Site or to receive further information regarding the use of the Site, please contact us at:
          </p>
          <address className="text-gray-700">
    <strong>Routemaster LLC</strong><br />
    {/* 1234 Main Street<br />
    Anytown, USA 12345<br /> */}
    Business: <a href="tel:+17572136837">(757) 213-6837</a><br />
    Cell: <a href="tel:+17572961162">(757)-296-1162</a><br />
    Get in touch with us: <a href="mailto:info@routemastersusa.com">info@routemastersusa.com</a>
  </address>
        </section>
      </div>
    </div>
  );
}

export default TermsAndConditions;
