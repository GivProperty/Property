import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import "./SingleLocation.css";

function SingleLocation(props) {
  return (
    <div>
      <Navbar />

      <div className="singleLocationWrapper">
        <div className="singleLocation">
          <div className="heading">
            <h2>Search results of all the properties in Whitefield</h2>
          </div>

          <div className="properties-container">
            <div className="property-box">
              <div className="property-img">
                <img
                  loading="lazy"
                  src={require("../../Assests/banner.webp")}
                  alt=""
                />
                <Link to={"/properties/01"}>View</Link>
              </div>
              <div className="property-info">
                <span className="address">
                  3 BHK Fully Furnished, Villa, Kadugodi,
                </span>
                <span className="address">Bangalore</span>
                <div className="icons">
                  <div className="icon">
                    <p>Bedrooms</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>3</p>
                  </div>
                  <div className="icon">
                    <p>Area(sqft)</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>1600</p>
                  </div>
                  <div className="icon">
                    <p>Bathrooms</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>3</p>
                  </div>
                  <div className="icon">
                    <p>Deposit</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>250000</p>
                  </div>
                </div>
                <span className="amount">
                  ₹<span className="value">30000</span>/month
                </span>
              </div>
            </div>
            <div className="property-box">
              <div className="property-img">
                <img src={require("../../Assests/banner.webp")} alt="" />
                <Link>View</Link>
              </div>
              <div className="property-info">
                <span className="address">
                  3 BHK Fully Furnished, Villa, Kadugodi,
                </span>
                <span>Bangalore</span>
                <div className="icons">
                  <div className="icon">
                    <p>Bedrooms</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>3</p>
                  </div>
                  <div className="icon">
                    <p>Area(sqft)</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>1600</p>
                  </div>
                  <div className="icon">
                    <p>Bathrooms</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>3</p>
                  </div>
                  <div className="icon">
                    <p>Deposit</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>250000</p>
                  </div>
                </div>
                <span className="amount">
                  ₹<span className="value">30000</span>/month
                </span>
              </div>
            </div>
            <div className="property-box">
              <div className="property-img">
                <img src={require("../../Assests/banner.webp")} alt="" />
                <Link>View</Link>
              </div>
              <div className="property-info">
                <span className="address">
                  3 BHK Fully Furnished, Villa, Kadugodi,
                </span>
                <span>Bangalore</span>
                <div className="icons">
                  <div className="icon">
                    <p>Bedrooms</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>3</p>
                  </div>
                  <div className="icon">
                    <p>Area(sqft)</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>1600</p>
                  </div>
                  <div className="icon">
                    <p>Bathrooms</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>3</p>
                  </div>
                  <div className="icon">
                    <p>Deposit</p>
                    <FontAwesomeIcon icon={faBed} />
                    <p>250000</p>
                  </div>
                </div>
                <span className="amount">
                  ₹<span className="value">30000</span>/month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SingleLocation;
