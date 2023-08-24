import React, { useRef } from 'react';
import AnimatedBackground from '../../components/AnimatedBackground';
import { Typography, Container, Grid, Paper, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description'; // Represents resume

function Hero() {
    const containerRef = useRef(); // Define containerRef here

    return (
        <div ref={containerRef} style={{ margin: 0}}>
                <AnimatedBackground containerRef={containerRef} />
                <div style={{ padding: '0' }}>
                    <Container style={{ padding: '40px' }}>
                        <Grid container spacing={3} style={{ marginTop: '-10px' }} justifyContent="center">
                            <Grid item xs={12} sm={6} md={5} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ position: 'absolute', width: '125px', height: '250px', left: '15%', top: '12.5%' }}>
                                    <IconButton href="https://www.linkedin.com/in/scottharris-az/" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '0%', left: '25%' }}><LinkedInIcon /></IconButton>
                                    <IconButton href="https://github.com/scottsharris-az" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '25%', left: '5%' }}><GitHubIcon /></IconButton>
                                    <IconButton href="https://twitter.com/scoot__o7" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '50%', left: '5%' }}><TwitterIcon /></IconButton>
                                    <IconButton href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', bottom: '10%', left: '25%' }}><DescriptionIcon /></IconButton>
                                </div>
                                <img src="/scoot.jpg" alt="A dashing photo of Scoot" style={{ width: '250px', borderRadius: '50%' }} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={5}>
                                <Typography variant="h2">
                                    Welcome to <span style={{ color: '#bfbffe' }}>Scoot<span style={{ fontWeight: 'bold' }}>Dev</span></span>
                                </Typography>
                                <Typography variant="body1">
                                    I'm Scott, a Full-Stack Web Developer based in Arizona. Known as <span style={{ color: '#bfbffe' }}>scoot</span> among friends and online, I bring my expertise in front-end and back-end development to create robust and innovative web solutions.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
        </div>
    );
}

export default Hero;
