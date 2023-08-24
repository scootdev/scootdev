import React from 'react';
import Sketch from 'react-p5';

function AnimatedBackground() {
    const waveFrequency = 0.005;
    const waveAmplitude = 10;
    const waveWidth = 20; // Adjust this value to change the width of the wave effect

    const setup = (p5, canvasParentRef) => {
        const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        canvas.parent(canvasParentRef);
    };

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };

    const draw = (p5) => {
        p5.background('#1e1e1e');
        p5.strokeWeight(0.25);

        const time = p5.millis() * 0.001;

        // Draw horizontal lines
        for (let i = 0; i < p5.height; i += 20) {
            const yOffset = p5.sin((i + time * 100) * waveFrequency) * waveAmplitude;
            const distanceToWave = Math.abs(yOffset);

            if (distanceToWave < waveWidth) {
                p5.stroke('#BFBFFE'); // Lavender color
            } else {
                p5.stroke('#1e1e1e'); // Background color
            }

            p5.line(0, i + yOffset, p5.width, i + yOffset);
        }

        // Draw vertical lines
        for (let i = 0; i < p5.width; i += 20) {
            const xOffset = p5.sin((i + time * 100) * waveFrequency) * waveAmplitude;
            const distanceToWave = Math.abs(xOffset);

            if (distanceToWave < waveWidth) {
                p5.stroke('#BFBFFE'); // Lavender color
            } else {
                p5.stroke('#1e1e1e'); // Background color
            }

            p5.line(i + xOffset, 0, i + xOffset, p5.height);
        }
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Sketch setup={setup} draw={draw} windowResized={windowResized} />
        </div>
    );
}

export default AnimatedBackground;
