import {React,useState} from 'react';
import './Navbar.scss';
import {images} from '../../constants';
import { HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home','about','experience','projects','contact'].map((item)=>(
          <li className="app__flex p-text" key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app_navbar-menu">
        <HiMenuAlt4 onClick={()=> settoggle(true)} />
        {
          toggle && (
            <motion.div whileInView={{x:[300, 0]}}
            transition={{duration: 0.85, ease:'easeOut'}}>
            <HiX onClick={()=>settoggle(false)}/>
            <ul>
            {['home','about','experience','projects','contact'].map((item)=>(
            <li key={item}>
             <a href={`#${item}`} onClick={()=>settoggle(false)}>{item}</a>
            </li>
            ))}
            </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar