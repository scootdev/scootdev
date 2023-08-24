import React from 'react';
import { Typography, Button } from '@mui/material';

function Bio() {
    return (
        <>
            <Typography variant="body1" paragraph>
                With over 8 years of experience including 3 years in professional settings, I have honed my skills in a wide range of technologies including Python, JavaScript, React, CSS, HTML, SQL, MongoDB, and more. I'm proficient in both front-end and back-end development, and I'm always eager to learn and apply new technologies.
            </Typography>
            <Typography variant="body1" paragraph>
                My background includes a certification in Full Stack Web Development from the University of Arizona and a BS in Video Game Art from Full Sail University. This diverse background fuels my passion for creating kick-ass applications and solving challenging problems.
            </Typography>
            <Typography variant="body1" paragraph>
                In my current role as a full-stack developer, I've worked on numerous projects and achieved significant milestones such as launching a rebranded website, migrating all WordPress websites to WPEngine for improved performance, and creating 122 new patient payment portals. I'm particularly proud of improving website load times by over 50% and implementing innovative functions for optimal user experience.
            </Typography>
            <Typography variant="body1" paragraph>
                What really drives me in my career is the joy of learning new things and the thrill of tackling complex problems. I'm currently exploring various AI/Machine learning techniques, including object detection in videos/images, forecasting time-series data, and AI-assisted learning.
            </Typography>
            <Typography variant="body1" paragraph>
                Interested in learning more about my work or discussing potential opportunities? I'd love to hear from you.
            </Typography>
            <Button variant="contained" color="primary" href="mailto:scoootdev@gmail.com" style={{ margin: '20px 0' }}>
                Contact Me
            </Button>
        </>
    )
}

export default Bio