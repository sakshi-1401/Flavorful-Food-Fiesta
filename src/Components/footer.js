// Footer.js
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Phone: +123 456 7890</p>
            <p>Email: contact@foodfiesta.com</p>
            <p>Location: 123 Flavor St, Food City, FC 12345</p>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>At Food Fiesta, we celebrate the art of culinary excellence, bringing you flavors that tantalize your taste buds and warm your heart.</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p>
              <a href="https://facebook.com" className="social-link">Facebook</a> |
              <a href="https://twitter.com" className="social-link">Twitter</a> |
              <a href="https://instagram.com" className="social-link">Instagram</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Food Fiesta. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
