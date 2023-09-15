import React from 'react';
import './Class.css';

const Class = () => {
    return (
        <section className="section class bg-dark has-bg-image" id="class" aria-label="class" style={{ backgroundImage: 'url(/images/classes-bg.png)' }}>
            <div className="container">

                <p className="section-subtitle">Our Classes</p>

                <h2 className="h2 section-title text-center">Fitness Classes For Every Goal</h2>

                <ul className="class-list has-scrollbar">

                    <li className="scrollbar-item">
                        <div className="class-card">

                            <figure className="card-banner img-holder" style={{ '--width': 416, '--height': 240 }}>
                                <img src="/images/class-1.jpg" width="416" height="240" loading="lazy" alt="Weight Lifting" className="img-cover" />
                            </figure>

                            <div className="card-content">

                                <div className="title-wrapper">
                                    <img src="/images/class-icon-1.png" width="52" height="52" aria-hidden="true" alt="" className="title-icon" />

                                    <h3 className="h3">
                                        <a href="#" className="card-title">Weight Lifting</a>
                                    </h3>
                                </div>

                                <p className="card-text">
                                    Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
                                </p>

                                <div className="card-progress">

                                    <div className="progress-wrapper">
                                        <p className="progress-label">Class Full</p>

                                        <span className="progress-value">85%</span>
                                    </div>

                                    <div className="progress-bg">
                                        <div className="progress-bar" style={{ width: '85%' }}></div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="class-card">

                            <figure className="card-banner img-holder" style={{ '--width': 416, '--height': 240 }}>
                                <img src="/images/class-2.jpg" width="416" height="240" loading="lazy" alt="Cardio &amp; Strenght" className="img-cover" />
                            </figure>

                            <div className="card-content">

                                <div className="title-wrapper">
                                    <img src="/images/class-icon-2.png" width="52" height="52" aria-hidden="true" alt="" className="title-icon" />

                                    <h3 className="h3">
                                        <a href="#" className="card-title">Cardio &amp; Strenght</a>
                                    </h3>
                                </div>

                                <p className="card-text">
                                    Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
                                </p>

                                <div className="card-progress">

                                    <div className="progress-wrapper">
                                        <p className="progress-label">Class Full</p>

                                        <span className="progress-value">70%</span>
                                    </div>

                                    <div className="progress-bg">
                                        <div className="progress-bar" style={{ width: '70%' }}></div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="class-card">

                            <figure className="card-banner img-holder" style={{ '--width': 416, '--height': 240 }}>
                                <img src="/images/class-3.jpg" width="416" height="240" loading="lazy" alt="Power Yoga" className="img-cover" />
                            </figure>

                            <div className="card-content">

                                <div className="title-wrapper">
                                    <img src="/images/class-icon-3.png" width="52" height="52" aria-hidden="true" alt="" className="title-icon" />

                                    <h3 className="h3">
                                        <a href="#" className="card-title">Power Yoga</a>
                                    </h3>
                                </div>

                                <p className="card-text">
                                    Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
                                </p>

                                <div className="card-progress">

                                    <div className="progress-wrapper">
                                        <p className="progress-label">Class Full</p>

                                        <span className="progress-value">90%</span>
                                    </div>

                                    <div className="progress-bg">
                                        <div className="progress-bar" style={{ width: '90%' }}></div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="class-card">

                            <figure className="card-banner img-holder" style={{ '--width': 416, '--height': 240 }}>
                                <img src="/images/class-4.jpg" width="416" height="240" loading="lazy" alt="The Fitness Pack" className="img-cover" />
                            </figure>

                            <div className="card-content">
                                <div className="title-wrapper">
                                    <img src="/images/class-icon-4.png" width="52" height="52" aria-hidden="true" alt="" className="title-icon" />

                                    <h3 className="h3">
                                        <a href="#" className="card-title">The Fitness Pack</a>
                                    </h3>
                                </div>

                                <p className="card-text">
                                    Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
                                </p>

                                <div className="card-progress">

                                    <div className="progress-wrapper">
                                        <p className="progress-label">Class Full</p>

                                        <span className="progress-value">60%</span>
                                    </div>

                                    <div className="progress-bg">
                                        <div className="progress-bar" style={{ width: '60%' }}></div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
}

export default Class;
