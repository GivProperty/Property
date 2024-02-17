import {
  faHandHoldingDollar,
  faHandshake,
  faHouse,
  faScrewdriverWrench,
  faUserCheck,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function AboutH(props) {
  return (
    <div>
      <div className="aboutH">
        <div className="com">
          <div className="info">
            <h2>
              ABOUT US<span></span>
            </h2>
            <p>
              At GIV, we understand the significance of seamless rental
              management. Whether you're a property owner or a tenant, we're
              here to redefine your rental journey. Explore our comprehensive
              range of services tailored to meet your unique needs. From
              property marketing and tenant screening to maintenance and
              financial management, we've got you covered. Maximize your
              property's potential with our strategic marketing approach. We
              ensure your listing stands out, attracting quality tenants in no
              time. Leave the hassle of tenant screening, legal agreement,
              rental collection, follow up, maintenance to us. Our thorough
              vetting process ensures reliable and responsible occupants,
              providing you peace of mind Let us handle the financial
              intricacies.
            </p>
            <Link>Know More</Link>
          </div>
          <div className="img">
            <img
              src={require("../../Assests/Maintainance/maintain-1.jfif")}
              alt=""
            />
          </div>
        </div>

        <div className="qua-services">
          <div className="heading">
            <h2>Our Quality Services</h2>
          </div>
          <div className="content">
            <div className="content-container">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faUserCheck}
                  style={{ color: "#F76766" }}
                />
              </div>
              <div className="content-info">
                <h3>Verified Tenants</h3>
                <p>
                  We place only responsible tenants who will treat your property
                  well.{" "}
                </p>
              </div>
            </div>
            <div className="content-container">
              <div className="icon">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#f1ec40" }} />
              </div>
              <div className="content-info">
                <h3>FREE 360° Marketing</h3>
                <p>
                  We help you find tenants across 10+ Listing Portals, Verified
                  Brokers, To-Let boards, etc.
                </p>
              </div>
            </div>
            <div className="content-container">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faUsersGear}
                  style={{ color: "#265FDB" }}
                />
              </div>
              <div className="content-info">
                <h3>TENANT MANAGEMENT</h3>
                <p>
                  We provide full support to tenants from their move-in till
                  exit.
                </p>
              </div>
            </div>
            <div className="content-container">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faScrewdriverWrench}
                  style={{ color: "#57C0CE" }}
                />
              </div>
              <div className="content-info">
                <h3>MAINTENANCE & INTERIORS</h3>
                <p>We keep your property safe, intact and well-maintained.</p>
              </div>
            </div>
            <div className="content-container">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faHandshake}
                  style={{ color: "#32a852" }}
                />
              </div>
              <div className="content-info">
                <h3>FREE ASSISTED VISITS</h3>
                <p>
                  Our property managers provide unlimited house visits for
                  interested customers
                </p>
              </div>
            </div>
            <div className="content-container">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faHandHoldingDollar}
                  style={{ color: "#A666F7" }}
                />
              </div>
              <div className="content-info">
                <h3>RENT ON TIME</h3>
                <p>
                  We take responsibility for payments & follow up for any dues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutH;
