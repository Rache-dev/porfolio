import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../styles/Home.css'
import { Email } from '@mui/icons-material';

const Home = () => {
  return (
    <div id='intro'>
      <h3 className='intro-subtitle'>Hi, my name is</h3>
      <TypeAnimation
        sequence={[ 'Recheal Nasenya.', 1000, ]}
        speed={50}
        repeat={Infinity} className='Typist'
      />
      <div className='intro-title'>I make things that (hopefully) work.</div>
      <div className="intro-desc">
        I'm a frontend developer from Nairobi, Kenya. I'm passionate about building modern, responsive web applications. I specialize in React, TypeScript, VueJs and Java, and I love creating seamless user experiences. 
      </div>
      <a href='mailto:barbrarachael54@gmail.com' className='intro-contact'> <Email style={{fontSize: 18, marginRight: '8px',alignSelf: 'center'}} />Say Hi!</a>
    </div>
  )
}

export default Home