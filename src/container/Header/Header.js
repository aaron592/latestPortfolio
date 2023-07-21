import React from 'react'
import {useState} from 'react';
import Typed from 'react-typed';
import './Header.scss';
import { motion } from 'framer-motion';

import { images } from '../../constants';


const Header = () => {
  const [buttonText, setButtonText] = useState('DOWNLOAD RESUME ⤓ ');

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('ATJ-Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'ATJ-Resume.pdf';
            setButtonText('✓ DOWNLOADED')
            alink.click();

        })
    })
  }
  return (
    <div className="app__header app__flex" id="home">
      <motion.div whileInView={{x: [-100,0], opacity:[0,1]}}
       transition={{ duration: 0.5}}
       className="app__header-info">
       <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <h1 style={{color:"rgb(45, 45, 71)",fontSize:"45px"}}>👋Hi! I AM <br/><span style={{color:"rgb(105, 175, 221)"}}>AARON .T. JOHN</span></h1>
        </div>
       </div>
       <div className="app__header-badge">
       <div className="app__flex" style={{fontSize:"16px",marginTop:"35px",color:"black",fontSize:"25px"}}>
       <Typed
              strings={[
                "I'm a Full Stack Web Developer",
                "I'm an engineering graduate (IT)"
              ]}
              typeSpeed={50}
              backSpeed={10}
              loop
            />
       </div>
       
       </div>
       <div className="app__header-badge">
       <div className="app__flex">
          <button onClick={onButtonClick} className="btn_download">{buttonText}</button>
       </div>
       
       </div>
       
      </motion.div>
      <motion.div>
        
      </motion.div>
      <motion.div whileInView={{opacity:[0,1]}}
      transition={{duration:0.5,delayChildren:0.5}}
      className="app__header-img">
      <img src={images.profile} alt="profile" />

      </motion.div>
    </div>
  )
}

export default Header