import React from 'react';
import heroImg from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            ote bag asymmetrical selvage heirloom praxis marxism etsy bicycle
            rights meh health goth retro irony skateboard pour-over master
            cleanse. Lumbersexual +1 literally kale chips tacos keffiyeh
            gluten-free bushwick tilde gentrify. Selvage tumeric ugh chartreuse
            raw denim 90's gorpcore. Tonx adaptogen knausgaard artisan cardigan
            truffaut blackbird spyplane, craft beer waistcoat palo santo
            mixtape.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
