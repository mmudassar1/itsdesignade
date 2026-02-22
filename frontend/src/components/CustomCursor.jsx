import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, .hover-target')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
        />
    );
};

export default CustomCursor;
