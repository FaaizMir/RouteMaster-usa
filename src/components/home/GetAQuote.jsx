import  { useState } from "react";
import { FaTruck , FaMapPin} from "react-icons/fa6";


const GetAQuote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Simple form validation
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
    } else {
      // Handle form submission here (e.g., send data to backend)
      console.log(formData);
      // Reset form data after submission
      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
      });
      setLoading(false);
      setErrors({});
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    // You can add more validation rules for other fields here
    return errors;
  };

  return (
    <section id="quote" className="py-12 text-black bg-gray-100 sm:py-24">
      <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
        <div className="max-w-2xl px-4 lg:pr-24">
          <p className="mb-2 ">Get a Quote Today</p>
          <h3 className="mb-5 text-3xl font-semibold">Shipping Solutions for Your Business</h3>
          <p className="mb-16 text-lg text-gray-600">
            We offer comprehensive shipping solutions tailored to your business needs. Contact us today for a customized quote and elevate your shipping operations.
          </p>
          <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <FaTruck className="h-10 w-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-center  text-white"  />
            </div>
            <div className="">
              <p className="mb-2">Efficient Carriers</p>
              <span className="font-normal text-gray-600">Partner with top-notch carriers to ensure swift and reliable deliveries.</span>
            </div>
          </div>
         
          <div className="mb-5 flex font-medium">
            <div className="mr-4  ">
              <FaMapPin className="h-10 w-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-center  text-white" />
            </div>
            <div className="">
              <p className="mb-2">Global Reach</p>
              <span className="font-normal text-gray-600">Expand your market reach with our worldwide shipping capabilities.</span>
            </div>
          </div>
          {/* Add more features related to your business */}
        </div>
        <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
          <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
            <h3 className="mb-1 inline-block text-3xl font-medium">
              <span className="mr-4">Request a Quote</span>
              <span className="inline-block rounded-md  bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 text-sm text-white sm:inline">Quick Response</span>
            </h3>
            <p className="text-gray-600">Tell us about your shipping needs and get a customized quote.</p>
          </div>
          <div className="p-4 sm:p-8">
            <input
              id="name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              placeholder="Enter your name"
            />
            {errors.fullName && <div className="text-red-500 mt-1 text-left text-xs">{errors.fullName}</div>}
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer mt-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && <div className="text-red-500 mt-1 text-left text-xs">{errors.email}</div>}
            <label className="mt-5 mb-2 inline-block max-w-full">Tell us about your shipping requirements</label>
            <textarea
              id="about"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mb-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              placeholder="Enter your shipping needs"
            ></textarea>
           <button
  onClick={handleSubmit}
  className="w-full rounded-lg border bg-gradient-to-r from-yellow-400 to-orange-500 justify-center p-3 text-center font-medium text-white outline-none transition focus:ring hover:text-white"
  disabled={loading}
>
  {loading ? "Sending..." : "Send"}
</button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAQuote;
