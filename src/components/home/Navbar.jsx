import  { useState, useEffect, useRef } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import data from "./services/Data";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);


  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };



  const handleScroll = () => {
    setScroll(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target) &&
  //       showLinks
  //     ) {
  //       setShowLinks(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [showLinks]);

  

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scroll ? "bg-white text-black text-lg shadow-md" : "text-white"}`}>
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row">
        <div className="flex items-center">
          <Link to="/" className="lg:flex items-center font-bold mb-4 md:mb-0">
            <div className="flex flex-col items-center">
              <img src={Logo} alt="Logo" className="h-16  mt-4" />
              <span className=" bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent text-lg mt-1 bg-clip-text">RouteMasters</span>
            </div>
          </Link>

          <button className="md:hidden focus:outline-none font-bold text-xl text-white ml-auto" onClick={handleToggleLinks}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-12 h-12"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav         ref={menuRef}
 className={`md:flex ml-auto items-center ${showLinks ? "flex flex-col text-black" : "hidden"}`}>
          <div className={`md:flex ${showLinks ? "flex flex-col bg-gray-900 text-white p-4 rounded-md" : "hidden"}`}>
            <Link to="/shipping" className="md:ml-5 font-semibold text-xl py-2 px-4 hover:bg-gray-800 rounded-md md:rounded-none md:hover:bg-transparent">
              Shippers
            </Link>
            <Link to="/carriers" className="md:ml-5 font-semibold text-xl py-2 px-4 hover:bg-gray-800 rounded-md md:rounded-none md:hover:bg-transparent">
              Carriers
            </Link>
            <Link to="/contact-us" className="md:ml-5 font-semibold text-xl py-2 px-4 hover:bg-gray-800 rounded-md md:rounded-none md:hover:bg-transparent">
              Contact Us
            </Link>
            <Link to="/aboutus" className="md:ml-5 font-semibold text-xl py-2 px-4 hover:bg-gray-800 rounded-md md:rounded-none md:hover:bg-transparent">
              About Us
            </Link>
            <div className="md:ml-5 font-semibold text-xl py-2 px-4 hover:bg-gray-800 rounded-md md:rounded-none md:hover:bg-transparent" ref={dropdownRef}>
              <button onClick={toggleDropdown}>Services</button>
              {isDropdownOpen && (
                <ul className="absolute bg-white top-full right-10 z-10">
                  {data.map((service) => (
                    <li key={service.id}>
                      <Link to={`/services/${service.id}`} className="block text-black font-semibold px-4 py-2 hover:bg-gray-300">
                        {service.title}
                      </Link>
                      <hr className="h-4 text-black" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>
        <button className={`hidden ml-5 mt-10 mr-4 ${scroll ? "text-black text-lg " : "text-white"} md:flex focus:outline-none text-4xl`} onClick={handleToggleModal}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 font-bold text-2xl h-6"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {showModal && (
          <div className="fixed top-0 right-0 h-full w-full flex items-center justify-center z-50 transition-opacity duration-1000">
            <div className="absolute right-0 bg-gray-900 w-1/4 h-screen flex flex-col justify-center">
              <button onClick={handleToggleModal} className="absolute top-0 right-0 m-3  bg-transparent border-none cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="p-5 text-white flex flex-col justify-center items-center">
                <img src={Logo} alt="Logo" className="h-16 mb-4" />
                <p className="mb-4 text-white text-center">
                  Continuously improving to offer reliable service and smooth delivery to your freight needs.
                </p>
                <p className="mb-4 text-white">Support center 24/7</p>
                <div className="text-center mb-4">
                  <p className="mb-4 text-sm font-bold text-white">
                    Business : <a href="tel:+17572136837" className="text-white inline-block" ><FaPhone className="inline-block mr-1" /> (757) 213-6837</a>
                  </p>
                  <p className="mb-4 text-sm font-bold text-white">
                    Cell : <a href="tel:+17572961162" className="text-white inline-block" ><FaPhone className="inline-block mr-1" /> (757)-296-1162</a>
                  </p>
                  <p className="text-sm font-bold text-white">
                    Get in touch with us : <a href="mailto:info@routemastersusa.com" className="text-white mt-4 inline-block" ><FaEnvelope className="inline-block mr-1" /> info@routemastersusa.com</a>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full h-full  opacity-50" onClick={handleToggleModal}></div> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
