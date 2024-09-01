import { FaTruck, FaTruckLoading, FaArrowRight } from "react-icons/fa";
import details from "../../assets/details.jpg";
import { Link } from "react-router-dom";
const Details = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
        <div className="lg:w-1/2 w-full lg:pr-12 lg:py-6 lg:mb-0 mb-10">
          <img
            alt="feature"
            className="object-cover object-center rounded-3xl h-auto max-h-96 w-full"
            src={details}
          />
        </div>
        <div className="flex flex-col lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black mb-5">
              <FaTruck className="w-6 h-6 text-white" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Carriers
              </h2>
              <p className="leading-relaxed text-base">
              Maximize Your Profits with Ideal Cargo. We ensure you’re paired with suitable freight to optimize your journey and boost your revenue. Join forces with us to ensure a steady progression of your shipments
              </p>
              <Link
                to={"/carriers"}
                className="mt-3 text-black inline-flex items-center"
              >
                Learn More
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black mb-5">
              <FaTruckLoading className="w-6 h-6 text-white" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Shipping 
              </h2>
              <p className="leading-relaxed text-base">
              Efficient Solutions Tailored to Your Transport Demands Our service is equipped to manage any cargo size, providing immediate pricing, comprehensive reporting, and enhanced tracking with the support of our dedicated team. Rely on our extensive network for all your shipping requirements!
              </p>
              <Link
                to={"/shipping"}
                className="mt-3 text-black inline-flex items-center"
              >
                Learn More
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
