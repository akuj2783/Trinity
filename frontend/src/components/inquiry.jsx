import React, { useState } from 'react';
import '../stylesheets/Inquiry.css'; // Link your CSS file
import axios from 'axios';


const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });
  const [alertMessage, setAlertMessage] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   const backendURL='https://trinity-backend.onrender.com' || 'http://localhost:5000';
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post(`${backendURL}/inquiry`, formData); // Update URL if necessary
      setAlertMessage('Your inquiry has been submitted successfully! We will get back to you soon.');
    } catch (error) {
      console.error('Error:', error);
      setAlertMessage('There was an error submitting your inquiry. Please try again later.');
    }
  };

  return (
    <>
    {alertMessage && <div className="alert">{alertMessage}</div>}

    <div className="form-container">
      <h2>Contact Us</h2>
      <br />
      <br />
      <p>Have any questions or need more information? Feel free to get in touch with us!</p>
    <p>We respond to all inquiries promptly and aim to provide the best assistance.</p>
    <br />
    <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="tel" name="mobile" placeholder="Mobile No. *" value={formData.mobile} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Your Message *" value={formData.message} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>

    </div>
    </>
  );
}

export default InquiryForm;
