import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section="" style={{ backgroundImage: 'url(/images/hero-bg.png)' }}>
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <strong className="strong">The Best</strong>Fitness Club
          </p>
          <h1 className="h1 hero-title">Work Hard To Get Better A Life</h1>

          <p className="section-text">
            Embrace the challenge, transform the body, and become the best version of yourself at the gym.
          </p>

          <a href="#" className="btn btn-primary">Get Started</a>

        </div>

        <div className="hero-banner">

          <img src="/images/hero-banner.png" width="660" height="753" alt="hero banner" className="w-100" />

          <img src="/images/hero-circle-one.png" width="666" height="666" aria-hidden="true" alt="" className="circle circle-1" />
          <img src="/images/hero-circle-two.png" width="666" height="666" aria-hidden="true" alt="" className="circle circle-2" />

          <img src="/images/heart-rate.svg" width="255" height="270" alt="heart rate" className="abs-img abs-img-1" />
          <img src="/images/calories.svg" width="348" height="224" alt="calories" className="abs-img abs-img-2" />

        </div>

      </div>
    </section>
  );
}

export default Hero;