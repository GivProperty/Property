import React from "react";
import Banner from "../../Common/Banner/Banner";
import ContactComp from "../../Common/ContactComp/ContactComp";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";

function Contact(props) {
  return (
    <div>
      <Navbar />

      <Banner title={"Contact Us"} />

      <ContactComp />

      <Footer />
    </div>
  );
}

export default Contact;
