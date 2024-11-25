import "./Contact.css";
import whatsapp from "../../assets/img/whatsapp.png";
import pen from "../../assets/img/pen.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

function Contact() {
  const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || "http://localhost:5000";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Google Sheet Integration
  const handleSubmitGoogleForm = async () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzfMNUmGl3jeJkgR5I2wQAzv3F3xMU8efSRu448GOOeuAWeFvS6cUKnyZFfWfXNGpRJ/exec'
    const form = document.forms['submit-to-google-sheet'];

    const formData = new FormData(form);
    // Add date to form data
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    formData.append('Date', formattedDate);
    // Add time to form data
    const formattedTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    formData.append('Time', formattedTime);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        if (!response.ok) throw new Error('Failed to submit to Google Sheets');
        form.reset();
      })
      .catch(error => {
        console.error('Error!', error.message);
        toast.error("Form Submitted Failed");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if all fields are filled
      if (!formData.name || !formData.phone || !formData.email || !formData.message) {
        toast.error("Please fill all the fields.");
        return;
      }

      // Phone number should be in number format
      if (isNaN(formData.phone)) {
        toast.error("Phone number should be in number format.");
        return;
      }

      // Phone number should be of 10 digits
      if (formData.phone.length !== 10) {
        toast.error("Phone number should be of 10 digits.");
        return;
      }

      // Email should contain @ and .
      if (!formData.email.includes("@") || !formData.email.includes(".")) {
        toast.error("Please enter a valid email address.");
        return;
      }

      // Send the form data to the server
      const response = await axios.post(`${VITE_SERVER_PORT}/api/contact`, formData);

      if (response.status === 200) {
        await handleSubmitGoogleForm();
        toast.success(response.data.message);

        // Reset the form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="Contact">
      <div className="header-Contact">
        <h1>Contact Us</h1>
        <div className="Rectangle-16-Contact"></div>
        <p>
          We are here to help and answer any question you might here. We look
          forward to hearing from you.
        </p>
      </div>
      <div className="contact">
        <div className="callUs">
          <img src={whatsapp} alt="" />
          <h3>Call Us</h3>
          <p>Support: +91 7985322738</p>
        </div>
        <div className="img1">
        </div>
        <div className="img2">
        </div>
        <div className="writeUs">
          <img src={pen} alt="" />
          <h3>Write Us</h3>
          <p>contact.us@befog.in</p>
        </div>
      </div>
      <h2>Get in touch</h2>
      <div className="touch">
        <div className="contact-img">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89505.85425355299!2d80.88177913161047!3d26.87660488687303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf98c55c97199d7b%3A0xffb3b0de54faaa0e!2sBefog%20(A%26W%20Technologies)!5e0!3m2!1sen!2sin!4v1731913703747!5m2!1sen!2sin"
            width="600"
            height="650"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-details">
          {/* Contact Form */}
          <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <div className="single-line">
              <div>
                <label htmlFor="">Name</label>
                <input
                  name="Name"
                  type="text"
                  style={{width: '18rem'}}
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <input
                  name="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Phone Number"
                  max={10}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Email Address</label>
              <input
                name="Email"
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <textarea
                name="Message"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
