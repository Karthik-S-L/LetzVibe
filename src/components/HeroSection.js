import React from 'react';
import './HeroSection.css';
import '../App.css';
import {Button} from './Button';
import { Link } from 'react-router-dom';

function HeroSection() {
  return(
      <>
      <div className="hero-container">
          <video src="/videos/video-1.mp4" autoPlay loop muted/>
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for</p>
          <div className="hero-btns">
          <Button className="btns" buttonStyle="btn--outline" buttonSize='btn--large'>GET STARTED</Button>
          {/* <Button className="btns" href="https://www.youtube.com/watch?v=-dfFEvKR5EE" buttonStyle="btn--primary" buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'></i></Button> */}
          <Link  to={{pathname:'https://www.youtube.com/watch?v=-dfFEvKR5EE'}} target="_blank" className='hero-trailer' >WATCH TRAILER <i className='far fa-play-circle'></i></Link>
          </div>
      </div>
      </>
  );
}

export default HeroSection;
