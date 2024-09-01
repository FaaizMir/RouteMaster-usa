import  { useState } from "react";
import { FaTruck, FaMapPin } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

const DrayageForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    origin: "",
    destination: "",
    equipmentType: "",
    equipmentSize: "",
    numContainers: "",
    commodity: "",
    weight: "",
    additionalDetails: "",
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
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        email: "",
        origin: "",
        destination: "",
        equipmentType: "",
        equipmentSize: "",
        numContainers: "",
        commodity: "",
        weight: "",
        additionalDetails: "",
      });
      setLoading(false);
      setErrors({});
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.company.trim()) {
      errors.company = "Company is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.origin.trim()) {
      errors.origin = "Origin is required";
    }
    if (!formData.destination.trim()) {
      errors.destination = "Destination is required";
    }
    if (!formData.equipmentType.trim()) {
      errors.equipmentType = "Equipment type is required";
    }
    if (!formData.equipmentSize.trim()) {
      errors.equipmentSize = "Equipment size is required";
    }
    if (!formData.numContainers.trim()) {
      errors.numContainers = "Number of containers is required";
    }
    if (!formData.commodity.trim()) {
      errors.commodity = "Commodity is required";
    }
    if (!formData.weight.trim()) {
      errors.weight = "Weight is required";
    }
    if (!formData.additionalDetails.trim()) {
      errors.additionalDetails = "Additional details are required";
    }
    return errors;
  };

  return (
    <div>
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
                <FaTruck className="h-10 w-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-center  text-white" />
              </div>
              <div className="">
                <p className="mb-2">Efficient Carriers</p>
                <span className="font-normal text-gray-600">Partner with top-notch carriers to ensure swift and reliable deliveries.</span>
              </div>
            </div>
            {/* <div className="mb-5 flex font-medium">
              <div className="mr-4">
                <GoPackage className="h-10 w-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-center  text-white" />
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
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="First Name"
              />
              {errors.firstName && <div className="text-red-500 mt-1 text-left text-xs">{errors.firstName}</div>}
              
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Last Name"
              />
              {errors.lastName && <div className="text-red-500 mt-1 text-left text-xs">{errors.lastName}</div>}
              
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Company"
              />
              {errors.company && <div className="text-red-500 mt-1 text-left text-xs">{errors.company}</div>}
              
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Phone"
              />
              {errors.phone && <div className="text-red-500 mt-1 text-left text-xs">{errors.phone}</div>}
              
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Email Address"
              />
              {errors.email && <div className="text-red-500 mt-1 text-left text-xs">{errors.email}</div>}
              
              <input
                id="origin"
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Origin (City/State/Province/Zip)"
              />
              {errors.origin && <div className="text-red-500 mt-1 text-left text-xs">{errors.origin}</div>}
              
              <input
                id="destination"
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Destination (City/State/Province/Zip)"
              />
              {errors.destination && <div className="text-red-500 mt-1 text-left text-xs">{errors.destination}</div>}
              
              <select
                id="equipmentType"
                name="equipmentType"
                value={formData.equipmentType}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              >
                <option value="">Select Equipment Type</option>
                <option value="Standard">Standard</option>
                <option value="High Cube">High Cube</option>
                <option value="Refrigerated">Refrigerated</option>
                <option value="Open Top">Open Top</option>
                <option value="Flat rack">Flat rack</option>
                <option value="Out Of Gauge">Out Of Gauge</option>
                <option value="Van Trailer">Van Trailer</option>
              </select>
              {errors.equipmentType && <div className="text-red-500 mt-1 text-left text-xs">{errors.equipmentType}</div>}
              
              <select
                id="equipmentSize"
                name="equipmentSize"
                value={formData.equipmentSize}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
              >
                <option value="">Select Equipment Size</option>
                <option value="20 FT">20 FT</option>
                <option value="40 FT">40 FT</option>
                <option value="45 FT">45 FT</option>
                <option value="48 FT">48 FT</option>
                <option value="53 FT">53 FT</option>
              </select>
              {errors.equipmentSize && <div className="text-red-500 mt-1 text-left text-xs">{errors.equipmentSize}</div>}
              
              <input
                id="numContainers"
                type="text"
                name="numContainers"
                value={formData.numContainers}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Number of Containers"
              />
              {errors.numContainers && <div className="text-red-500 mt-1 text-left text-xs">{errors.numContainers}</div>}
              
              <input
                id="commodity"
                type="text"
                name="commodity"
                value={formData.commodity}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Commodity"
              />
              {errors.commodity && <div className="text-red-500 mt-1 text-left text-xs">{errors.commodity}</div>}
              
              <input
                id="weight"
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Weight"
              />
              {errors.weight && <div className="text-red-500 mt-1 text-left text-xs">{errors.weight}</div>}
              
              <textarea
                id="additionalDetails"
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"
                placeholder="Additional Freight/Shipment Details"
              />
              {errors.additionalDetails && <div className="text-red-500 mt-1 text-left text-xs">{errors.additionalDetails}</div>}
              
              <button
                onClick={handleSubmit}
                className="mt-4 w-full rounded-lg border bg-gradient-to-r from-yellow-400 to-orange-500 justify-center p-3 text-center font-medium text-white outline-none transition focus:ring hover:text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrayageForm;
