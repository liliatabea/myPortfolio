import React from "react";
import "../utils/normalize.css"
import "../utils/css/screen.css"

import emailjs from 'emailjs-com';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_0U3PDLeNzRw7xTJ44lJik')
      .then((result) => {
        window.location.href = "/contact-submit";

      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
    <div className="contact-form row gtr-uniform">
      <input type="hidden" name="contact_number" />

      <div  className="col-6 col-12-xsmall"><input type="text" name="user_name" placeholder='Name' required/> </div>

      <div  className="col-6 col-12-xsmall"><input type="email" name="user_email" placeholder='E-mail' required/> </div>

      <div  className="col-12">
      <input type="text" name="subject" placeholder='Subject'/>
      </div>

      <div  className="col-12">
      <textarea name="message" placeholder='Enter your message' required/>
      </div>

      <div  className="col-12">
      <input type="submit" value="Send" className="primary"/>
      </div>

    </div>
    </form>
  );
}
