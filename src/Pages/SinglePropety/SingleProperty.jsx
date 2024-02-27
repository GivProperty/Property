import React from "react";
import ContactComp from "../../Common/ContactComp/ContactComp";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import ImageGallery from "react-image-gallery";
import "./SingleProperty.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import properties from "./Properties";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

function SingleProperty(props) {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [furn, setFurni] = useState(true);

  useEffect(() => {
    const foundProperty = properties.find(
      (property) => property.id === parseInt(id)
    );
    setProperty(foundProperty);
  }, [id]);

  useEffect(() => {
    const checkAllFalse = () => {
      for (let key in property?.furnishing) {
        if (property?.furnishing[key]) {
          return setFurni(true); // If any key value is true, return false
        }
      }
      return setFurni(false); // If all key values are false, return true
    };
    checkAllFalse();
  }, [id, property]);

  console.log(furn);

  return (
    <div>
      <Navbar />
      {property ? (
        <div className="singlePropertyWrapper">
          <div className="singleProperty">
            <div className="m-heading">
              <h2>{property?.name}</h2>
              <p>{property?.location}</p>
            </div>

            <div className="main-content">
              <div className="img-container">
                <ImageGallery items={property?.images} />
              </div>
            </div>

            <div className="info-content">
              <div className="info-card">
                <div className="dets-card about">
                  <div className="content">
                    <h3>About</h3>
                    <hr color="#eee" />
                    <p>{property?.about}</p>
                  </div>
                </div>

                <div className="dets-card overview">
                  <div className="content">
                    <h3>Overview</h3>
                    <hr color="#eee" />
                    <div className="am-icons">
                      <div className="am-icon">
                        <img
                          src={require("../../Assests/Amenities/bedroom.png")}
                          alt=""
                        />
                        <p>3 Bedrooms</p>
                      </div>
                      <div className="am-icon">
                        <img
                          src={require("../../Assests/Amenities/bathroom.png")}
                          alt=""
                        />
                        <p>{property?.bathroom} Bathrooms</p>
                      </div>
                      <div className="am-icon">
                        <img
                          src={require("../../Assests/Amenities/area.png")}
                          alt=""
                        />
                        <p>{property?.area} (sq.ft)</p>
                      </div>
                      <div className="am-icon">
                        <img
                          src={require("../../Assests/Amenities/calendar.png")}
                          alt=""
                        />
                        <p>Construction Year: {2024 - property?.age}</p>
                      </div>
                      <div className="am-icon">
                        <img
                          src={require("../../Assests/Amenities/compass.png")}
                          alt=""
                        />
                        <p>{property?.facing} Facing</p>
                      </div>
                      <div className="am-icon">
                        <img
                          src={require("../../Assests/Amenities/sofa.png")}
                          alt=""
                        />
                        <p>{property?.furnished}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {furn && (
                  <div className="dets-card furnishing">
                    <div className="content">
                      <h3>Furnishing</h3>
                      <hr color="#eee" />
                      <div className="am-icons">
                        {property?.furnishing.intercom && (
                          <div className="am-icon">
                            <img
                              src={require("../../Assests/Amenities/intercom.png")}
                              alt=""
                            />
                            <p>Intercom</p>
                          </div>
                        )}
                        {property?.furnishing.cupboard && (
                          <div className="am-icon">
                            <img
                              src={require("../../Assests/Amenities/cupboard.png")}
                              alt=""
                            />
                            <p>Cupboard</p>
                          </div>
                        )}
                        {property?.furnishing.geyser && (
                          <div className="am-icon">
                            <img
                              src={require("../../Assests/Amenities/water-boiler.png")}
                              alt=""
                            />
                            <p>Geyser</p>
                          </div>
                        )}
                        {property?.furnishing.CCTV && (
                          <div className="am-icon">
                            <img
                              src={require("../../Assests/Amenities/security-camera.png")}
                              alt=""
                            />
                            <p>CCTV</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="dets-card amenity">
                  <div className="content">
                    <h3>Amenities</h3>
                    <hr color="#eee" />
                    <div className="am-icons">
                      {property?.Amenities.pool && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/swimming-pool.png")}
                            alt=""
                          />
                          <p>Pool</p>
                        </div>
                      )}
                      {property?.Amenities.gym && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/gym.png")}
                            alt=""
                          />
                          <p>Gym</p>
                        </div>
                      )}
                      {property?.Amenities.lift && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/elevator.png")}
                            alt=""
                          />
                          <p>Elevator</p>
                        </div>
                      )}
                      {property?.Amenities.parking && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/parking.png")}
                            alt=""
                          />
                          <p>Parking</p>
                        </div>
                      )}
                      {property?.Amenities.powerBackup && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/electric-factory.png")}
                            alt=""
                          />
                          <p>Power Backup</p>
                        </div>
                      )}
                      {property?.Amenities.pet && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/pawprint.png")}
                            alt=""
                          />
                          <p>Pets Allowed</p>
                        </div>
                      )}
                      {property?.Amenities.garden && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/park.png")}
                            alt=""
                          />
                          <p>Garden</p>
                        </div>
                      )}
                      {property?.Amenities.sportsFacility && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/basketball-hoop.png")}
                            alt=""
                          />
                          <p>Sports Facility</p>
                        </div>
                      )}
                      {property?.Amenities.kidsArea && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/swing.png")}
                            alt=""
                          />
                          <p>Kids Area</p>
                        </div>
                      )}
                      {property?.Amenities.gasPipeline && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/water-pipe.png")}
                            alt=""
                          />
                          <p>Gas Pipeline</p>
                        </div>
                      )}
                      {property?.Amenities.waterSupply && (
                        <div className="am-icon">
                          <img
                            src={require("../../Assests/Amenities/water-tap.png")}
                            alt=""
                          />
                          <p>Water Supply</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="dets-card explore">
                  <div className="content">
                    <h3>Explore</h3>
                    <hr color="#eee" />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1375110731137!2d77.58056167512267!3d12.963051387351534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e0ed95b97b%3A0x6e7f373b9591dc5!2sExpress%20New%20City%20Complex%2C%20No.301%2C%203rd%20Floor%2C%20New%20City%20Expres%20Building%2C%2013%2C%20Narashimaraja%20Road%2C%2C%20Kumbaragundi%2C%20Kalasipalya%2C%20Bengaluru%2C%20Karnataka%20560002!5e0!3m2!1sen!2sin!4v1709024205363!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                <div className="dets-card rent">
                  <div className="content">
                    <h3>Rent & Deposit</h3>
                    <hr color="#eee" />
                    <div className="rent-list">
                      <div className="list">
                        <div className="list-heading">
                          <h3>Monthly Rent</h3>
                          <p>Pay to Owner directly</p>
                        </div>
                        <div className="amount">
                          <h3>₹{property?.rent}</h3>
                        </div>
                      </div>
                      <hr color="#fff" />
                      <div className="list">
                        <div className="list-heading">
                          <h3>Security deposit</h3>
                          <p>
                            Pay online to Nestaway on behalf of owner. Owner
                            will return the amount at the time of move-out.
                          </p>
                        </div>
                        <div className="amount">
                          <h3>₹{property?.deposit}</h3>
                        </div>
                      </div>
                      <hr color="#fff" />
                      <div className="list">
                        <div className="list-heading">
                          <h3>House Maintenance Fee</h3>
                          <p>
                            Nestaway charges a one time accommodation
                            convenience fee of ₹52542. SGST of ₹4729 and CGST of
                            ₹4729 applicable.
                          </p>
                        </div>
                        <div className="amount">
                          <h3>₹{property?.maintenance}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dets-card video">
                  <div className="content">
                    <h3>Video</h3>
                    <hr color="#eee" />
                    <div className="video">
                      <iframe
                        title="Youtube"
                        srcDoc="
          <style>
              body, .full {
                  width: 100%;
                  height: 100%;
                  margin: 0;
                  position: absolute;
                  display: flex;
                  justify-content: center;
                  object-fit: cover;
              }
          </style>
          <a
              href='https://www.youtube.com/embed/4I0ciiJDR20?si=zVPWQhcGie678Lcf&amp;controls=0'
              class='full'
          >
              <img
                  src='https://www.purenbrightcleaning.com.au/static/media/rug.cae857a088b5110f8015.webp'
                  class='full'
              />
              <svg
                  version='1.1'
                  viewBox='0 0 68 48'
                  width='68px'
                  style='position: relative;'
              >
                  <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                  <path d='M 45,24 27,14 27,34' fill='#fff'></path>
              </svg>
          </a>
      "
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed-card">
                <div className="amounts">
                  <div className="rent">
                    <h3>₹{property?.rent}</h3>
                    <p>Rent/ month</p>
                  </div>
                  <hr />
                  <div className="rent">
                    <h3>₹{property?.deposit}</h3>
                    <p>Deposit</p>
                  </div>
                </div>

                <Link to={`/properties/${id}/book-now`} className="book">
                  <FontAwesomeIcon icon={faBolt} />
                  Book Now
                </Link>

                <div className="or">
                  <h2>
                    <span>OR</span>
                  </h2>
                </div>

                <Link to={`/properties/${id}/book-now`} className="visit">
                  Schedule a Visit
                </Link>

                <div className="visits">
                  <p>Assisted & Free</p>
                  <hr />
                  <p>Reschedule Anytime</p>
                </div>
              </div>
            </div>

            <div className="similar">
              <div className="heading">
                <h2>Similar Properties</h2>
              </div>
              <div className="container">
                <div className="box">
                  <img src={require("../../Assests/banner.webp")} alt="" />
                  <span>
                    Sobha Habitech 3 BHK Semi Furnished Apartment, Whitefield,
                    (8438)
                  </span>
                  <Link>View</Link>
                </div>
                <div className="box">
                  <img src={require("../../Assests/banner.webp")} alt="" />
                  <span>
                    Sobha Habitech 3 BHK Semi Furnished Apartment, Whitefield,
                    (8438)
                  </span>
                  <Link>View</Link>
                </div>
                <div className="box">
                  <img src={require("../../Assests/banner.webp")} alt="" />
                  <span>
                    Sobha Habitech 3 BHK Semi Furnished Apartment, Whitefield,
                    (8438)
                  </span>
                  <Link>View</Link>
                </div>
              </div>
            </div>

            <div className="fixed-but">
              <Link to={`/properties/${id}/book-now`} className="fixed-book">
                <FontAwesomeIcon icon={faBolt} /> Book Now
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>Property not found</div>
      )}
      <ContactComp />
      <Footer />
    </div>
  );
}

export default SingleProperty;
