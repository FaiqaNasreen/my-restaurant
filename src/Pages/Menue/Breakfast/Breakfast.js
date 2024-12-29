import React from 'react';
import './Breakfast.css';
import ListItem from '../../../components/mainManu/ListItem';


const menuDataLeft = [
    {
     title: "Halwa Puri",
     description: "A traditional breakfast consisting of deep-fried bread (puri) served with a sweet semolina dessert (halwa) ",
     price: "10",
    },
    {
     title: "Paratha with Omelette",
     description: "A flaky, layered flatbread served with a spiced omelette, often accompanied by yogurt, pickles, and salad.",
     price: "8",
    },
    {
     title: "Chana Masala with Naan",
     description: " Spicy chickpea curry served with soft, freshly baked naan bread. It's a hearty and filling option for breakfast.",
     price: "14",
    },
];
const menuDataRight = [
    {
     title: "Nihari",
     description: " A slow-cooked beef stew with a rich, spicy gravy, traditionally enjoyed with naan or paratha.",
     price: "12",
    },
    {
     title: "Aloo Paratha",
     description: ": A stuffed flatbread filled with spiced mashed potatoes, typically served with yogurt and a side of salad.",
     price: "10",
    },
    {
     title: "French Toast with a Pakistani Twist",
     description: " Traditional French toast made with a spiced batter, often served with honey or jam and fruit.",
     price: "12",
    },
]
const Breakfast = ()=> {

  return (
    <div className='container breakfast'>
    <h1 className='heading-secondary'>
    <span>Break Fast</span>
    </h1>
      <div className='grid-container'>
      <div>
      {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
          </div>
        <div>
       <div>
        {menuDataRight.map((data, i) =>(
            <ListItem 
           title={data.title}
           description={data.description}
           price={data.price} />
        ))}
       </div>
        </div>
      </div>
    </div>
  )
}

export default Breakfast
