import cover from "../assets/cover.jpg";
import Navbar from './home/Navbar';

const ContactUs = () => {
  const image = `url(${cover})`; // Define the cover variable with the URL of the image

  return (
    <section className="min-h-screen bg-cover" style={{ backgroundImage: image }}>
      <Navbar />

      <section className="container mx-auto px-6 py-12">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-semibold text-gray-800 mt-20 capitalize dark:text-white lg:text-3xl">
              Contact us for more info
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <ContactItem icon={<LocationIcon />} text="4445 Corporation Lane Suite 193, Virginia Beach, VA 23462" />
              <ContactItem icon={<PhoneIcon />} text="(757)-296-1162" telLink="tel:+17572961162" />
              <ContactItem icon={<PhoneIcon />} text="(757) 734-4759" telLink="tel:+17577344759" />
              <ContactItem icon={<EmailIcon />} text="info@routemastersusa.com" mailtoLink="mailto:info@routemastersusa.com" />
            </div>
          </div>

          <div className="mt-20 lg:w-1/2 lg:mx-6">
            <div className="relative bg-black opacity-60 rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50">
              <div className="px-8 py-10">
                <h1 className="text-lg font-medium text-white">What do you want to ask</h1>

                <form className="mt-6">
                  <InputField label="Full Name" type="text" placeholder="John Doe" />
                  <InputField label="Email address" type="email" placeholder="example@example.com" />
                  <textarea className="block w-full h-32 px-5 py-3 mt-2 bg-black text-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>

                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

const ContactItem = ({ icon, text, telLink, mailtoLink }) => {
  return (
    <p className="flex items-start -mx-2">
      {icon}
      <span className="mx-2 text-white  w-96">
        {telLink ? <a href={telLink}>{text}</a> : null}
        {mailtoLink ? <a href={mailtoLink}>{text}</a> : null}
        {!telLink && !mailtoLink ? text : null}
      </span>
    </p>
  );
};

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6l8 4-8 4-8-4 8-4zm0 0v12" />
  </svg>
);

const InputField = ({ label, type, placeholder }) => (
  <div className="flex-1 mt-6">
    <label className="block mb-2 text-md font-bold text-white">{label}</label>
    <input type={type} placeholder={placeholder} className="block w-full px-5 py-3 mt-2 bg-black text-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
  </div>
);

export default ContactUs;
