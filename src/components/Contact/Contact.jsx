import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";

const Contact = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("+919467842672");
  const [whatsappName, setWhatsappName] = useState("");
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const notify = () =>
    toast.success("Thank you for your message. I will write back soon.");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7lyn4g2",
        "template_n9ffxkg",
        form.current,
        "qR1ajSWYtNZQEkWCY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendToWhatsapp = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Name: ${whatsappName} Maggage ${whatsappMessage}`
    );

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(url, "_blank").focus();
  };

  return (
    <>
      <div className="contact_heading">
        <h1>contact me</h1>
      </div>
      <div className="main_contact">
        <div className="main_whatsapp">
          <div className="whatsapp_card">
            <form onSubmit={sendToWhatsapp}>
              <h1>Send Message on WhatsApp 🎯</h1>
              {/* <input
                id="name_input"
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="Enter your WhatsApp number"
              /> */}
              <input
                type="text"
                placeholder="Enter your name"
                value={whatsappName}
                onChange={(e) => setWhatsappName(e.target.value)}
              />
              <textarea
                id="message"
                value={whatsappMessage}
                onChange={(e) => setWhatsappMessage(e.target.value)}
                placeholder="Enter your message"
              />
              <button id="whatsapp_btn" type="submit">
                Send message on WhatsApp
              </button>
            </form>
          </div>
        </div>
        <div className="contact_card">
          <div className="contact_form">
            <h1>Email Me 🚀</h1>
            <form className="form_contect" ref={form} onSubmit={sendEmail}>
              <input type="email" placeholder="Your Email" name="email" />
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />
              <select name="course" id="course">
                <option value="Select Course">Select Course</option>
                <option value="Tally With GST Course">
                  Tally With GST Course
                </option>
                <option value="Tally With TDS Course">
                  Tally With TDS Course
                </option>
                <option value="Tally Professional Course">
                  Tally Professional Course
                </option>
                <option value="Financial Accounting & Taxation Course">
                  Financial Accounting & Taxation Course
                </option>
                <option value="Other Course">Other Course</option>
              </select>
              <textarea id="massage" name="message" placeholder="Message" />
              <input
                type="submit"
                value="Send"
                onClick={notify}
                className="btn2"
              />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
