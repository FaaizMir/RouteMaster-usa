import  { useState } from "react";
import { FaTruck , FaMapPin} from "react-icons/fa6";
import { GoPackage } from "react-icons/go";

const WarehouseForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    title: "",
    company: "",
    phone: "",
    email: "",
    comments: "",
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
        lastName: "",
        title: "",
        company: "",
        phone: "",
        email: "",
        comments: "",
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
          {/* <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <GoPackage className="h-10 w-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-center  text-white"  />
            </div>
            <div className="">
              <p className="mb-2">Secure Packaging</p>
              <span className="font-normal text-gray-600">Protect your shipments with our durable and secure packaging solutions.</span>
            </div>
          </div> */}
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
          <div className="p-4 sm:p-8 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block mb-1 text-sm font-medium text-gray-600">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your full name"
              />
              {errors.fullName && <div className="text-red-500 mt-1 text-left text-xs">{errors.fullName}</div>}
            </div>
            {/* Add other inputs similarly */}
            <div>
              <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-600">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your last name"
              />
              {errors.lastName && <div className="text-red-500 mt-1 text-left text-xs">{errors.lastName}</div>}
            </div>
            <div>
              <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-600">Title</label>
              <input
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your title"
              />
              {errors.title && <div className="text-red-500 mt-1 text-left text-xs">{errors.title}</div>}
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-600">Phone</label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your phone number"
              />
              {errors.phone && <div className="text-red-500 mt-1 text-left text-xs">{errors.phone}</div>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your email address"
              />
              {errors.email && <div className="text-red-500 mt-1 text-left text-xs">{errors.email}</div>}
            </div>
            <div className="col-span-2">
              <label htmlFor="company" className="block mb-1 text-sm font-medium text-gray-600">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your company name"
              />
              {errors.company && <div className="text-red-500 mt-1 text-left text-xs">{errors.company}</div>}
            </div>
            <div className="col-span-2">
              <label htmlFor="comments" className="block mb-1 text-sm font-medium text-gray-600">Comments</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter any additional comments or requirements"
              ></textarea>
              {errors.comments && <div className="text-red-500 mt-1 text-left text-xs">{errors.comments}</div>}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full rounded-lg border bg-gradient-to-r from-yellow-400 to-orange-500 justify-center p-3 text-center font-medium text-white outline-none transition focus:ring hover:text-white"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WarehouseForm;
