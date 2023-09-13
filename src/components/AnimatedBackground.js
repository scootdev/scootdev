import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

function AnimatedBackground() {
    const containerRef = useRef(null);
    const squareSize = 20;
    const hoverEffectRadius = 100;

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX: mouseX, clientY: mouseY } = e;

            Array.from(containerRef.current.children).forEach((child) => {
                const rect = child.getBoundingClientRect();
                const dx = rect.x + rect.width / 2 - mouseX;
                const dy = rect.y + rect.height / 2 - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                const alpha = Math.min(1, Math.max(0, (hoverEffectRadius - dist) / hoverEffectRadius));
                child.style.backgroundColor = `rgba(191, 191, 254, ${alpha})`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="grid-container" ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            {Array.from({ length: (window.innerWidth / squareSize) * (window.innerHeight / squareSize) }).map((_, i) => (
                <div className="grid-item" key={i} style={{ width: squareSize, height: squareSize, backgroundColor: '#1e1e1e' }}></div>
            ))}
        </div>
    );
}

export default AnimatedBackground;
