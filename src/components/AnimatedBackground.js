import React, { useState } from 'react';
import Sketch from 'react-p5';

function AnimatedBackground() {
    const [orbs, setOrbs] = useState([
        { x: 200, y: 200, xSpeed: 1, ySpeed: 2, radius: 150 },
        { x: 400, y: 400, xSpeed: -2, ySpeed: -1, radius: 150 }
    ]);

    const setup = (p5, canvasParentRef) => {
        const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        canvas.parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background('#1e1e1e');
        p5.stroke('#E6E6FA');
        p5.strokeWeight(0.25);

        for (let i = 0; i < p5.height; i += 20) p5.line(0, i, p5.width, i);
        for (let i = 0; i < p5.width; i += 20) p5.line(i, 0, i, p5.height);

        orbs.forEach((orb, index) => {
            drawGradientOrb(p5, orb.x, orb.y, orb.radius);

            orb.x += orb.xSpeed;
            orb.y += orb.ySpeed;

            if (orb.x < 0 || orb.x > p5.width) orb.xSpeed *= -1;
            if (orb.y < 0 || orb.y > p5.height) orb.ySpeed *= -1;

            orbs[index] = orb; // Update the orb with the new position
        });
        setOrbs([...orbs]); // Update the orbs state
    };

    const drawGradientOrb = (p5, x, y, radius) => {
        const steps = 50;
        for (let i = 0; i < steps; i++) {
            const r = p5.map(i, 0, steps, radius, 0);
            const a = p5.map(i, 0, steps, 0, 255);
            p5.fill(30, 30, 30, a);
            p5.noStroke();
            p5.ellipse(x, y, r * 2);
        }
    };

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}

export default AnimatedBackground;
