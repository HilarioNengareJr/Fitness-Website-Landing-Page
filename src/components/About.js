import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="section about" id="about" aria-label="about">
            <div className="container">

                <div className="about-banner has-after">
                    <img src="/images/about-banner.png" width="660" height="648" loading="lazy" alt="about banner" className="w-100" />

                    <img src="/images/about-circle-one.png" width="660" height="534" loading="lazy" aria-hidden="true" alt="" className="circle circle-1" />
                    <img src="/images/about-circle-two.png" width="660" height="534" loading="lazy" aria-hidden="true" alt="" className="circle circle-2" />

                    <img src="/images/fitness.png" width="650" height="154" loading="lazy" alt="fitness" className="abs-img w-100" />
                </div>

                <div className="about-content">

                    <p className="section-subtitle">About Us</p>

                    <h2 className="h2 section-title">Welcome To Our Fitness Gym</h2>

                    <p className="section-text">
                        Embrace the burn, it's your body's way of telling you it's getting stronger. The journey may be tough, but the results will be worth it.
                    </p>

                    <p className="section-text">
                        Push yourself because no one else is going to do it for you. Every effort counts towards your progress
                    </p>

                    <div className="wrapper">

                        <div className="about-coach">

                            <figure className="coach-avatar">
                                <img src="/images/class-coach.jpg" width="85" loading="lazy" alt="Trainer" />
                            </figure>

                            <div>
                                <h3 className="h3 coach-name">James Doe</h3>

                                <p className="coach-title">Our Coach</p>
                            </div>

                        </div>

                        <a href="#" className="btn btn-primary">Explore More</a>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;