import React from 'react';
import './Drinks.css';
import ListItem from '../../../components/mainManu/ListItem';

const menuDataLift = [
    {
     title: "7up",
     price: "3.9",
    },
    {
        title: "Cucomber juice",
        price: "4.3",
    },
    {
        title: "apple juice",
        price:3.3,
    },
    {
     title: "orange juice",
     price: "3.8",
    },
];
const menuDataMiddle = [
    {
     title: "coke",
     price: "3.2",
    },
    {
        title: "pepsi",
        price: "4.3",
    },
    {
        title: "red bull",
        price: "4.4",
    },
    {
     title: "bitter lemon",
     price: "3.8",
    },
];
const menuDataRight = [
    {
     title: "crush",
     price: "2.42",
    },
    {
        title: "crystal light",
        price: "4.32",
    },
    {
        title: "banana shake",
        price:3.3,
    },
    {
     title: "pineapple shake",
     price: "3.81",
    },
]
const DrinksJuics =() => {
  return (
    <div className="section">
      <div className="container beverages">
      <h1 className="heading-secondary">
          Non Alcoholic <span> Beverages</span>
        </h1>

        <div className="grid-container">
          <div>
          {menuDataLift.map((data, i)=>(
            <ListItem
            key={i}
            title={data.title}
            description={data.description}
            price={data.price}
            />
          ))}
          </div>
          <div>
          {menuDataMiddle.map((data, i)=>(
            <ListItem
            key={i}
            title={data.title}
            description={data.description}
            price={data.price}
            />
          ))}
          </div>
          <div>
          {menuDataRight.map((data, i)=>(
            <ListItem
            key={i}
            title={data.title}
            description={data.description}
            price={data.price}
            />
          ))}
          </div>
          </div>

      </div>
      </div>
  )
}

export default DrinksJuics
