import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Banner from "../../Common/Banner/Banner";
import ContactComp from "../../Common/ContactComp/ContactComp";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import "./Location.css";

const options = [
  "Vijaynagar",
  "Jayanagar",
  "Whitefield",
  "Hosahalli",
  "Majestic",
  "M G Road",
  "Hebbal",
  "Chandra Layout",
  "Pear",
  "Strawberry",
];

function Location(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredOptions(filteredOptions);
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setShowOptions(false);
  };

  return (
    <div>
      <Navbar />
      {/* <Banner title={"Locations"} /> */}

      <div className="locations">
        <div className="search">
          <div className="heading">
            <h2>Search in for Any Location</h2>
          </div>
          <div onClick={() => setShowOptions(true)} className="input">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
            {showOptions && (
              <ul>
                {filteredOptions.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* <button>Search</button> */}
        </div>
        <div className="content">
          <div className="heading">
            <h2>We have Properties at these Locations</h2>
          </div>
          <div className="loc">
            <div className="loc-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <Link to={"/locations/whitefield"}>
                <span>North</span>
              </Link>
            </div>
            <div className="loc-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <Link>
                <span>South</span>
              </Link>
            </div>
            <div className="loc-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <Link>
                <span>East</span>
              </Link>
            </div>
            <div className="loc-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <Link>
                <span>West</span>
              </Link>
            </div>
            <div className="loc-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <Link>
                <span>Central</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ContactComp />

      <Footer />
    </div>
  );
}

export default Location;
