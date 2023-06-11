import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>About Us</h3>
            <p>🚀 Exciting news! Dtroffle, the leading Digital Marketing Firm, has launched its merchandise line! Elevate your style and show your passion for marketing with our exclusive collection. </p>
          </div>
          <div className="col">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="hello@dtroffle.com">Contact Us</a></li>
              <li><a href="https://dtroffle.com/careers/">Carrers</a></li>
              <li><a href="https://dtroffle.com/services/">Shipping Information</a></li>
              <li><a href="https://dtroffle.com/">Returns &amp; Exchanges</a></li>
            </ul>
          </div>
          <div className="col">
            <h3>Connect with Us</h3>
            <ul>
              <li><a href="https://www.facebook.com/dtroffleinfo/">Facebook</a></li>
              <li><a href="https://www.instagram.com/dtroffle/">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/dtroffle/?originalSubdomain=in">LinkedIn</a></li>
              <li><a href="https://www.youtube.com/channel/UCI_zbQQUPXnreJmS9DWQOKw">Youtube</a></li>
              <li><a href="https://in.pinterest.com/dtroffle/">Pinterest</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <p>&copy; 2023 Dtroffle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
