import React from 'react'
import './Testimonials.scss';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Testimonials = () => {
  return (
    <>
    <div style={{display:"flex",alignItems: "center",justifyContent: "center",
    marginTop:"50px",fontSize:'20px',fontWeight:'bold'}} id="experience"
    ><h3 style={{fontSize:'20px',fontWeight:'bold',background:'linear-gradient(to right, #f0f0f0, #cbeeff)',
    paddingTop:'20px',paddingBottom:'20px',paddingLeft:'20px',paddingRight:'20px'}}>Journey Map</h3></div>
    <div className="map">
       <VerticalTimeline lineColor="#7371EE">
         <VerticalTimelineElement className="vertical-timeline-element--education"
         date="2016" iconStyle={{backgroundColor:"#7371EE",color:"#fff"}}
         icon={<SchoolIcon/>}>
           <h3 className="vertical-timeline-element-title" style={{fontSize:"20px"}}>United Indian School, Kuwait</h3>
           <p>10th</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement className="vertical-timeline-element--education"
         date="2016 - 2018" iconStyle={{backgroundColor:"#7371EE",color:"#fff"}}
         icon={<SchoolIcon/>}>
           <h3 className="vertical-timeline-element-title" style={{fontSize:"20px"}}>SN Higher Secondary School, Kerala, India</h3>
           <p>12th</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement className="vertical-timeline-element--education"
         date="2018 - 2022" iconStyle={{backgroundColor:"#7371EE",color:"#fff"}}
         icon={<SchoolIcon/>}>
           <h3 className="vertical-timeline-element-title" style={{fontSize:"20px"}}>Easa College of Engineering & Technology, Tamilnadu, India</h3>
           <p>B-Tech Information Technology</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement className="vertical-timeline-element--education"
         date="2022 - Present" iconStyle={{backgroundColor:"#7371EE",color:"#fff"}}
         icon={<WorkIcon/>}>
           <h3 className="vertical-timeline-element-title" style={{fontSize:"20px"}}>Automak Automotive Co. K.S.C.C</h3>
           <p>IT Application Support - Dot Net Developer</p>
         </VerticalTimelineElement>
       </VerticalTimeline>
    </div>
    </>
  )
}

export default Testimonials