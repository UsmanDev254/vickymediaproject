import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer/Footer";

function Contact() {
  // To get fields value
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [phone, updatePhone] = useState("");
  const [message, updateMessage] = useState("");

  //  To show error fields
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  function getName(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    updateName(item);
  }

  // First Method of email validation

  function getEmail(e) {
    let item = e.target.value;
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Removed 'g' flag

    if (!isValidEmail.test(item)) {
      setEmailError(true); // Show "Required" if the field is empty
    } else {
      setEmailError(false); // Clear error if email is valid
    }

    updateEmail(item);
  }

  // Second Method of email validation

  // function getEmail(e) {
  //   let item = e.target.value;
  //   const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  //   if (!item) {
  //     setEmailError('Required');  // Show "Required" if the field is empty
  //   }
  //   else if (!isValidEmail.test(item)) {
  //     setEmailError('Invalid email address');  // Show "Invalid email" if regex fails
  //   }
  //   else {
  //     setEmailError('');  // No error if email is valid
  //   }

  //   updateEmail(item);
  // }

  function getPhone(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    updatePhone(item);
  }

  function getMessage(e) {
    let item = e.target.value;
    if (item.length > 500) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
    updateMessage(item);
  }

  // First method of handle form submitting method

  //  // Form submit button handling
  //  const formHandle = (e) => {
  //   e.preventDefault();

  //   // Check for empty or invalid fields and set error messages
  //   let Validation = true;

  //   if (name.length < 5) {
  //     setNameError("Name must be at least 5 characters long.");
  //     Validation = false;
  //   }
  //   if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
  //     setEmailError(true);
  //     Validation = false;
  //   }
  //   if (phone.length < 5) {
  //     setPhoneError(true);
  //     Validation = false;
  //   }
  //   if (message.length > 500) {
  //     setMessageError(true);
  //     Validation = false;
  //   }

  //   if (Validation) {
  //     console.log(name + "\n" + email + "\n" + phone + "\n" + message);
  //   }

  // Reset all form fields after submission
  // updateName("");
  // updateEmail("");
  // updatePhone("");
  // updateMessage("");

  // };

  // Second method of handle form submitting validation

  function formHandle(e) {
    e.preventDefault();

    // Check for empty fields and set error messages
    if (!name.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!email.trim()) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!phone.trim()) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (message.length > 500) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }

    // If all fields are filled, log values
    if (name.trim() && email.trim() && phone.trim() && message.trim()) {
      console.log(name + "\n" + email + "\n" + phone + "\n" + message);

      // Reset all form fields after submission
      updateName("");
      updateEmail("");
      updatePhone("");
      updateMessage("");
    } else {
      console.log("Please fill in all fields correctly.");
    }
  }

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="row gap-5 gap-md-0">
            <div className="col-md-6">
              <div className="contact-content me-0 me-md-5 text-center text-md-start">
                <h1>
                  Get In <span style={{ color: "#FF9104" }}>Touch</span>
                </h1>
                <p className="text-white my-3">
                  Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                  Eu leo molestie vel, ornare non id blandit netus.
                </p>
                <form onSubmit={formHandle} className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={getName}
                    />
                    <br></br>
                    {nameError ? (
                      <span className="error_message">Enter Valid Name</span>
                    ) : null}
                    <br />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={getEmail}
                    />
                    <br></br>
                    {emailError && (
                      <span className="error_message">
                        Enter Valid Email Address
                      </span>
                    )}
                    <br />
                  </div>
                  <div className="col-12">
                    <input
                      type="number"
                      id="phone"
                      placeholder="Your Phone"
                      value={phone}
                      onChange={getPhone}
                    />
                    <br></br>
                    {phoneError ? (
                      <span className="error_message">
                        Enter Correct Phone Number
                      </span>
                    ) : (
                      ""
                    )}
                    <br />
                  </div>
                  <div className="col-12">
                    <textarea
                      onChange={getMessage}
                      value={message}
                      style={{ height: "100px", padding: "10px" }}
                      id="message"
                      placeholder="Your Message"
                      data-gramm="false"
                    ></textarea>
                    <br></br>
                    {messageError ? (
                      <span className="error_message">
                        You are Out of content Limit
                      </span>
                    ) : (
                      ""
                    )}
                    <br />
                    <button type="submit" className="con-btn">
                      <NavLink
                        to="#"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        Submit Now
                      </NavLink>
                    </button>
                  </div>
                </form>
                <div className="con-info d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between mt-4 gap-3 gap-lg-0">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-white"
                      aria-hidden="true"
                    ></FontAwesomeIcon>
                    <div className="d-block ps-3">
                      <h6 className="text-white mb-1">PHONE</h6>
                      <NavLink
                        to={"tel:+92 3087246381"}
                        className="m-0"
                        style={{ color: "#FF9104" }}
                      >
                        +92 3087246381
                      </NavLink>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-white"
                      aria-hidden="true"
                    ></FontAwesomeIcon>
                    <div className="d-block ps-3">
                      <h6 className="text-white mb-1">EMAIL</h6>
                      <NavLink
                        to={"mailto:usmanali474.official@gmail.com"}
                        className="m-0"
                        style={{ color: "#FF9104" }}
                      >
                        usmanali474.official@gmail.com
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-content">
                <iframe
                  style={{
                    width: "100%",
                    height: "570px",
                    border: "0",
                    borderRadius: "20px",
                  }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.359718162535!2d68.3473110741602!3d25.36727102479334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71772af091bd%3A0xe1704448fed385a6!2sVicky%20Media%20Solutions%20-%20Digital%20Marketing%20-%20Institute%20-%20Graphic%20%26%20Web%20Design%20-%20Social%20Media%20Marketing%20-%20Branding-%20E-Commerce!5e1!3m2!1sen!2s!4v1731101130591!5m2!1sen!2s"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
