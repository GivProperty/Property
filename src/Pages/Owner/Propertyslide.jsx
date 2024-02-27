import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

function Propertyslide(props) {
  return (
    <div>
      <div className="property-slide">
        <div className="heading">
          <h2>Our Managing Properties</h2>
        </div>
        <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={3}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            991: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <Link to="/properties/1001">
                  <img
                    loading="lazy"
                    src={require("../../Assests/Properties/Assetz/4.jpeg")}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <Link to="/properties/1001">
                  <div>
                    <h3>Assestz Marq 2</h3>
                    <div className="amenity">
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/security-camera.png")}
                          alt=""
                        />
                        <p>CCTV</p>
                      </div>
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/gym.png")}
                          alt=""
                        />
                        <p>Gym</p>
                      </div>
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/parking.png")}
                          alt=""
                        />
                        <p>Parking</p>
                      </div>
                    </div>
                    <p>
                      A spacious home designed for families aspiring for a
                      modern lifestyle, this Flat is available for affordable
                      rent in Bengaluru. It is a 3 BHK Flat situated in
                      Whitefield at a coveted location with well-developed
                      infrastructure.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <Link to="/properties/1002">
                  <img
                    loading="lazy"
                    src={require("../../Assests/Properties/Prestige White Meadows/6.jpeg")}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <Link to="/properties/1001">
                  <div>
                    <h3>Prestige White Meadows</h3>
                    <div className="amenity">
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/security-camera.png")}
                          alt=""
                        />
                        <p>CCTV</p>
                      </div>
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/water-pipe.png")}
                          alt=""
                        />
                        <p>Gas Pipeline</p>
                      </div>
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/parking.png")}
                          alt=""
                        />
                        <p>Parking</p>
                      </div>
                    </div>
                    <p>
                      The Flat is constructed inside project Prestige White
                      Meadows. Families have access to various amenities such as
                      Gym, Garden, Sports Facility, Swimming Pool, Intercom,
                      Clubhouse, Community Hall. There is a provision for lift
                      facility.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <Link to="/properties/1003">
                  <img
                    loading="lazy"
                    src={require("../../Assests/Properties/Mantri Pinnacle/1.jpeg")}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <Link to="/properties/1003">
                  <div>
                    <h3>Mantri Pinnacle</h3>
                    <div className="amenity">
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/security-camera.png")}
                          alt=""
                        />
                        <p>CCTV</p>
                      </div>
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/gym.png")}
                          alt=""
                        />
                        <p>Gym</p>
                      </div>
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/parking.png")}
                          alt=""
                        />
                        <p>Parking</p>
                      </div>
                    </div>
                    <p>
                      This Flat can be a comfortable and affordable home for
                      your family. It is a 3 BHK unit available on rent at
                      Hulimavu in Bengaluru. This Flat comes with a plethora of
                      amenities to meet your modern lifestyle needs. It is Semi
                      Furnished.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <Link to="/properties/1001">
                  <img
                    loading="lazy"
                    src={require("../../Assests/Properties/Kolte Patil Mirabilis/8.jpeg")}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <Link to="/properties/1001">
                  <div>
                    <h3>Kolte Patil Mirabilis</h3>
                    <div className="amenity">
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/security-camera.png")}
                          alt=""
                        />
                        <p>CCTV</p>
                      </div>
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/gym.png")}
                          alt=""
                        />
                        <p>Gym</p>
                      </div>
                      <div className="box">
                        <img
                          src={require("../../Assests/Amenities/parking.png")}
                          alt=""
                        />
                        <p>Parking</p>
                      </div>
                    </div>
                    <p>
                      This Flat can be a comfortable and affordable home for
                      your family. It is a 1 BHK unit available on rent at
                      Horamavu in Bengaluru. This Flat comes with a plethora of
                      amenities to meet your modern lifestyle needs. It is Semi
                      Furnished.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Propertyslide;
