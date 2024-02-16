import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(props) {
  return (
    <div>
      <div className="footer">
        <div className="top">
          <div className="top-container">
            <h3>About Us</h3>
            <p>
              At Global Iconic Ventures, we understand the unique challenges of
              managing real estate from a distance. As property owners who may
              reside outside the city, entrusting your valuable assets to a
              reliable property management company is crucial.
            </p>
          </div>
          <div className="top-container">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Add Propery</Link>
              </li>
              <li>
                <Link>Properties</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="top-container">
            <h3>Reach Us Now</h3>
            <div className="links">
              <Link>info@abc.com</Link>
              <a href="tel:9004843980">+91 9004843980</a>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="bottom">
          <div className="icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <div className="info">
            <h3>© 2024 Company. All Rights Reserved</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
