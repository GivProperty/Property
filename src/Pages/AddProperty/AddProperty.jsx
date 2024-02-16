import React from "react";
import Banner from "../../Common/Banner/Banner";
import ContactComp from "../../Common/ContactComp/ContactComp";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import "./AddProperty.css";

function AddProperty(props) {
  return (
    <>
      <Navbar />
      <Banner title={"ADD PROPERTY"} />

      <div>
        <div className="addproperty">
          <div className="info">
            <h2> We are the best at Managing your House.</h2>
            <p>
              Please fill the form Below and our team will Contact you Shortly!
            </p>
            <form>
              <input required type="text" name="" id="" placeholder="Name*" />
              <input required type="email" name="" id="" placeholder="Email*" />
              <input
                required
                type="number"
                name=""
                id=""
                placeholder="Phone*"
              />
              <textarea
                name=""
                placeholder="Property Address"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="form">
            <form></form>
          </div>
        </div>
      </div>

      <ContactComp />

      <Footer />
    </>
  );
}

export default AddProperty;
