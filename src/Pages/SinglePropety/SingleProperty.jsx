import React from "react";
import ContactComp from "../../Common/ContactComp/ContactComp";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import ImageGallery from "react-image-gallery";
import "./SingleProperty.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import properties from "./Properties";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const images = [
  {
    original: require("../../Assests/Properties/1/1.jpeg"),
    thumbnail: require("../../Assests/Properties/1/1.jpeg"),
  },
  {
    original: require("../../Assests/Properties/1/2.jpeg"),
    thumbnail: require("../../Assests/Properties/1/2.jpeg"),
  },
  {
    original: require("../../Assests/Properties/1/3.jpeg"),
    thumbnail: require("../../Assests/Properties/1/3.jpeg"),
  },
  {
    original: require("../../Assests/Properties/1/4.jpeg"),
    thumbnail: require("../../Assests/Properties/1/4.jpeg"),
  },
  {
    original: require("../../Assests/Properties/1/5.jpeg"),
    thumbnail: require("../../Assests/Properties/1/5.jpeg"),
  },
  {
    original: require("../../Assests/Properties/1/6.jpeg"),
    thumbnail: require("../../Assests/Properties/1/6.jpeg"),
  },
  {
    original: require("../../Assests/Properties/1/7.jpeg"),
    thumbnail: require("../../Assests/Properties/1/7.jpeg"),
  },
  {
    original: require("../../Assests/Properties/1/8.jpeg"),
    thumbnail: require("../../Assests/Properties/1/8.jpeg"),
  },
];

function SingleProperty(props) {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const foundProperty = properties.find(
      (property) => property.id === parseInt(id)
    );
    setProperty(foundProperty);
  }, [id]);

  console.log(property);

  return (
    <div>
      <Navbar />
      {property ? (
        <div className="singlePropertyWrapper">
          <div className="singleProperty">
            <div className="heading">
              <h2>3 BHK Fully Furnished Villa, Kadugodi, Bangalore</h2>
            </div>

            <div className="main-content">
              <div className="img-container">
                <ImageGallery items={images} />
              </div>
              <div className="about-property">
                <h3>About the Property</h3>
                <p>
                  This is a Fully Furnished, Villa type property located at
                  Kadugodi, Bangalore at an affordable monthly rent of ₹ 50000/
                </p>
                <span className="amount">
                  Price: <span className="sm">₹</span>50000/
                  <span className="sm">month</span>
                </span>
                <Link to={`/properties/${id}/book-now`} className="visit">
                  Want to Visit the Property?
                </Link>
                <div className="book-share">
                  <Link to={`/properties/${id}/book-now`} className="book">
                    Book Free Visit
                  </Link>
                  <button className="share">
                    Share <FontAwesomeIcon icon={faWhatsapp} />
                  </button>
                </div>
              </div>
            </div>

            <div className="amenities">
              <div className="heading">
                <h2>Property Amenities</h2>
              </div>
              <div className="content">
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Balconies.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Area.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Parking.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Maintainance.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Deposit.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Bachelor.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Meat.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Students.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Floor.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Terrace.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div className="am-box">
                  <p>Balconies</p>
                  <img
                    src={require("../../Assests/Amenities/Pets.png")}
                    alt=""
                  />
                  <p>No</p>
                </div>
              </div>
            </div>

            <div className="prop-vid">
              <div className="heading">
                <h2>Property Location and Video</h2>
              </div>
              <div className="content">
                <div className="video">
                  <iframe
                    title="Youtube"
                    srcdoc="
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
                    frameborder="0"
                  ></iframe>
                </div>
                <div className="maps">
                  <iframe
                    className="map"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.076183382833!2d77.60700385227963!3d13.023555620349676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17fb66ca2d95%3A0xea8c3e0488bf6f40!2sASA%20Building%20Demolition%20Contractor%20Bangalore!5e0!3m2!1sen!2sin!4v1675286800879!5m2!1sen!2sin&zoom=9"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
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
