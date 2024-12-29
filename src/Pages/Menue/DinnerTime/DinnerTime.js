import React from 'react';
import './Dinner.css';
import ListItem from '../../../components/mainManu/ListItem';

const menuDataLeft =[
    {
        title: "Dal Makhani",
        description: "A creamy, spiced lentil curry made with black lentils and kidney beans, often cooked with butter and cream. ",
        price: "18",
    },
    {
        title: "Chicken Biryani",
        description: " A fragrant, spiced rice dish with chicken, cooked with aromatic spices and fresh coriander.",
        price: "18",
    },
    {
        title: "Beef Nihari",
        description: "A slow-cooked beef stew with a rich, spicy gravy, often enjoyed with naan or paratha.",
        price: "22",
    },
    {
        title: "Pulao",
        description: 'A mildly spiced rice dish cooked with meat , vegetables, and aromatic spices',
        price: "17",
    }
];
const menuDataRight = [

    {
            title: "Seekh Kebabs",
            description: "Minced meat skewers, seasoned with a mix of spices and herbs, then grilled to perfection.",
            price: "18",
        },
        {
            title: "Karahi Chicken",
            description: "Chicken cooked in a wok-like pan and a blend of spices. It's usually served with naan or rice.",
            price: "19",
        },
        {
            title: "Aloo Gosht",
            description: "A curry made with tender pieces of meat (usually beef or lamb) and potatoes in a spicy gravy.",
            price: "20",
        },
     {
            title: "Chana Masala",
            description: "A spicy chickpea curry often served with rice or naan. It’s a popular vegetarian option.",
            price: "16",
        },
    ]

const DinnerTime = () => {
  return (
    <div className='container dinner'>
    <h1 className='heading-secondary'>
        <span>Dinner Time</span>
    </h1>
    <div className='grid-container'>
        <div>
       {menuDataLeft.map((data, i) =>(
        <ListItem 
            title={data.title}
            description={data.description}
            price={data.price}
        />
       ))}
        </div>
        <div>
       {menuDataRight.map((data, i) =>(
        <ListItem 
            title={data.title}
            description={data.description}
            price={data.price}
        />
       ))}
        </div>
    </div>
      
    </div>
  )
}

export default DinnerTime
