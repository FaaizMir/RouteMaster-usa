import  { useState } from "react";
import { FaTruck, FaMapPin } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

const LtlForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    firstName: "",
    lastName: "",
    title: "",
    phone: "",
    origin: "",
    destination: "",
    pickupDate: "",
    deliveryDate: "",
    equipment: "",
    trailerSize: "",
    freightDescription: "",
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
        firstName: "",
        lastName: "",
        title: "",
        phone: "",
        origin: "",
        destination: "",
        pickupDate: "",
        deliveryDate: "",
        equipment: "",
        trailerSize: "",
        freightDescription: "",
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
    // Add more validation rules for other fields
    return errors;
  };

  return (
    <section id="quote" className="py-12 text-black bg-gray-100 sm:py-24">
      <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
        <div className="max-w-2xl px-4 lg:pr-24">
          <p className="mb-2">Get a Quote Today</p>
          <h3 className="mb-5 text-3xl font-semibold">Shipping Solutions for Your Business</h3>
          <p className="mb-16 text-lg text-gray-600">
            We offer comprehensive shipping solutions tailored to your business needs. Contact us today for a customized quote and elevate your shipping operations.
          </p>
          <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <FaTruck className="h-10 w-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-center text-white" />
            </div>
            <div className="">
              <p className="mb-2">Efficient Carriers</p>
              <span className="font-normal text-gray-600">Partner with top-notch carriers to ensure swift and reliable deliveries.</span>
            </div>
          </div>
          {/* <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <GoPackage className="h-10 w-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-center text-white" />
            </div>
            <div className="">
              <p className="mb-2">Secure Packaging</p>
              <span className="font-normal text-gray-600">Protect your shipments with our durable and secure packaging solutions.</span>
            </div>
          </div> */}
          <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <FaMapPin className="h-10 w-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-center text-white" />
            </div>
            <div className="">
              <p className="mb-2">Global Reach</p>
              <span className="font-normal text-gray-600">Expand your market reach with our worldwide shipping capabilities.</span>
            </div>
          </div>
        </div>
        <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
          <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
            <h3 className="mb-1 inline-block text-3xl font-medium">
              <span className="mr-4">Request a Quote</span>
              <span className="inline-block rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 text-sm text-white sm:inline">Quick Response</span>
            </h3>
            <p className="text-gray-600">Tell us about your shipping needs and get a customized quote.</p>
          </div>
          <div className="p-4 sm:p-8">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your first name"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your last name"
              />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your title"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your company"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your phone number"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter your email address"
              />
              <input
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter origin (City/State/Province/Zip)"
              />
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter destination (City/State/Province/Zip)"
              />
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter pickup date"
              />
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter delivery date"
              />
              <select
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              >
                <option value="">Select equipment</option>
                <option value="Dry Van / Truckload">Dry Van / Truckload</option>
                <option value="Flatbed / Step Deck">Flatbed / Step Deck</option>
                <option value="Temperature Controlled- Fresh">Temperature Controlled- Fresh</option>
                <option value="Temperature Controlled- Frozen">Temperature Controlled- Frozen</option>
              </select>
              <select
                name="trailerSize"
                value={formData.trailerSize}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              >
                <option value="">Select trailer size</option>
                <option value="20 FT Standard">20 FT Standard</option>
                <option value="40 FT Standard">40 FT Standard</option>
                <option value="40 FT High Cube">40 FT High Cube</option>
                <option value="53 FT Trailer">53 FT Trailer</option>
              </select>
              <textarea
                name="freightDescription"
                value={formData.freightDescription}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Enter freight description / shipping details / comments"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-lg border bg-gradient-to-r from-yellow-400 to-orange-500 justify-center p-3 text-center font-medium text-white outline-none transition focus:ring hover:text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LtlForm;
