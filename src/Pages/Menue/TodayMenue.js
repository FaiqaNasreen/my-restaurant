import React from 'react';
import './TodayMenue.css';
import image1 from '../../assets/burger.jpg';
import image2 from '../../assets/cheese.jpeg';
import image3 from '../../assets/coffee.jpg'
import ListItem from '../../components/mainManu/ListItem';

const TodayMenue =() => {
 const memuData = [
  {
    title: "Best zinger Burger in this world",
    description: "Ground beef (or a substitute like turkey or plant-based), salt, pepper, and optional seasonings.Savory, juicy, and flavorful, with a slightly crispy exterior and a tender interior.",
    price: "5.50",
    img: image1,
  },
  {
    title: "chocolate and whipped cream cack",
    description: "Butter and milk. Variants include cream cheese, chocolate, or whipped cream.Butter, powdered sugar, vanilla extract, and milk. Variants include cream cheese, chocolate, or whipped cream.",
    price: "4.50",
    img: image2,
  },
  {
    title: "Best coffee",
    description: "Ground coffee beans brewed with hot water,sugar, milk, cream, or flavored syrups.Milk adds creaminess, sugar sweetens, and flavored syrups can add different tastes like vanilla or caramel.",
    price: "6.50",
    img: image3,
  },


  ];

  
  return (
    <div className='section'>
     <div className='container menu-of-day'>
     <h1 className='heading-secondary'>
      <span>menu</span>of the day
      </h1>
      {memuData.map((data, i) => (
          <ListItem
            title={data.title}
            description={data.description}
            price={data.price}
            itemImage={data.img}
          />
        ))}
     </div>
    
    </div>
  )
}

export default TodayMenue
