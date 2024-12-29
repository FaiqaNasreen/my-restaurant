import React from 'react';
import bgImage from '../../assets/burger.jpg';
import HeroImage from '../../Pages/Home/HeroImagee/HeroImage';
import AboutInfo from './AboutInfo/AboutInfo';
import AboutData from './aboutData/AboutData';
import OurGallery from "./OurGallery/OurGallery";

function Aboutus() {
  return (
    <div>
      <HeroImage
      bgImage={bgImage}
      heading={["about us", <span className='ampersand'> & </span>, 'Photo gellery']}
      text="Take a look the place, at the people and food.... "

    /> 
    <AboutInfo />
    <AboutData />
    <OurGallery />
    </div>
  )
}

export default Aboutus