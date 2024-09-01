// ServicePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import data from './Data';
import Service from './Service';
import Footer from '../Footer';
// import GetAQuote from '../GetAQuote';
const ServicePage = () => {
  const { id } = useParams();
  const service = data.find((s) => s.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <Service title={service.title} image={service.images} description={service.descriptions} slogan={service.slogan} exp={service.exp}   />
      {/* <GetAQuote/> */}
<Footer/>
    </div>
  );
};

export default ServicePage;
