import React, { useState } from 'react'
import './Footer.scss';
import sanityClient  from "../../client";
import {images} from '../../constants';


const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    sanityClient.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div style={{display:"flex",alignItems: "center",justifyContent: "center",
    marginTop:"50px",fontSize:'20px',fontWeight:'bold'}} id="contact"
    ><h3 style={{fontSize:'20px',fontWeight:'bold',background:'linear-gradient(to right, #f0f0f0, #cbeeff)',
    paddingTop:'20px',paddingBottom:'20px',paddingLeft:'20px',paddingRight:'20px'}}>Get In Touch</h3></div>
    
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text1" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div className="head-text-cont">
          <p className="head-text">
            Thank you for getting in touch!
          </p>
        </div>
      )}
      <div className="footer_cont">
      <p><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp; &nbsp; &nbsp;<i class="fa fa-twitter" aria-hidden="true"></i>&nbsp; &nbsp; &nbsp;<i class="fa fa-instagram" aria-hidden="true"></i>&nbsp; &nbsp; &nbsp;<i class="fa fa-github" aria-hidden="true"></i></p>
        <p>All Rights Reserved | © 2021</p>
      </div>
    </>
  )
}

export default Footer