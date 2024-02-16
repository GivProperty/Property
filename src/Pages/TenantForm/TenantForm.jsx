import React, { useState } from "react";
import ContactComp from "../../Common/ContactComp/ContactComp";
import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import "./TenantForm.css";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function TenantForm(props) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
  });

  function handleStateChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleDate = (newDate) => {
    setFormData((prevState) => ({
      ...prevState,
      date: newDate,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Navbar />
      <div className="tenant-form">
        <div className="heading">
          <h2>Schedule the Visit for the Property.</h2>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="contact">
            <h3 className="main-heading">Contact Details</h3>
            <div className="contact-form">
              <div className="input">
                <div className="label">
                  <span>Name</span>
                </div>
                <input
                  required
                  onChange={handleStateChange}
                  value={formData.name}
                  type="text"
                  name="name"
                  id=""
                />
              </div>
              <div className="input">
                <div className="label">
                  <span>Email</span>
                </div>
                <input
                  required
                  onChange={handleStateChange}
                  value={formData.email}
                  type="email"
                  name="email"
                  id=""
                />
              </div>
              <div className="input">
                <div className="label">
                  <span>Mobile</span>
                </div>
                <input
                  required
                  onChange={handleStateChange}
                  value={formData.phone}
                  type="number"
                  name="phone"
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="appointment">
            <h3 className="main-heading">Schedule the Visit</h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DesktopDateTimePicker"]}>
                <DemoItem>
                  <DateTimePicker
                    className="font"
                    onChange={handleDate}
                    value={formData.date}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
          {loading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <button className="submit" onClick={handleSubmit} type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
      <ContactComp />
      <Footer />
    </div>
  );
}

export default TenantForm;
