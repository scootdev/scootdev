import React, { useState } from 'react';
import Hero from './Hero';
import Bio from './Bio';
import Skills from './Skills';
import Work from './Work';
import CodeSnippet from '../../components/CodeSnippet';
import { Container, Paper, Grid, Typography } from '@mui/material';
import AnimatedBackground from '../../components/AnimatedBackground';

function TestWindow({ title }) {
    return <div style={{ padding: '5px' }}>This is {title} window.</div>;
}

function Home() {
    const codeString = `if (name == 'Scott' || 'scoot') {
    currentTitle = 'Full-Stack Web Developer'
  }`;

    const [activeWindow, setActiveWindow] = useState(null); // Add active window state

    return (
        <div style={{ margin: 0 }}>
            <AnimatedBackground />
            <div style={{ padding: '0' }}>
                <Hero />
                <Paper elevation={2}>
                    <Container style={{ padding: '20px' }}>
                        <Paper elevation={6} style={{ margin: '20px auto', width: '400px', overflow: 'hidden', padding: '5px' }}>
                            <CodeSnippet code={codeString} language="javascript" />
                        </Paper>
                        <Bio />
                    </Container>
                </Paper>
                <Skills />
                <Work />
            </div>
        </div>
    );
}

export default Home;
