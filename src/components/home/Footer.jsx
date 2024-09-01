import { Link } from 'react-router-dom';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="text-white body-font bg-gray-900">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="lg:w-1/3 md:w-1/2 w-full mb-10 lg:mb-0">
          <h1 className="text-white font-medium title-font mb-4 text-lg">Quick Links</h1>
          <nav className="list-none mb-10">
            <li><Link to={'/'} className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link to={'/contact-us'} className="text-white hover:text-gray-300">Contact Us</Link></li>
            <li><Link to={'/shipping'} className="text-white hover:text-gray-300">Shipping</Link></li>
            <li><Link to={'/carriers'} className="text-white hover:text-gray-300">Carriers</Link></li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full mb-10 lg:mb-0">
          <h1 className="text-white font-medium title-font mb-4 text-lg">Services</h1>
          <nav className="list-none mb-10">
            <li><Link to={'/services/4'} className="text-white hover:text-gray-300">InterModal Services</Link></li>
            <li><Link to={'/services/1'} className="text-white hover:text-gray-300">Drayage Services</Link></li>
            <li><Link to={'/services/2'} className="text-white hover:text-gray-300">LTL Services</Link></li>
            <li><Link to={'/services/3'} className="text-white hover:text-gray-300">OTR Services</Link></li>
            <li><Link to={'/services/5'} className="text-white hover:text-gray-300">Warehousing Solutions</Link></li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full mb-10 lg:mb-0">
          <h1 className="text-white font-medium title-font mb-4 text-lg">About</h1>
          <nav className="list-none mb-10">
            <li><Link to={'/privacy-and-policy'} className="text-white hover:text-gray-300">Privacy & Policy</Link></li>
            <li><Link to={'/aboutus'} className="text-white hover:text-gray-300">About Us</Link></li>
            <li><Link to={'/terms-and-conditions'} className="text-white hover:text-gray-300">Terms & Conditions</Link></li>

          </nav>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5 text-gray-400">
        <div className="container px-5 mx-auto flex flex-wrap flex-col">
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-800 sm:mt-0 mt-2">© {new Date().getFullYear()} RouteMasters. All rights reserved.</p> 

      
        <p className="ml-6   text-white container px-3 mx-auto flex text-sm flex-wrap flex-col">4445 Corporation Lane Suite 193, Virginia Beach, VA 23462</p>
     <p className="ml-6  text-white container px-3 mx-auto flex flex-wrap text-sm  flex-col">+1(757)-296-1162</p>
      
      
  
  
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="#" className="text-white hover:text-gray-300 ml-4"><AiFillFacebook className="w-5 h-5"/></a>
            <a href="#" className="text-white hover:text-gray-300 ml-4"><AiOutlineTwitter className="w-5 h-5"/></a>
            <a href="#" className="text-white hover:text-gray-300 ml-4"><AiFillInstagram className="w-5 h-5"/></a>
            <a href="#" className="text-white hover:text-gray-300 ml-4"><AiOutlineYoutube className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
