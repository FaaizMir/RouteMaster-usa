import ltl from "/ltl.jpg" 
import otr from "/otr.jpg" 
import drayage from "/drayagecover.jpg"


function Services() {
  return (
    <section id="services" className="text-black bg-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-evenly">

          {/* {Service 1:Drayage Services} */}
          <div className="p-4 lg:w-1/3">
            <div className="agent-card relative overflow-hidden">
              <img
                className="agent-image w-full h-72 rounded-3xl object-cover"
                src={drayage}
                alt="drayage service"
              />
              <h3 className="text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black h-10 font-medium leading-10 absolute top-4 left-0 w-full text-center ">
                Drayage Services
              </h3>

              <div className="card-overlay absolute top-0 left-0 w-full h-full bg-gray-900 opacity-80 flex justify-center items-center">
                <div className="text-center text-white px-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-3">
                    Drayage Services
                  </h2>

                  <p className="leading-relaxed text-gray-300">
                  Efficiently bridge the gap between ports, rail yards, and distribution centers with our specialized drayage services. Our experienced team ensures the smooth transfer of containers, optimizing the first and last mile of your freight journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Service 2: LTL Services */}
          <div className="p-4 lg:w-1/3">
            <div className="agent-card relative overflow-hidden">
              <img
                className="agent-image w-full h-72 rounded-3xl object-cover"
                src={ltl}
                alt="ltl service"
              />
              <h3 className="text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black h-10 font-medium leading-10 absolute top-4 left-0 w-full text-center ">
                LTL Services
              </h3>

              <div className="card-overlay absolute top-0 left-0 w-full h-full bg-gray-900 opacity-80 flex justify-center items-center">
                <div className="text-center text-white px-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-3">
                    Less Than Truckload (LTL) Services
                  </h2>

                  <p className="leading-relaxed text-gray-300">
                    For smaller shipments, our LTL services provide a cost-effective solution. Enjoy the flexibility of sharing truck space with other shipments while ensuring your cargo is handled with care and delivered on time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: OTR Services */}
          <div className="p-4 lg:w-1/3">
            <div className="agent-card relative overflow-hidden">
              <img
                className="agent-image w-full h-72 rounded-3xl object-cover"
                src={otr}
                alt="Transportation"
              />
              <h3 className="text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black h-10 font-medium leading-10 absolute top-4 left-0 w-full text-center">
                OTR Services
              </h3>

              <div className="card-overlay absolute top-0 left-0 w-full h-full bg-gray-900 opacity-80 flex justify-center items-center">
                <div className="text-center text-white px-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-3">
                    Over the Road (OTR) Transportation Services
                  </h2>

                  <p className="leading-relaxed text-gray-300">
                    Experience reliable and cost-effective long-haul transportation with our OTR services. Whether it’s cross-country deliveries or regional shipments, our fleet of carriers and network of trusted partners ensure timely and secure transportation.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
