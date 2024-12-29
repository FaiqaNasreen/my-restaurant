import React, { useState } from 'react';
import "./testyMeal.css";
import image1 from './../../assets/burger.jpg';
import image2 from './../../assets/cheese.jpg';
import image3 from './../../assets/img1.jpg';
import image4 from './../../assets/coffee.jpg';
import image5 from './../../assets/pizza.jpeg';
import image6 from './../../assets/cheese2.jpg';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillStarFill } from 'react-icons/bs';

const TestyMeal = () => {
 const [Items, setItems] = useState([
  {id:1, url:image1},
  {id:2, url:image2},
  {id:3, url:image3},
  {id:4, url:image4},
  {id:5, url:image5},
  {id:6, url:image6}
 ]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 5000,
  };
  return (
    <div className='section'>
       <div className='container'>
         <div className='amazing-container'>
           <div className='amazing-carousal'>
           <div>
            <Slider {...settings}>
              {Items.map(item => (
                <div key={item.id}>
                  <img src={item.url} alt='carousal pic'/>
                </div>

              )
              )}
            </Slider>
           </div>

           </div>
          <div className='content'>
            <h2 className='heading-secondary'>
            Delicious Food <span className='ampersand'>&#38; great</span>
            <br /> <span>
               <br />Entertainment & Enjoy
            </span></h2>
            <h4>We Hope To see you soon InshaAllah</h4>
              <p>
              At our restaurant, we pride ourselves on offering a culinary experience that combines 
              exceptional quality with a diverse menu to suit every taste. We source our ingredients
             from local farmers and trusted suppliers to ensure freshness and flavor in every dish.
              Our skilled chefs craft each meal with precision and creativity, using time-honored 
              techniques and innovative methods to delight your palate. Our efficient kitchen and 
              delivery systems are designed to get your meal to you quickly 
              without compromising on flavor or freshness. Whether you choose to dine in or opt for
               our speedy delivery service, you can count on us for a high-quality dining experience that 
               arrives on time and exceeds your expectations.
              </p>
            <br />
            <br/>
            Our restaurant is committed to delivering not only exceptional food quality but also fast
             and reliable service. We ensure that each dish is prepared with the freshest ingredients 
             and delivered to your table promptly, maintaining the highest standards of taste and presentation.
             <blockquote>
              Email:faiqaresturant@gmail.com.<br/> contect us:+923453636.
            </blockquote>
          </div>
         </div>
           <div className='amazing-card-container'>
         <div className="amazing-card amazing-card-left">
            <img src={image1} alt="burger" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
           <BsFillStarFill  color="#c3512f" />
           <h3 className="heading-tertiary">
            best <span>Ingredents</span>
           </h3>
         </div>
          <p>
          We ensure that each dish is prepared with the freshest ingredients and maintaining the highest standards of taste 
          and presentation.
          </p>
         </div>

     </div>
     <div className="amazing-card amazing-card-right">
   <img src={image2} alt="cheese" className="amazing-card-image" />
            <div className="amazing-card-content">
              <div className="amazing-card-title">
           <BsFillStarFill  color="#c3512f" />
           <h3 className="heading-tertiary">
           The best <span>Ingredents</span>
           </h3>
         </div>
          <p>
          We ensure that each dish is prepared with the freshest ingredients and maintaining the highest standards of taste 
          and presentation.
          </p>
         </div>

         </div>
   </div>     
       </div>

    </div>
  )
}

export default TestyMeal