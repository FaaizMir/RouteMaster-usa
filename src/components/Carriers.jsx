import { FaTruck, FaPhone, FaCog } from 'react-icons/fa'; // Importing icons from React Icons
import carriers from '../assets/carriers.jpg'; // Importing truck image
import Navbar from './home/Navbar';
import Footer from './home/Footer';
import { Link } from 'react-router-dom';
import GetAQuote from './home/GetAQuote';

const Carriers = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="py-44 bg-cover bg-center text-white" style={{ backgroundImage: `url(${carriers})` }}>
          <Navbar />
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">Reliable Carriers for Your Shipment Needs</h1>
            <p className="text-lg animate-slide-up">Our carriers are dedicated to transporting your goods safely and efficiently to their destination.</p>
<div className="mt-6">
<a href='#quote' className=" animate-slide-up bg-gradient-to-r from-yellow-400 to-orange-500 font-bold py-2 px-6 rounded-full hover:text-white transition duration-300 ease-in-out">Get a Quote</a>
</div>         
 </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureSection
              title="Experienced Drivers"
              description="Our carriers are staffed with experienced drivers who prioritize safety and on-time delivery."
              icon={<FaTruck size={36} />}
            />
            <FeatureSection
              title="Advanced Fleet"
              description="We maintain a modern fleet of vehicles equipped with advanced technology for secure transportation."
              icon={<FaCog size={36} />}
            />
            <FeatureSection
              title="24/7 Support"
              description="Our support team is available around the clock to address any concerns and ensure smooth operations."
              icon={<FaPhone size={36} />}
            />
            <FeatureSection
              title="Flexible Routes"
              description="We offer flexible routing options to accommodate your specific delivery needs and schedules."
              icon={<FaCog size={36} />}
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-gray-100 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-lg mb-8">Get in touch today to discuss how our carriers can fulfill your transportation requirements!</p>
            <Link to={'/contact-us'} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">Contact Us</Link>
          </div>
        </section>
      </div>
      <GetAQuote/>
      <Footer />
    </>
  );
};

const FeatureSection = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
      {icon}
      <h2 className="text-xl font-semibold my-4">{title}</h2>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default Carriers;
