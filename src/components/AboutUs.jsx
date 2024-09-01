import Footer from "./home/Footer";
import shipping from "../assets/shipping.jpg";
//import about from "../assets/about-img.jpg"
import Navbar from "./home/Navbar";
import GetAQuote from "./home/GetAQuote";
import { Link } from "react-router-dom";
import { FaTruck, FaLeaf, FaBriefcase, FaFlag, FaStar, FaCheck } from 'react-icons/fa';
import heroone from "../assets/mission.jpg";
import introduction from "../assets/introduction.jpg";
import herotwo from "../assets/details.jpg";

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
     <div>
     <section
        className="py-44 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${shipping})`,
      minHeight: "60vh" }}
        
      >
        <Navbar />
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            About Route Masters
          </h1>
          <a className="animate-slide-up bg-gradient-to-r from-yellow-400 to-orange-500 font-bold py-2 px-4 sm:px-6 rounded-full hover:text-white transition duration-300 ease-in-out text-base sm:text-lg" href="#quote">
            
          
            Get a Quote
        </a>
        </div>
      </section>
     </div>

      {/* Introduction Section */}
      <section className="text-gray-800 bg-gray-100 py-12 md:py-20">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
    <img className="object-cover object-center rounded-md w-full md:w-1/2 md:pr-8 mb-6 md:mb-0" alt="hero" src={introduction} />
    <div className="md:w-1/2 text-center md:text-left md:pl-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Introduction</h2>
      <p className="leading-loose text-sm sm:text-base md:text-lg">
        At RouteMasters, we redefine the way goods move, providing innovative and reliable freight brokerage solutions. As your dedicated partner in logistics, we prioritize efficiency, transparency, and client satisfaction. Navigate the complexities of freight transportation with confidence, knowing that RouteMasters is committed to delivering seamless and tailored services.
      </p>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="text-gray-600 body-font py-12 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="title-font text-3xl text-black sm:text-4xl font-bold mb-4">Our Services</h1>
            <p className="leading-loose text-sm sm:text-base md:text-lg">
              Our experienced team, equipped with advanced technology, ensures your cargo reaches its destination swiftly and securely. Whether you're a small business seeking cost-effective shipping or a large enterprise in need of streamlined logistics, RouteMasters has the expertise and resources to surpass your expectations. Experience the difference of a freight brokerage company that prioritizes your success. Welcome to RouteMasters, where every shipment is a journey we navigate with precision and reliability.
            </p>
          </div>
          <img className="object-cover object-center rounded-md w-full md:w-1/2" alt="hero" src={herotwo} />
        </div>
      </section>


      <section className="text-gray-800 bg-gray-100 py-12 md:py-20">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
    <img className="object-cover object-center rounded-md w-full md:w-1/2 md:pr-8 mb-6 md:mb-0" alt="hero" src={heroone} />
    <div className="md:w-1/2 text-center md:text-left md:ml-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Mission Statement</h2>
      <p className="leading-loose text-sm sm:text-base md:text-lg">
        At RouteMasters, our mission is to redefine the landscape of freight logistics, transcending traditional boundaries to create a seamless and efficient ecosystem for shippers and carriers. We are dedicated to delivering innovative, technology-driven solutions that optimize supply chains, enhance operational efficiency, and foster sustainable partnerships. Through our commitment to excellence, we aim to be the preferred strategic partner for businesses navigating the complex world of transportation, ensuring their cargo reaches its destination with precision and reliability.
      </p>
    </div>
  </div>
</section>

    
      {/* Core Values Section */}
      <section className="text-gray-800 bg-gray-200 px-10 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CoreValue icon={<FaTruck className="text-white" />} title="Reliability">
              We are committed to delivering on our promises with unwavering reliability. Trust in us to move your cargo efficiently and safely.
            </CoreValue>
            <CoreValue icon={<FaBriefcase className="text-white" />} title="Innovation">
              Embracing cutting-edge technology, we strive for continuous innovation to stay ahead in the dynamic freight logistics industry.
            </CoreValue>
            <CoreValue icon={<FaFlag  className="text-white"/>} title="Partnership">
              We believe in collaborative partnerships, fostering relationships with both shippers and carriers to achieve mutual success and growth.
            </CoreValue>
            <CoreValue icon={<FaStar className="text-white" />} title="Integrity">
              Integrity is the foundation of our business. We conduct ourselves with honesty, transparency, and ethical practices in every interaction.
            </CoreValue>
            <CoreValue icon={<FaCheck className="text-white" />} title="Customer-Centric approach">
              Our customers are at the heart of everything we do. We tailor our solutions to meet their unique needs, providing personalized service and support.
            </CoreValue>
            <CoreValue icon={<FaLeaf className="text-white" />} title="Sustainability">
              Committed to reducing our environmental impact, we actively pursue sustainable practices in our operations and encourage eco-friendly initiatives within our network.
            </CoreValue>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="text-gray-800 bg-gray-100 py-12 md:py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
        <Link to="/contact-us" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-8 rounded-md-full hover:text-white hover:bg-orange-600 transition duration-300 ease-in-out">
          Contact Us
        </Link>
      </section>

      <GetAQuote />
      <Footer />
    </>
  );
};

const CoreValue = ({ icon, title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 transform-gpu hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent p-2 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-700">{children}</p>
    </div>
  );
};


export default AboutUs;
