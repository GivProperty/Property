import React from "react";
import { Link } from "react-router-dom";
import ContactComp from "../../Common/ContactComp/ContactComp";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import AboutH from "./AboutH";
import CounterHome from "./CounterHome";
import CounterMore from "./CounterMore";
import MaintainanceH from "./MaintainanceH";
import "./Owner.css";
import Propertyslide from "./Propertyslide";

function Owner(props) {
  return (
    <div>
      <Navbar />

      {/* <div className="main-banner-wrapper">
        <div className="main-banner">
          <div className="content">
            <h2>Navigating Your Real Estate Journey</h2>
            <h3>Unlocking the Door to Your Investment Success</h3>
            <Link>ADD your Property</Link>
          </div>
        </div>
      </div> */}

      <div className="main-banner-wrappe">
        <div className="main-banner">
          <div className="main-image">
            <img src={require("../../Assests/Banners/for Rent.webp")} alt="" />
          </div>
          <div className="main-content">
            <h2>Hello Bangalore!</h2>
            <h2>Global Iconic Ventures Property</h2>
            <h3>
              Your Trusted Partner In Property And Rental Management Excellence
            </h3>
            <div className="buttons">
              <Link to={"/add-your-property"}>ADD your Property</Link>
              <Link to={"/locations"}>Search for Property</Link>
            </div>
            <div className="buttons">
              <h3>
                For Owners <br /> <span> Zero</span> Onbording
              </h3>
              <h3>
                For Tenants <br /> <span> No </span>Brokerage
              </h3>
            </div>
          </div>
        </div>
      </div>

      <AboutH />

      <div className="prepaid">
        <h2>WE ACCEPT PRE-PAID RENTING (NACH FORM)!</h2>
      </div>

      <CounterHome />

      <div className="hwhy">
        <div className="heading">
          <h2>Why Choose Us?</h2>
          <p>
            At GIV, we turn rentals into remarkable experiences. Your
            satisfaction is our priority. Welcome to a new era in rental
            management!
          </p>
        </div>
        <div className="content">
          <div className="box">
            <img src={require("../../Assests/Icons/light.png")} alt="" />
            <h3>What Sets Us Apart?</h3>
            <p>
              Our commitment to Excellent, Personalized Service and a Team
              dedicated to making our rental experience EXTRAORDINARY.
            </p>
          </div>
          <div className="box">
            <img src={require("../../Assests/Icons/trust.png")} alt="" />
            <h3>Expertise You Can Trust?</h3>
            <p>
              With years of experience in the industry, our experts bring
              unparalleled knowledge to every aspect of rental & property
              management.
            </p>
          </div>
          <div className="box">
            <img src={require("../../Assests/Icons/service.png")} alt="" />
            <h3>Personalized Service</h3>
            <p>
              Your needs are unique, and so is our approach. Enjoy personalized
              service designed to exceed your expectations.
            </p>
          </div>
          <div className="box">
            <img src={require("../../Assests/Icons/technology.png")} alt="" />
            <h3>Cutting Edge Technology</h3>
            <p>
              Stay connected with our user-friendly online portal. Accessible
              anytime, anywhere, it puts you in control of your rental journey.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="hbenefits">
        <div className="heading">
          <h2>Benefits for Property Owners</h2>
        </div>
      </div> */}

      <Propertyslide />

      <CounterMore />

      <div className="refer">
        <div className="heading">
          <h2>EARN WITH REFERAL</h2>
          <h3>Owner {">"} Owner</h3>
          <p>
            Feel free to refer to get Free Management (Zero Management Fee for 2
            months)
          </p>
          <Link>REFER NOW</Link>
        </div>
      </div>

      <MaintainanceH />

      <ContactComp />

      <div className="fixedZero">
        <h2>
          0<span> Brokerage</span>
        </h2>
      </div>
      {/* 
      <div className="fixedsche">
        <h2>Schedule Visit</h2>
      </div> */}

      <Footer />
    </div>
  );
}

export default Owner;
