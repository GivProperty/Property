import {
  faHandHoldingDollar,
  faHouse,
  faNoteSticky,
  faUmbrella,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../Common/axios";
import React, { useState } from "react";
import Banner from "../../Common/Banner/Banner";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./AddProperty.css";

function AddProperty(props) {
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState({
    name: "",
    city: "",
    address: "",
    phone: "",
  });
  const [propertyType, setPropertyType] = useState("");
  const [bhk, setBhk] = useState("");

  function handleStateChange(e) {
    setProperty((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    property.propertyType = propertyType;
    property.bhk = bhk;
    setLoading(true);

    try {
      await axios("http://localhost:8000/api/user/property", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        data: property,
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
          </div>
          <div className="form">
            <div className="main">
              <form action="">
                <label htmlFor="name">Name of the house owner</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  id="name"
                  onChange={handleStateChange}
                  value={property.name}
                />
                <label htmlFor="">Property Type</label>
                <div className="prop-type">
                  <span
                    className={
                      propertyType === "Apartment" ? "pr-ty active" : "pr-ty"
                    }
                    onClick={() => setPropertyType("Apartment")}
                  >
                    Apartment
                  </span>
                  <span
                    className={
                      propertyType === "Individual" ? "pr-ty active" : "pr-ty"
                    }
                    onClick={() => setPropertyType("Individual")}
                  >
                    Individual
                  </span>
                  <span
                    className={
                      propertyType === "Villa" ? "pr-ty active" : "pr-ty"
                    }
                    onClick={() => setPropertyType("Villa")}
                  >
                    Villa
                  </span>
                </div>
                <label htmlFor="">No of bedrooms in the property</label>
                <div className="prop-type">
                  <span
                    className={bhk === "1" ? "pr-ty active" : "pr-ty"}
                    onClick={() => setBhk("1")}
                  >
                    1
                  </span>
                  <span
                    className={bhk === "2" ? "pr-ty active" : "pr-ty"}
                    onClick={() => setBhk("2")}
                  >
                    2
                  </span>
                  <span
                    className={bhk === "3" ? "pr-ty active" : "pr-ty"}
                    onClick={() => setBhk("3")}
                  >
                    3
                  </span>
                  <span
                    className={bhk === "4" ? "pr-ty active" : "pr-ty"}
                    onClick={() => setBhk("4")}
                  >
                    4
                  </span>
                  <span
                    className={bhk === "4+" ? "pr-ty active" : "pr-ty"}
                    onClick={() => setBhk("4+")}
                  >
                    4+
                  </span>
                </div>
                <label htmlFor="locatedCity">Located City</label>
                <input
                  type="text"
                  placeholder="Enter the Located City"
                  onChange={handleStateChange}
                  value={property.city}
                  name="city"
                  id="locatedCity"
                />
                <label htmlFor="propertyAddress">Property Address</label>
                <input
                  type="text"
                  placeholder="Enter the Property Address"
                  onChange={handleStateChange}
                  value={property.address}
                  name="address"
                  id="propertyAddress"
                />
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter the Mobile Number"
                  onChange={handleStateChange}
                  value={property.phone}
                  name="phone"
                  id="phone"
                />
                {loading ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <input
                    onClick={handleSubmit}
                    type="submit"
                    className="submit"
                  />
                )}
              </form>
            </div>
            <div className="side">
              <div className="heading">
                <h3>How is GIV different?</h3>
                <p>
                  Monthly 15 lakh people visit NestAway in search of houses on
                  rent
                </p>
              </div>
              <div className="box-contain">
                <div className="box">
                  <div className="icon">
                    <FontAwesomeIcon icon={faHouse} />
                  </div>
                  <div className="binfo">
                    <h4>Guided House Visits</h4>
                    <p>
                      We give guided tour of your house to interested tenants
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                  </div>
                  <div className="binfo">
                    <h4>Rent On Time</h4>
                    <p>We guarantee rent on time every month</p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <FontAwesomeIcon icon={faNoteSticky} />
                  </div>
                  <div className="binfo">
                    <h4>Zero Paperwork</h4>
                    <p>We do the paperwork for you like agreement creation</p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <FontAwesomeIcon icon={faUmbrella} />
                  </div>
                  <div className="binfo">
                    <h4>House Safety</h4>
                    <p>We ensure to keep your house in good condition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ContactComp /> */}

      <Footer />
    </>
  );
}

export default AddProperty;
