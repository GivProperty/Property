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
      await axios("http://localhost:8000/createUser", {
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
                className="map"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.076183382833!2d77.60700385227963!3d13.023555620349676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17fb66ca2d95%3A0xea8c3e0488bf6f40!2sASA%20Building%20Demolition%20Contractor%20Bangalore!5e0!3m2!1sen!2sin!4v1675286800879!5m2!1sen!2sin&zoom=9"
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
