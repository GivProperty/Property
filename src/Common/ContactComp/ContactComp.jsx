import React, { useState } from "react";
import "./ContactComp.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function ContactComp(props) {
  const [loading, setLoading] = useState(false);
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("You're good!");

    try {
      await axios("http://localhost:8000/api/user/enquiry", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        data: mailerState,
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log(res.data);
            setLoading(false);
          } else if (res.status === 402) {
            console.log("Message failed to send");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <div className="contact-comp-wrapper">
        <div className="contact-comp">
          <div className="heading">
            <h2>Get in Touch with Our Team!</h2>
            {/* <h3>Contact Now</h3> */}
          </div>
          <div className="content">
            <div className="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1375110731137!2d77.58056167512267!3d12.963051387351534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e0ed95b97b%3A0x6e7f373b9591dc5!2sExpress%20New%20City%20Complex%2C%20No.301%2C%203rd%20Floor%2C%20New%20City%20Expres%20Building%2C%2013%2C%20Narashimaraja%20Road%2C%2C%20Kumbaragundi%2C%20Kalasipalya%2C%20Bengaluru%2C%20Karnataka%20560002!5e0!3m2!1sen!2sin!4v1709024205363!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="form">
              <form>
                <input
                  onChange={handleStateChange}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <input
                  onChange={handleStateChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <input
                  onChange={handleStateChange}
                  type="number"
                  name="phone"
                  placeholder="Number"
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  onChange={handleStateChange}
                ></textarea>
                {loading ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <button onClick={submitEmail} type="submit">
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComp;
