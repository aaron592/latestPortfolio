import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import './About.scss';
import { images } from '../../constants';

const About = () => {
  
  const [about,setAbout] = useState('about');
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="about_container" id="about">
          <div className="abt_cont">
            <div className="abt_nav">
              <div className="abt_item1" onClick={()=>{setAbout('about');handleClick()}} style={{ backgroundColor: active ? "orange" : null }}><h3 style={{fontSize:"20px",fontWeight:"bold"}}>About</h3></div>
              <div className="abt_item1" onClick={()=>{setAbout('service');handleClick()}} style={{ backgroundColor: active ? "orange" : null }}><h3 style={{fontSize:"20px",fontWeight:"bold"}}>Services</h3></div>
              <div className="abt_item1" onClick={()=>{setAbout('skills');handleClick()}} style={{ backgroundColor: active ? "orange" : null }}><h3 style={{fontSize:"20px",fontWeight:"bold"}}>Skills</h3></div>
              {/* <div className="abt_item1"><h3 style={{fontSize:"20px",fontWeight:"bold"}}>Experience</h3></div> */}

            </div>
            <div className="abt_content" >
            {
               about === 'about' ? (
                 <h3 style={{fontWeight: '400',lineHeight:"2.0",fontSize:"20px",textAlign:"justify"}}>I'm a recent graduate of Anna University with Bachelors Degree in Engineering. I have a good experience in Full Stack Web Development. I'm a Full Stack Web Developer and I specialize in efficient React apps and CSS & HTML that just work across all platforms and browsers. I'm also good at Backend technologies like Nodejs, Express & Mongodb. I have done 15+ projects based on MERN stack technology and I'm very much interested in designing websites. I look forward to putting my education and accquired skills to use. I'm excited to continue developing my skills.</h3>
               ):null
            }
            {
               about === 'service' ? (
                 <div className="service_cont">
                    <div className="service_div">
                    <img src={images.codeIcon} alt="web_icon" width="55px"/>&nbsp;&nbsp;&nbsp;
                    <h3 style={{fontWeight: '400',fontSize:"20px"}}>Web Development</h3>
                    </div>
                    <div className="service_div">
                    <img src={images.design} alt="web_design" width="55px"/>&nbsp;&nbsp;&nbsp;
                    <h3 style={{fontWeight: '400',fontSize:"20px"}}>Web Designing</h3>
                    </div>
                    <div className="service_div">
                    <img src={images.mobile} alt="mobile_app" width="55px"/>&nbsp;&nbsp;&nbsp;
                    <h3 style={{fontWeight: '400',fontSize:"20px"}}>Mobile Applications</h3>
                    </div>
                    <div className="service_div">
                    <img src={images.logoDesign} alt="web_icon" width="55px"/>&nbsp;&nbsp;&nbsp;
                    <h3 style={{fontWeight: '400',fontSize:"20px"}}>Logo Designing</h3>
                    </div>
                    <div className="service_div">
                    <img src={images.webMain} alt="web_icon" width="55px"/>&nbsp;&nbsp;&nbsp;
                    <h3 style={{fontWeight: '400',fontSize:"20px"}}>Web Maintenance</h3>
                    </div>
                 </div>
               ):null
            }

            {
               about === 'skills' ? (
                 <div className="service_cont">
                    <div className="skills_div">
                    <img src={images.net} alt="web_icon" width="60px"/>
                    </div>
                    <div className="skills_div">
                    <img src={images.csharp} alt="web_icon" width="60px"/>
                    </div>
                    <div className="skills_div">
                    <img src={images.html} alt="web_icon" width="70px"/>
                    </div>
                    <div className="skills_div">
                    <img src={images.css} alt="web_icon" width="70px"/>
                    </div>
                    <div className="skills_div">
                    <img src={images.js} alt="web_icon" width="70px"/>
                    </div>
                    <div className="skills_div">
                    <img src={images.react} alt="web_icon" width="70px"/>
                    </div>
                    <div className="skills_div">
                    <img src={images.node} alt="web_icon" width="70px"/>
                    </div>
                    <div className="skills_div">
                    <img src={images.mongo} alt="web_icon" width="70px"/>
                    </div>
                    <div className="skills_div">
                    <img src={images.sql} alt="web_icon" width="70px"/>
                    </div>
                    <div className="skills_div">
                    <img src={images.sanity} alt="web_icon" width="70px"/>
                    </div>
                 </div>
               ):null
            }
                
                  
                
            </div>
          </div>
      </div>
    </>
  )
}

export default About