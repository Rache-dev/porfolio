import React from 'react'
import '../styles/about.css'
const techStack:string[] = [
  "Typescript",
  "Vue.js",
  "React.js",
  "Java",
  "Javascript ES6+",
]

const About = () => {
  return (
    <div id='about'>
        <div className='section-header' >
          <span className='section-title'>/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p>I am currently a <b>Frontend Developer</b> at <a href='https://www.nathandigital.ke/'>Nathan digital</a>. I’ve had the opportunity to work extensively with Vue.js, honing my skills in component-based architecture, state management, and UI optimization. My role has also strengthened my ability to collaborate in agile teams, tackle complex implementations, and ensure seamless user experiences</p>
            <p className='about-interest'>Here are some of the technologies I have been working with:</p>
            <ul>
              {techStack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className='about-interest'>When I’m not coding, you’ll probably find me exploring new music, biking, running or enjoying Kenya’s vibrant food scene.</p>
          </div>
          <div className='about-image'></div>
        </div>
        
    </div>
  )
}

export default About