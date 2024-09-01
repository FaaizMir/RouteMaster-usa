// import { Link } from 'react-router-dom';
// import cover from "../../../../public/images/cover.avif"
import { useEffect } from 'react';
import Navbar from '../Navbar';
import OtrForm from './OtrForm';
import LtlForm from './LtlForm';
import WarehouseForm from './WarehouseForm';
import DrayageForm from '../DrayageForm';
import InterModalForm from './InterModalForm';
import { useParams } from 'react-router-dom';
import { useState,useRef } from 'react';
//import GetAQuote from '../GetAQuote';
//import { useState } from 'react';

const Service = ({ title, image, description, slogan, exp }) => {
  const formSectionRef = useRef(null);

  const { id } = useParams();
  const [selectedFormId, setSelectedFormId] = useState(null);

  useEffect(() => {
    // Set the selected form ID based on the ID from the route when the component mounts
    setSelectedFormId(id);
  }, [id]);

  const handleFormSelection = (formId) => {
    setSelectedFormId(formId);
    console.log(selectedFormId)
     // Scroll to the form section
     if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>

      <div className="relative">
        <Navbar />
        <div className="relative">
          <img
            style={{ width: '100vw', height: 'calc(100vh - 80px)', objectFit: 'cover' }}
            src={image[3]}
            alt="Cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">{slogan}</h1>
            <h1 className="text-lg animate-slide-up">{exp}</h1>
            <button
              onClick={() => handleFormSelection(id)}
              className="mt-8 animate-slide-up bg-gradient-to-r from-yellow-400 to-orange-500 font-bold py-2 px-6 rounded-full  hover:text-white transition duration-300 ease-in-out transform transition-transform hover:scale-110">
              Request a quote
            </button>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-900 text-4xl title-font font-bold mt-12 mb-4 transform transition-transform hover:scale-110">{title} </h1>
              <p className="leading-relaxed mb-4 leading-2 Times-Roman mt-8 text-xl">{description[0]}</p>
              <button
                onClick={() => handleFormSelection(id)} className="mt-8 animate-slide-up bg-gradient-to-r from-yellow-400 to-orange-500 font-bold py-2 px-6 rounded-full  text-white transition duration-300 ease-in-out transform transition-transform hover:scale-110">  Request a quote
              </button>
            </div>
            <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg" src={image[0]} />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg mb-6 lg:mb-0" src={image[1]} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mb-0">
              <h1 className="text-gray-900 text-4xl title-font font-bold mt-12 mb-4 transform transition-transform hover:scale-110">What we Provide?</h1>
              <p className="leading-relaxed mb-4 Times-Roman text-xl">{description[1]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font overflow-hidden bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg mb-6 lg:mb-0" src={image[2]} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mb-0">
              <h1 className="text-gray-900 text-4xl title-font font-bold mt-12 mb-4 transform transition-transform hover:scale-110">Benefits</h1>
              <p className="leading-relaxed mb-4 Times-Roman text-xl">{description[2]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" text-gray-600 body-font">
        <div className=" container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="transform transition-transform hover:scale-110 p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Customer Satisfaction Guarantee</h1>
                <p className="leading-relaxed mb-3">We are committed to ensuring your satisfaction. Our dedicated team is here to address any concerns and ensure your experience with us is positive.</p>


              </div>
            </div>
            <div className=" transform transition-transform hover:scale-110 p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">24/7 Support</h1>
                <p className="leading-relaxed mb-3">Our customer support team is available 24/7 to assist you. Whether you have questions about our services or need help with an urgent matter, we're here to help.</p>


              </div>
            </div>
            <div className="transform transition-transform hover:scale-110 p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Efficient Logistics Solutions</h1>
                <p className="leading-relaxed mb-3"> We offer efficient logistics solutions to meet your transportation needs. Our services are designed to streamline your supply chain and improve overall efficiency.</p>


              </div>
            </div>
          </div>
        </div>
      </section>
     <section ref={formSectionRef}>
       {/* Render the selected form component */}
       {selectedFormId === '1' && <DrayageForm />}
      {selectedFormId === '2' && <LtlForm />}
      {selectedFormId === '3' && <OtrForm />}
      {selectedFormId === '4' && <InterModalForm />}
      {selectedFormId === '5' && <WarehouseForm />}
     </section>

    </div>
  );
};

export default Service;
