import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

function Propertyslide(props) {
  return (
    <div>
      {/* <div className="property-slide">
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={20}
          //   autoplay={{
          //     delay: 2000,
          //     disableOnInteraction: false,
          //   }}
          //   modules={[Autoplay]}
          //   breakpoints={{
          //     640: {
          //       slidesPerView: 1,
          //     },
          //     768: {
          //       slidesPerView: 2,
          //     },
          //     991: {
          //       slidesPerView: 3,
          //     },
          //   }}
        >
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <img
                  loading="lazy"
                  src={require("../../Assests/Blogs/blog-1.webp")}
                  alt=""
                />
              </div>
              <div className="content">
                <div>
                  <h3>
                    How to Estimate the Cost of a Commercial Demolition Project?
                  </h3>
                  <p>
                    Commercial demolition projects can be costly and complex,
                    with numerous variables that can impact the final cost.
                  </p>
                </div>
                <Link
                  to="/blogs/cost-of-demolition-in-bangalore"
                  className="btn"
                >
                  read more
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <img
                  loading="lazy"
                  src={require("../../Assests/Blogs/blog-2.webp")}
                  alt=""
                />
              </div>
              <div className="content">
                <div>
                  <h3>What Makes A Good Demolition Company? </h3>
                  <p>
                    Demolition is a complex process that requires specialized
                    skills, equipment, and expertise.{" "}
                  </p>
                </div>
                <Link to="/blogs/good-demolition-company" className="btn">
                  read more
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <img
                  loading="lazy"
                  src={require("../../Assests/Blogs/blog-3.webp")}
                  alt=""
                />
              </div>
              <div className="content">
                <div>
                  <h3>
                    House Demolition Cost in Bangalore – Understanding the
                    Factors that Affect the Price
                  </h3>
                  <p>
                    Are you considering demolishing an old or dilapidated
                    property in Bangalore? Before you start the process, it's
                    essential to understand the cost involved.
                  </p>
                </div>
                <Link
                  to="/blogs/house-demolition-cost-bangalore"
                  className="btn"
                >
                  read more
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <img
                  loading="lazy"
                  src={require("../../Assests/Blogs/blog-4.webp")}
                  alt=""
                />
              </div>
              <div className="content">
                <div>
                  <h3>
                    How to Choose the Experts for Demolition Services in
                    Bangalore
                  </h3>
                  <p>
                    Choosing the right experts for demolition services in
                    Bangalore is an important step in ensuring the success of
                    your project.
                  </p>
                </div>
                <Link
                  to="/blogs/experts-demolition-services-bangalore"
                  className="btn"
                >
                  read more
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <img
                  loading="lazy"
                  src={require("../../Assests/Blogs/blog-5.webp")}
                  alt=""
                />
              </div>
              <div className="content">
                <div>
                  <h3>
                    Top 10 Reasons to Demolish Your Home/Building and Start
                    Again
                  </h3>
                  <p>
                    Outdated design: If your home or building has an outdated
                    design or layout, demolition and starting again may be the
                    best option to modernize the structure and increase its
                    functionality.
                  </p>
                </div>
                <Link
                  to="/blogs/top-10-reasons-demolish-home-bangalore"
                  className="btn"
                >
                  read more
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <img
                  loading="lazy"
                  src={require("../../Assests/Blogs/blog-3.webp")}
                  alt=""
                />
              </div>
              <div className="content">
                <div>
                  <h3> Thinking About Demolition Contractor in Bangalore?</h3>
                  <p>
                    Check licensing and insurance: Make sure that the demolition
                    contractor is licensed and insured.
                  </p>
                </div>
                <Link
                  to="/blogs/5-tips-before-demolition-bangalore"
                  className="btn"
                >
                  read more
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
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
          //   breakpoints={{
          //     640: {
          //       slidesPerView: 1,
          //     },
          //     768: {
          //       slidesPerView: 2,
          //     },
          //     991: {
          //       slidesPerView: 3,
          //     },
          //   }}
        >
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <img
                  loading="lazy"
                  src={require("../../Assests/Blogs/blog-5.webp")}
                  alt=""
                />
              </div>
              <div className="content">
                <div>
                  <h3>
                    Top 10 Reasons to Demolish Your Home/Building and Start
                    Again
                  </h3>
                  <p>
                    Outdated design: If your home or building has an outdated
                    design or layout, demolition and starting again may be the
                    best option to modernize the structure and increase its
                    functionality.
                  </p>
                </div>
                <Link
                  to="/blogs/top-10-reasons-demolish-home-bangalore"
                  className="btn"
                >
                  read more
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <img
                  loading="lazy"
                  src={require("../../Assests/Blogs/blog-5.webp")}
                  alt=""
                />
              </div>
              <div className="content">
                <div>
                  <h3>
                    Top 10 Reasons to Demolish Your Home/Building and Start
                    Again
                  </h3>
                  <p>
                    Outdated design: If your home or building has an outdated
                    design or layout, demolition and starting again may be the
                    best option to modernize the structure and increase its
                    functionality.
                  </p>
                </div>
                <Link
                  to="/blogs/top-10-reasons-demolish-home-bangalore"
                  className="btn"
                >
                  read more
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <img
                  loading="lazy"
                  src={require("../../Assests/Blogs/blog-5.webp")}
                  alt=""
                />
              </div>
              <div className="content">
                <div>
                  <h3>
                    Top 10 Reasons to Demolish Your Home/Building and Start
                    Again
                  </h3>
                  <p>
                    Outdated design: If your home or building has an outdated
                    design or layout, demolition and starting again may be the
                    best option to modernize the structure and increase its
                    functionality.
                  </p>
                </div>
                <Link
                  to="/blogs/top-10-reasons-demolish-home-bangalore"
                  className="btn"
                >
                  read more
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide slide" style={{ padding: 20 }}>
              <div className="image">
                <img
                  loading="lazy"
                  src={require("../../Assests/Blogs/blog-5.webp")}
                  alt=""
                />
              </div>
              <div className="content">
                <div>
                  <h3>
                    Top 10 Reasons to Demolish Your Home/Building and Start
                    Again
                  </h3>
                  <p>
                    Outdated design: If your home or building has an outdated
                    design or layout, demolition and starting again may be the
                    best option to modernize the structure and increase its
                    functionality.
                  </p>
                </div>
                <Link
                  to="/blogs/top-10-reasons-demolish-home-bangalore"
                  className="btn"
                >
                  read more
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
