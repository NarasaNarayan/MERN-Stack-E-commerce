import React from "react";
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return <div className="hero">
    <div className="hero-left">
      <h2>NEW ARRIVALS ONLY</h2>
      <div>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={ hand_icon } alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div class="hero-latest-btn">
        <div>
          Latest collections
          <img src={ arrow } alt="" />
        </div>
      </div>
    </div>
    <div className="hero-right">
  <img src={hero_image} alt="" style={{width:'400px',height:'550px'}}/>
    </div>

  </div>;
};

export default Hero;
