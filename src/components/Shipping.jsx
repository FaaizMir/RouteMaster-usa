import { FaTruck, FaPhone, FaCog } from 'react-icons/fa'; // Importing icons from React Icons
import shipping from "../assets/shipping.jpg"
import Navbar from './home/Navbar';
import Footer from './home/Footer';
import { Link } from 'react-router-dom';
import GetAQuote from './home/GetAQuote';
const Shipping = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      <section className="py-44 bg-cover bg-center text-white" style={{ backgroundImage: `url(${shipping})` }}>
      <Navbar/>
        <div className="container mx-auto my-12 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-slide-up">Swift Solutions for Every Shipping Need</h1>
          <p className="text-lg animate-slide-up">Route Masters is here to help plan your shipment’s journey from start to finish with a
            strong focus on safety, timeliness, and sustainability.</p>
            <div className="mt-6">
            <a href='#quote' className=" animate-slide-up bg-gradient-to-r from-yellow-400 to-orange-500 font-bold py-2 px-6 rounded-full  hover:text-white transition duration-300 ease-in-out">Get a Quote</a>

            </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12  bg-gray-100">
        <div className="container mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureSection
            title="Quality Carriers"
            description="Our team matches shipments to the right carriers to ensure on-time shipments and a smooth delivery."
            icon={<FaTruck size={36} />}
          />
          <FeatureSection
            title="Consistent Results"
            description="Shipping is not always as easy as getting from point A to point B, especially when unexpected problems arise."
            icon={<FaCog size={36} />}
          />
          <FeatureSection
            title="Live Communication"
            description="When plans change, the last thing you need is to talk to a machine. With Route Masters, you can feel confident that a live person will pick up your call every time so that we can solve your problems quickly and efficiently."
            icon={<FaPhone size={36} />}
          />
          <FeatureSection
            title="Innovative Technology"
            description="While other third-party logistics companies (3PL) are focused on sales, we’re focused on solutions. We strive to be industry leaders and are always improving our products and services to better serve our customers."
            icon={<FaCog size={36} />}
          />
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-12 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Contact us today to discuss your shipping needs and get a custom quote!</p>
          <Link to={'/contact-us'}  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">Contact Us</Link>
        </div>
      </section>
    </div>
    <GetAQuote/>

    <Footer/>
    </>
  );
};

const FeatureSection = ({ title, description, icon, image }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
      {icon}
      <h2 className="text-xl font-semibold my-4">{title}</h2>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default Shipping;
