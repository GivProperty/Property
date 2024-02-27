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
                <Link to="/properties/1001">
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
        </Swiper>
      </div>
    </div>
  );
}

export default Propertyslide;
