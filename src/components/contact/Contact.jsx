import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md"
import { RiWhatsappLine } from "react-icons/ri"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>elechifavour3@gmail.com</h5>
            <a href="mailto:elechifavour3@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine />
            <h4>WhatsApp</h4>
            <h5>Favour Elechi</h5>
            <a href="https://wa.me/+2347089174165" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
          <MdOutlineEmail />
            <h4>Email</h4>
            <h5>elechifavour3@gmail.com</h5>
            <a href="mailto:elechifavour3@gmail.com">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact