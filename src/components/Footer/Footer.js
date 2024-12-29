import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
  
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>Faiqa detroit</h3>
            <p>wapda town Lahore</p>
            <p>(+92) 389 976</p>
            <p>nhyta@gmail.com</p>
            <Link to="#" className="text-white">
              rabia@faiqa-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Faiqa L.A.</h3>
            <p>Gulberg, Lahore</p>
            <p>(+92) 774 433</p>
            <p>fytghy@gmail.com</p>
            <Link to="#" className="text-white">
            sethi@faiqa-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Faiqa resturent</h3>
            <p>(+92) 345 888</p>
            <p>reqas@gmail.com</p>
            <Link to="#" className="text-white">
            resturent@faiqa-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>Faiqa dallas</h3>
            <p>Dallas, TX, United States</p>
            <p>(+92) 389 976</p>
            <p>aswer@gmail.com</p>
            <Link to="#" className="text-white">
              dallas@resturent-restaurant.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer