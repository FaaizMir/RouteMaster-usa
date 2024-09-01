import Navbar from "./Navbar";
import Logo from "../../assets/Logo.png";
import header from "/herovideo.mp4"; // Assuming you have the video file imported properly

const Header = () => {
  return (
    <div>
      <Navbar />
      <section className="relative overflow-hidden h-screen">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute top-0 left-0"
        >
          <source src={header} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Logo and Text */}
        <div className="container px-5 py-10 md:py-32 mx-auto">
          <div className="lg:w-full lg:pl-42 mx-auto flex flex-wrap items-center justify-center md:justify-start relative">
            {/* Logo Image (visible on large screens) */}
            <img
              alt=""
              className="lg:w-1/4 mt-10 ml-10 w-2/4 lg:block hidden absolute object-cover object-center rounded left-0 top-0"
              src={Logo}
            />
            {/* Text Container */}
            <div className="lg:w-2/4 w-full lg:pl-42 mt-32 pr-4 absolute right-0 top-0">
              <h1 className="text-white mt-6 text-4xl md:text-6xl font-bold mb-4 ml-4 animate-slide-up ">
                Navigating Success, One Freight at a Time
              </h1>
              <h6 className="mb-6 text-white ml-4 animate-slide-up ">
                Seamlessly connected solutions for your Transportation and
                Warehousing Needs.
              </h6>
              <a
                href="#quote"
                className="border-2 bg-gradient-to-r from-yellow-400 to-orange-500 animate-slide-up border-white rounded-full text-white font-bold py-2 px-4 ml-4 focus:outline-none focus:ring"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
