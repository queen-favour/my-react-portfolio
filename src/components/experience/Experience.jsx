import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div className="">
             <h4>React</h4>
              <small>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>JavaScript</h4>
              <small>Intermediate</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Redux</h4>
             <small>Intermediate</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Tailwind</h4>
              <small>Experienced</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small>Experienced</small>
            </div>
            </article>
          </div>
        </div>


{/*end of frontend content */}


        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Node JS</h4>
              <small>Basic</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MongoDB</h4>
              <small>Basic</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>ExpressJs</h4>
              <small>Basic</small>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Git</h4>
              <small>Intermediate</small>
            </div>
            </article>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience