import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md"
import { RiWhatsappLine } from "react-icons/ri"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aw8f8wm', 'template_5ojo5vd', form.current, 'dKyGZ2yYaouHdxDTc')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>elechifavour3@gmail.com</h5>
            <a href="mailto:elechifavour3@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Favour Elechi</h5>
            <a href="https://api.whatsapp.com/send?phone=+2347089174165" target='_blank'>Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact