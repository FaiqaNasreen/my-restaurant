import React from 'react';
import HeroImage from "../../Pages/Home/HeroImagee/HeroImage"
import bgImage from "../../assets/cake.jpg";
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import AddToCart from "../Delivery/AddToCart/AddToCart";
function delivery() {
  return (
    <div> 
      <HeroImage 
      bgImage={bgImage}
      heading={['eat at', <span>Home</span>]}
      text='Delivery avialble Mon - Fri, 10am - 16pm'
      />
      <DeliveryInfo />
      <AddToCart/>
    </div>
  )
}

export default delivery