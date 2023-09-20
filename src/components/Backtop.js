import React, { useState, useEffect } from 'react';
import { CaretUpSharp } from 'react-ionicons';
import './Backtop.css';

const Backtop = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsActive(true);
            }
            else {
                setIsActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a href="#top" className={isActive ? "back-top-btn active" : "back-top-btn" } aria-label="back to top" data-back-top-btn="">
            <CaretUpSharp
                color={'var(--rich-black-fogra-29-1)'}
                title={'Close'}
                height="20px"
                width="20px"
                name="close-sharp"
                aria-hidden="true"
                role="img"
                className="md hydrated"
            />
        </a>
    );
}

export default Backtop;