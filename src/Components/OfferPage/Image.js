import React, { useState } from 'react'

const Image = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { id: 1, src: './Image/bg.jpg' },
        { id: 2, src: './Image/bg1.jpg' },
        { id: 3, src: './Image/bg2.jpg' },
    ];

    function handleNext() {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function handlePrev() {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <div className="slider">
            <img src={images[currentIndex].src} alt="" />
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Image