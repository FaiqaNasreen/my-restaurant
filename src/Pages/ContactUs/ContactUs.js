import React from 'react';
import bgImage from '../../assets/cheese2.jpg';
import HeroImage from '../../Pages/Home/HeroImagee/HeroImage';
import Contactform from './ContactForm/Contactform';

function ContactUs() {
  return (
    <div>
    <HeroImage
      bgImage={bgImage}
      heading={["ContactUs", <span>Us </span>]}
      text="Feel Free To contact Us at any Time  "

    /> 
    <Contactform />
    </div>
  )
}

export default ContactUs