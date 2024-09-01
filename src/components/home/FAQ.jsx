import  { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);
  const [showAnswer7, setShowAnswer7] = useState(false);



  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Frequently Asked Questions</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">Here are some common questions from our customers.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Shippers Category */}
          <div className="p-4 lg:w-1/2 w-full">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
              <div className="flex flex-col text-left justify-start">
                <button className="bg-gray-100 text-black font-bold py-2 px-4 rounded mb-2 inline-flex items-center" onClick={() => setShowAnswer1(!showAnswer1)}>
                  How do I request quotes from Routemasters?
                  <FaChevronDown className={`ml-auto w-6 h-6 ${showAnswer1 ? "transform rotate-180" : ""}`} />
                </button>
                {showAnswer1 && (
                  <div className="p-4 ">
                    You may call us at +1(757)-296-1162 or fill out our "Get Quote" online form, and one of our staff members will contact you to learn more about your company and assist you in obtaining your first price.
                  </div>
                )}
                <button className="bg-gray-100 text-black font-bold py-2 px-4 rounded mb-2 inline-flex items-center" onClick={() => setShowAnswer2(!showAnswer2)}>
                  Is it possible for me to choose my own carriers?
                  <FaChevronDown className={`ml-auto w-6 h-6 ${showAnswer2 ? "transform rotate-180" : ""}`} />
                </button>
                {showAnswer2 && (
                  <div className="p-4 ">
                    We match your shipment with the appropriate carrier to assist guarantee it arrives on schedule. In addition, our skilled team is available to handle any exceptions that may arise on your behalf.
                  </div>
                )}
                <button className="bg-gray-100 text-black font-bold py-2 px-4 rounded mb-2 inline-flex items-center" onClick={() => setShowAnswer3(!showAnswer3)}>
                  What types of equipment are compatible with your service?
                  <FaChevronDown className={`ml-auto w-6 h-6 ${showAnswer3 ? "transform rotate-180" : ""}`} />
                </button>
                {showAnswer3 && (
                  <div className="p-4 ">
                    We have great relationships with national LTL carriers and drayage businesses. We work with dependable FTL carriers for dry van (53-foot) and flatbed services.
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Carriers Category */}
          <div className="p-4 lg:w-1/2 w-full">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
              <div className="flex flex-col text-left justify-start">
                <button className="bg-gray-100 text-black font-bold py-2 px-4 rounded mb-2 inline-flex items-center" onClick={() => setShowAnswer4(!showAnswer4)}>
                  What is the process of registering with Routemasters?
                  <FaChevronDown className={`ml-auto w-6 h-6 ${showAnswer4 ? "transform rotate-180" : ""}`} />
                </button>
                {showAnswer4 && (
                  <div className="p-4 ">
                    You can call us at +1 (757)-296-1162 or email us at info@routemastersusa.com, and a member of our staff will contact you to finish the onboarding process and provide assistance.
                  </div>
                )}
                <button className="bg-gray-100 text-black font-bold py-2 px-4 rounded mb-2 inline-flex items-center" onClick={() => setShowAnswer5(!showAnswer5)}>
                  How can I access and approve load offers?
                  <FaChevronDown className={`ml-auto w-6 h-6 ${showAnswer5 ? "transform rotate-180" : ""}`} />
                </button>
                {showAnswer5 && (
                  <div className="p-4 ">
                    First, you must submit an application to become a carrier in our network. A member of our staff will contact you to confirm your company and insurance details.
                  </div>
                )}
   <button className="bg-gray-100 text-black font-bold py-2 px-4 rounded mb-2 inline-flex items-center" onClick={() => setShowAnswer6(!showAnswer6)}>
  What sort of equipment do I need?
  <FaChevronDown className={`ml-auto w-6 h-6 ${showAnswer6 ? "transform rotate-180" : ""}`} />
</button>
{showAnswer6 && (
  <div className="p-4 ">
    We presently offer loads for the following equipment types:
    <br/>
    <ul style={{ listStyleType: 'disc' }}>
      <li>Van</li>
      <li>Reefer</li>
      <li>Flatbed</li>
      <li>PowerOnly</li>
    </ul>
    This form is necessary before you may start carrying freight for us. If you want to employ a factoring business, please include a copy of your Notice of Assignment.
  </div>
)}





<button className="bg-gray-100 text-black font-bold py-2 px-4 rounded mb-2 inline-flex items-center" onClick={() => setShowAnswer7(!showAnswer7)}>
                  How can I identify loads that are suitable for me?
                  <FaChevronDown className={`ml-auto w-6 h-6 ${showAnswer7 ? "transform rotate-180" : ""}`} />
                </button>
                {showAnswer7 && (
                  <div className="p-4 ">
Our carriers' preferences, such as origin/destination pairs, driving time, equipment type, and so on, are entered into their profile during onboarding and are continually updated. Using the information, we will do load matching to discover the best-fitting loads for your needs.                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
