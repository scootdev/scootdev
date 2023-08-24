import React from 'react';
import Hero from './Hero';
import Bio from './Bio';
import CodeSnippet from '../../components/CodeSnippet';
import { Container, Paper } from '@mui/material';

function Home() {
    const codeString = `if (name == 'Scott' || 'scoot') {
        currentTitle = 'Full-Stack Web Developer'
      }`;

    return (
        <>
            <Hero></Hero>
            <Paper elevation={5}>
            <Container>
                <CodeSnippet code={codeString} language="javascript" />
                <Bio></Bio>
            </Container>
            </Paper>
        </>
    );
}

export default Home;
