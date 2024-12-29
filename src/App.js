import React from "react";
import Navebar from "./components/navebar/Navebar";
import {Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Delivery from './Pages/Delivery/delivery';
import Menue from "./Pages/Menue/Menue";
import Aboutus from "./Pages/About/Aboutus";
import Footer from "./components/Footer/Footer";
import ContactUs from "./Pages/ContactUs/ContactUs";
import OrderForm from "./Pages/Orderform/OrderForm";

function App() {
  return (
     <div>
        <Navebar />
        <Routes>
          <Route  path="/" element= { <Home />}/>
          <Route path="/Menue" element={<Menue />}/>
          <Route path="/delivery" element={<Delivery />}/>
          <Route path="/Aboutus" element={<Aboutus />}/>
           <Route path="/ContactUs" element={<ContactUs />} />
           <Route path="/OrderForm" element={<OrderForm />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
