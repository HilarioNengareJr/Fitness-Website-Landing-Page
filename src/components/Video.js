import React from 'react';
import {PlaySharp} from 'react-ionicons';
import './Video.css';

const Video = () => {
    return (
        <section className="section video" aria-label="video">
            <div className="container">

                <div className="video-card has-before has-bg-image" style={{ backgroundImage: 'url(/images/video-banner.jpg)' }}>
                    <h2 className="h2 card-title">Explore Fitness Life</h2>

                    <button className="play-btn" aria-label="play video">
                        <PlaySharp
                            color={'#ffffff'}
                            title={'Play'}
                            height="30px"
                            width="30px"
                            aria-hidden="true" 
                            role="img"
                            className="md hydrated"
                        />
                        
                    </button>

                    <a href="#" className="btn-link has-before">Watch More</a>

                </div>

            </div>
        </section>
    );
}

export default Video;