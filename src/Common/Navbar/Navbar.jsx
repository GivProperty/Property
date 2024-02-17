import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assests/logo/GIVPROPERTY-logos/Logo.png";
import "./Navbar.css";

function Navbar(props) {
  const path = useLocation();
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("/");
  const [sublink, setSublink] = useState(false);
  const [subActive, setSubActive] = useState(false);
  const [mobsubActive, setMobSubActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, [scroll]);

  useEffect(() => {
    setActive(path.pathname);
  }, [path]);

  return (
    <div>
      <div className={scroll ? "navbar-wrapper scroll" : "navbar-wrapper"}>
        <div className="navbar">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
              {/* <h3>GIV</h3>
              <p>Global Iconic Ventures</p> */}
            </Link>
          </div>
          <div className="lists">
            <ul className={active !== "/" ? "list" : "list home"}>
              <li>
                <Link
                  className={active === "/" ? "link active" : "link"}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={active === "" ? "link active" : "link"}
                  onMouseEnter={() => setSublink(true)}
                  onMouseLeave={() => setSublink(false)}
                  to={""}
                >
                  Services
                  <ul className={sublink ? "sublinks active" : "sublinks"}>
                    <li className="sublink">
                      <Link to={"/add-your-property"}>Rental Management</Link>
                    </li>
                    <li className="sublink">
                      <Link to={"/add-your-property"}>Property Management</Link>
                    </li>
                    <li className="sublink">
                      <Link to={"/add-your-property"}>Vendor Management</Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li>
                <Link
                  className={active === "/locations" ? "link active" : "link"}
                  to={"/locations"}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  className={active === "" ? "link active" : "link"}
                  to={""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={active === "/contact" ? "link active" : "link"}
                  to={"/contact"}
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link
                  className={
                    active === "/add-your-property"
                      ? "link active property"
                      : "link"
                  }
                  to={"/add-your-property"}
                >
                  Add Properties
                </Link>
              </li> */}
            </ul>
            <FontAwesomeIcon
              onClick={() => setSubActive(!subActive)}
              icon={subActive ? faMultiply : faBars}
            />
          </div>
        </div>
      </div>
      <div className="nav-mob-res">
        <ul className={subActive ? "mob-nav active" : "mob-nav"}>
          <Link className={active === "/" ? "link active" : "link"} to={"/"}>
            <li>Home</li>
          </Link>
          <Link className={active === "" ? "link active" : "link"} to={""}>
            <li onClick={() => setMobSubActive(!mobsubActive)}>Services</li>
            <ul
              className={mobsubActive ? "mob-sub-list active" : "mob-sub-list"}
            >
              <Link>
                <li>Rental Management</li>
              </Link>
              <Link>
                <li>Property Management</li>
              </Link>
              <Link>
                <li>Vendor Management</li>
              </Link>
            </ul>
          </Link>
          <Link
            className={active === "/locations" ? "link active" : "link"}
            to={"/locations"}
          >
            <li>Locations</li>
          </Link>
          <Link className={active === "" ? "link active" : "link"} to={""}>
            <li>About Us</li>
          </Link>
          <Link
            className={active === "/contact" ? "link active" : "link"}
            to={"/contact"}
          >
            <li>Contact Us</li>
          </Link>
          {/* <Link
            className={
              active === "/add-your-property" ? "link active property" : "link"
            }
            to={"/add-your-property"}
          >
            <li>Add Properties</li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
