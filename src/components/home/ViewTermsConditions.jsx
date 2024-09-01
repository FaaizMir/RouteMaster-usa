import  { useRef } from 'react';

const ViewTermsConditions = () => {
  const welcomeRef = useRef(null);
  const limitationRef = useRef(null);
  const indemnificationRef = useRef(null);
  const modificationRef = useRef(null);
  const governingLawRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100, // Adjusting scroll position to offset fixed navbar
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12">
      <div className="bg-white p-8 rounded shadow-md w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 className="font-bold text-4xl text-red-900 text-center mb-6">Privacy and Policy</h1>

        {/* Table of Contents */}
        <div className="mb-6 text-gray-800">
          <h2 className="text-lg font-semibold mb-2">Table of Contents</h2>
          <ul className="list-disc pl-4">
            <li className="cursor-pointer hover:text-red-600" onClick={() => scrollToRef(welcomeRef)}>Welcome</li>
            <li className="cursor-pointer hover:text-red-600" onClick={() => scrollToRef(limitationRef)}>Limitation of Liability</li>
            <li className="cursor-pointer hover:text-red-600" onClick={() => scrollToRef(indemnificationRef)}>Indemnification</li>
            <li className="cursor-pointer hover:text-red-600" onClick={() => scrollToRef(modificationRef)}>Modification of Terms</li>
            <li className="cursor-pointer hover:text-red-600" onClick={() => scrollToRef(governingLawRef)}>Governing Law</li>
            <li className="cursor-pointer hover:text-red-600" onClick={() => scrollToRef(contactUsRef)}>Contact Us</li>
          </ul>
        </div>

        {/* Sections */}
        <section ref={welcomeRef} className="mb-8">
          <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-2">Welcome to Route Masters LLC’s website.</h2>
          <p>
            By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms and conditions carefully before using our website.
          </p>
        </section>

        <section ref={limitationRef} className="mb-8">
          <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-2">Limitation of Liability</h2>
          <p>
            In no event shall Route Masters LLC, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from:
          </p>
          <ol className="list-decimal pl-4">
            <li>Errors, mistakes, or inaccuracies of content</li>
            <li>Personal injury or property damage, of any nature whatsoever, resulting from your access to and use of our website</li>
            <li>Any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein</li>
            <li>Any interruption or cessation of transmission to or from our website</li>
            <li>Any bugs, viruses, trojan horses, or the like, which may be transmitted to or through our website by any third party, and/or</li>
            <li>Any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the website, whether based on warranty, contract, tort, or any other legal theory, and whether or not Route Masters LLC is advised of the possibility of such damages</li>
          </ol>
        </section>

        <section ref={indemnificationRef} className="mb-8">
          <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-2">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Route Masters LLC, its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney’s fees) arising from:
          </p>
          <ol className="list-decimal pl-4">
            <li>Your use of and access to the website;</li>
            <li>Your violation of any term of these terms and conditions;</li>
            <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right;</li>
            <li>Any claim that your content caused damage to a third party. This indemnification obligation will survive these terms and conditions and your use of the website.</li>
          </ol>
        </section>

        <section ref={modificationRef} className="mb-8">
          <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-2">Modification of Terms</h2>
          <p>
            Route Masters LLC reserves the right to modify or replace these terms and conditions at any time, at our sole discretion. Your continued use of our website after any such changes constitutes your acceptance of the new terms and conditions. Please review this page periodically for updates.
          </p>
        </section>

        <section ref={governingLawRef} className="mb-8">
          <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-2">Governing Law</h2>
          <p>
            These terms and conditions shall be governed by and construed in accordance with the laws of the state of Virginia, without regard to its conflict of law provisions.
          </p>
        </section>

        <section ref={contactUsRef} className="mb-8">
          <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-2">Contact Us</h2>
          <p>
          If you have any questions about these terms and conditions, please contact us at <a href='mailto:info@routemastersusa.com' className="font-bold text-black">info@routemastersusa.com</a>.
          </p>
        </section>

        <p className="mb-4">
          By using our website, you agree to abide by these terms and conditions. If you do not agree to these terms and conditions, please refrain from using our website. Thank you for visiting Route Masters LLC’s website.
        </p>
      </div>
    </div>
  );
};

export default ViewTermsConditions;
