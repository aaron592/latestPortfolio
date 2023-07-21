import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import sanityClient  from "../../client";
import './Skills.scss';

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}


const Skills = () => {

  const [animateCard, setAnimateCard] = useState({y:0.5})
  const [works,setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
		// sanityClient.fetch(`*[_type == "projects"]{
    //   name,
    //   description,
    //   imageurl{
    //     asset->{
    //       _id,
    //       url
    //     },
    //   },
    // }`
		// 	)
		// 	.then((data) => setFilterWork(data))
		// 	.catch(console.error);

    const query = '*[_type == "projects"]';

    sanityClient.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
	}, []);

  return (
    <>
    <div style={{display:"flex",alignItems: "center",justifyContent: "center",
    marginTop:"50px",fontSize:'20px',fontWeight:'bold'}} id="projects"
    ><h3 style={{fontSize:'20px',fontWeight:'bold',background:'linear-gradient(to right, #f0f0f0, #cbeeff)',
    paddingTop:'20px',paddingBottom:'20px',paddingLeft:'20px',paddingRight:'20px'}}>Projects</h3></div>

    <motion.div transition={{duration: 0.5, delayChildren: 0.5}}
    className="app__work-portfolio">
      {
        filterWork && filterWork.map((work,index)=>(
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex" >
               <img src={urlFor(work.imageurl)} alt={work.name}/>

               <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text" style={{fontSize:"20px"}}>{work.name}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex" style={{height:"auto"}}>
                <p className="p-text" >🔥</p>
              </div>
            </div>
            
          </div>
        ))
      }
    </motion.div>
    </>
  )
}

export default Skills