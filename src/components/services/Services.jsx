import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User-Centric Design Advocate.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual design expertise with precision.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing and prototyping with Sketch, Figma.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborative Communicator.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous Learner and Problem Solver.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version Control/Git.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Performance Optimization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-Browser Compatibility.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Effective problem solver, adept at troubleshooting code issues.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Knowledge of Agile development practices.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ability to integrate and consume APIs for data exchange.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Strong writing and editing skills for compelling content.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develops content strategies aligned with business objectives.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implements SEO principles for content visibility and reach.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Multimedia Integration and Promotion.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Analytical and Adaptable.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services