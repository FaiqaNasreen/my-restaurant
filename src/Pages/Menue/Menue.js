import React from 'react';
import './Menue.css';
import bgImage from '../../assets/coffee.jpg';
import TodayMenue from './TodayMenue';
import Breakfast from './Breakfast/Breakfast';
import LunchTime from './LunchTime/LunchTime';
import DinnerTime from './DinnerTime/DinnerTime';
import CoffeeSect from './CoffeeSec/CoffeeSect';
import HeroImage from '../../Pages/Home/HeroImagee/HeroImage';
import DrinksJuics from './drinks&Juics/DrinksJuics';
const Menue = () =>{
  return (
    <div>
    
     <HeroImage
      bgImage={bgImage}
      heading={["Our", <span>Menu</span>]}
      text="Everything we have to offer you"

    /> 
      <TodayMenue />
     <Breakfast /> 
       <LunchTime />
       <DinnerTime />
     <CoffeeSect />
       <DrinksJuics />
    </div>
  )
}

export default Menue
