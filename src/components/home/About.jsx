import { FaDollarSign, FaBriefcase, FaLeaf } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-section bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl leading-9 font-bold text-gray-900 sm:text-4xl sm:leading-10 mb-8 text-center">
        We Value Your Unique Experience, Not Just Your Business 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature icon={<FaDollarSign />} title="Create Savings" description="Reduce shipping & warehousing costs, minimize damage through smart handling, and optimize for efficient labor usage." />
          <Feature icon={<FaBriefcase />} title="Improve Efficiency" description="Eliminate manual tasks and integrate automated systems for real-time tracking and freight rates." />
          <Feature icon={<FaLeaf />} title="Grow Your Business" description="Optimize logistics, employ business intelligence, and build supply chain resilience for long-term success." />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className="feature bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
      <div className="p-6 flex items-center">
        {icon && (
          <span className="text-4xl mr-4 p-2" style={{ backgroundImage: 'linear-gradient(to right, yellow, orange)', WebkitBackgroundClip: 'text', color: 'black' }}>
            {icon}
          </span>
        )}
        <h3 className="text-xl leading-6 font-semibold text-gray-900 mb-2">{title}</h3>
      </div>
      <p className="px-6 pb-6 text-base leading-6 text-gray-700">{description}</p>
    </div>
  );
};

export default About;
