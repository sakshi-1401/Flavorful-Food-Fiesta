// ContactUs.js
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import './contact.css';
import Footer from './footer';
import phoneImage from '../asset/phone.png'; // Update with your image path

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, message });
  };

  return (
    <>
    <div className="contact-us-container">
      <div className="contact-us-left">
        <img src={phoneImage} alt="Support" className="contact-us-image" />
        
      </div>
      <div className="contact-us-right">
        <div className="contact-us-content">
          <h2 className="contact-us-heading">Need support?</h2>
          <p>Contact us if you need further assistance.</p>
          <form onSubmit={handleSubmit} className="contact-us-form">
            <div className="p-field">
              <label htmlFor="name">Name and surname</label>
              <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
            </div>
            <div className="p-field">
              <label htmlFor="email">Email</label>
              <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="p-field">
              <label htmlFor="message">Please enter the details of your request.</label>
              <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="form-control" />
            </div>
            <Button type="submit" label="Submit" className="btn btn-primary mt-3 submit-button" />
          </form>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}

export default ContactUs;
