import React, { useState } from 'react';
import './OrderForm.css'; 
import bgImage from '../../assets/pasta.jpeg';
import HeroImage from '../../Pages/Home/HeroImagee/HeroImage';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        order: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };


    return (
        <div>
         <HeroImage className="order"
      bgImage={bgImage}
      heading={["Place Order", <span> Now </span>]}
      text="Feel free to place your order now "

    /> 
        <div className="container orderform ">
         <h1>Please Order Now </h1>
            <form id="order-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="orderfor">
                    <label htmlFor="order">Order:</label>
                    <textarea
                        id="order"
                        name="order"
                        rows="4"
                        value={formData.order}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit Order</button>
            </form>
        </div></div>
    );
};

export default OrderForm;
