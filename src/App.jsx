
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/home/Main";
import ServicePage from "./components/home/services/ServicePage";
import"./App.css"
import ViewTermsConditions from "./components/home/ViewTermsConditions";
import ContactUs from "./components/ContactUs";
import Shipping from "./components/Shipping";
import Carriers from "./components/Carriers";
import GetAQuote from "./components/home/GetAQuote";
import DrayageForm from "./components/home/DrayageForm";
import LtlForm from "./components/home/services/LtlForm";
import OtrForm from "./components/home/services/OtrForm";
import WarehouseForm from "./components/home/services/WarehouseForm";
import InterModalForm from "./components/home/services/InterModalForm";
import AboutUs from "./components/AboutUs";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
 

  return (
   
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Main/>} />    
    <Route path="/contact-us" element={<ContactUs/>} />
    <Route path="/shipping" element={<Shipping/>} />
    <Route path="/carriers" element={<Carriers/>} />



    <Route path="/privacy-and-policy" element={<ViewTermsConditions/>} />

    <Route path="services/:id" element={<ServicePage />} />

    <Route path="/getaquote" element={<GetAQuote />} />

    <Route path="/drayageform" element={<DrayageForm />} />
    <Route path="/ltlform" element={<LtlForm />} />
    <Route path="/otrform" element={<OtrForm />} />
    <Route path="/warehouseform" element={<WarehouseForm />} />
    <Route path="/intermodalform" element={<InterModalForm />} />


    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

  </Routes>
</BrowserRouter>
  );
}

export default App;
