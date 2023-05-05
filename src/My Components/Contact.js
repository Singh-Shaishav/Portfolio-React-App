import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tejatip', 'template_60kkapp', form.current, 'kR48ftg9S7GcjG4Fn')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
      }, (error) => {
        console.log(error.text);
      })
  };
  const resetForm = () => {
    form.current.reset();
    setIsSent(false);
  }

  return (
    <div className='contact'>
      {isSent && (
        <div className="popup">
          <p>Message sent successfully</p>
          <button onClick={resetForm}><i className="fa fa-times"></i> Close</button>
        </div>
      )}
      <section className='contactCont'>
        <h1>INTERESTING IN WORKING TOGETHER!!</h1>
        <hr className='hrline'></hr>
        <p>Do you think I may be fit for any open role in your organisation?</p>
        <p>You can reach out to me to below given details.</p>
        <hr className='hrline'></hr>
        <div className='contactdetails'>
          <i className="fa fa-phone"></i><a href='tel: "+917088587207"'>+91-70885-87207</a>
          <i className="fa fa-envelope"></i><a href="mailto:27.shaishavsingh@gmail.com" >      27.shaishavsingh@gmail.com</a>
          <i className="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/27-shaishavsingh/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/27-shaishavsingh/</a>
          <i className="fa fa-map-marker"></i><a>Currently: Gurugram, Haryana | Native: Saharanpur, Uttar Pradesh</a>
        </div>
      </section>
      <section className='contactCont'>
        <h1>Get in Touch</h1>
        <hr className='hrline'></hr>
        <form ref={form} onSubmit={sendEmail}>
          <label for="name">Name: <input type='text' name="name"></input></label>
          <label for="email">Email: <input type='email' name="email" id="email"></input></label>
          <label for="number">Mobile No. : <input type='number' name="number" id="number"></input></label>
          <label for="message">Write message
            <textarea id="message" name="message" rows="10" cols="50"></textarea>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  )
}
