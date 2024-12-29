import React from 'react';
import "./ContactForm.css";

import bgImage from '../../../assets/cake.jpg'
function Contactform() {
  return (
    <div className='section'>
        <div className='container grid-container contact-content'>
            <div>
                <h1 className='heading-secondary'>
                    get in <span>touch</span>
                </h1>
            
                <p>Sitting atop ten floors,<span className='special-word'>consectetuer</span>
                set on the rooftop of Park and Ride Plaza Liberty, Monal Lahore has made its
                 mark in Lahore’s food market. With one indoor hall, six out door terraces and
                  a children’s play place</p>

                <img src={bgImage} alt="get in touch" />

                <p>Monal Lahore is a favorite family entertainment spot for the young and
                 old alike. Build on the country theme<span className='special-word'>Lahore</span>
                  is a perfect blend of country and contemporary architecture. A live kitchen sets 
                 a perfect backdrop to the indoor hall and the terrace it opens in to.</p>
                <p>A live kitchen sets a perfect backdrop to the indoor hall and the terrace it 
                opens in to.<span className='special-word'>Resturent</span>  And of course,
                 nothing beats the live music seven days a week.</p>
            </div>

            <div>
                <h1 className='heading-secondary'>
                    Mail <span>us</span>
                </h1>

                <form>
                    <div className='form-field name-email'>
                        <div>
                            <label>Name</label>
                            <input type="text" name='name' />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </div>
                    </div>


                    <div className='form-field'>
                        <div>
                            <label>Subject</label>
                            <input type="text" name='subject' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Message</label>
                            <textarea type="text" name='message' />
                        </div>
                    </div>
                </form>

                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contactform;