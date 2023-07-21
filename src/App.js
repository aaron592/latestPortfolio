import React from 'react';
import {About, Footer, Header, Skills, Testimonials} from './container';
import {Navbar} from './components';
import './App.scss';

function App() {
  return (
    <div className="app">
     <Navbar/>
     <Header/>
     <About/>
     <Testimonials/>
     <Skills/>
     <Footer/>
    </div>
  );
}

export default App;
