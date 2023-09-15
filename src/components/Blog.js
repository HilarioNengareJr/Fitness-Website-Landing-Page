import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <section className="section blog" id="blog" aria-label="blog">
            <div className="container">

                <p className="section-subtitle">Our News</p>

                <h2 className="h2 section-title text-center">Latest Blog Feed</h2>

                <ul className="blog-list has-scrollbar">

                    <li className="scrollbar-item">
                        <div className="blog-card">

                            <div className="card-banner img-holder" style={{ '--width': 440, '--height': 270 }}>
                                <img src="/images/blog-1.jpg" width="440" height="270" loading="lazy" alt="Going to the gym for the first time" className="img-cover" />

                                <time className="card-meta" dateTime="2022-07-07">7 July 2022</time>
                            </div>

                            <div className="card-content">

                                <h3 className="h3">
                                    <a href="#" className="card-title">Going to the gym for the first time</a>
                                </h3>

                                <p className="card-text">
                                    Embarking on the fitness journey for the very first time can be both exhilarating and daunting. 
                                    It's a step towards a healthier, stronger you.
                                </p>

                                <a href="#" className="btn-link has-before">Read More</a>

                            </div>

                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="blog-card">

                            <div className="card-banner img-holder" style={{ '--width': 440, '--height': 270 }}>
                                <img src="/images/blog-2.jpg" width="440" height="270" loading="lazy" alt="Parturient accumsan cacus pulvinar magna" className="img-cover" />

                                <time className="card-meta" dateTime="2022-07-07">7 July 2022</time>
                            </div>

                            <div className="card-content">

                                <h3 className="h3">
                                    <a href="#" className="card-title">Parturient accumsan cacus pulvinar magna</a>
                                </h3>

                                <p className="card-text">
                                    Sometimes, taking the first step is the most challenging part. 
                                    Embrace the journey and discover the incredible benefits of regular exercise.
                                </p>

                                <a href="#" className="btn-link has-before">Read More</a>

                            </div>

                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="blog-card">

                            <div className="card-banner img-holder" style={{ '--width': 440, '--height': 270 }}>
                                <img src="/images/blog-3.jpg" width="440" height="270" loading="lazy" alt="Risus purus namien parturient accumsan cacus" className="img-cover" />

                                <time className="card-meta" dateTime="2022-07-07">7 July 2022</time>
                            </div>

                            <div className="card-content">

                                <h3 className="h3">
                                    <a href="#" className="card-title">Risus purus namien parturient accumsan cacus</a>
                                </h3>

                                <p className="card-text">
                                    The path to a healthier lifestyle is filled with small victories and moments of self-discovery. 
                                    Embrace the journey and become the best version of yourself.
                                </p>

                                <a href="#" className="btn-link has-before">Read More</a>

                            </div>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
}

export default Blog;
