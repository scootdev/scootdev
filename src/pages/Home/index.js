import React, { useState } from 'react';
import Hero from './Hero';
import Bio from './Bio';
import Skills from './Skills';
import RepoCard from './RepoCard'; // Import the new component
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
                <Typography variant='h2' style={{ color: '#bfbffe', margin: '10px', marginLeft: '30px' }}>My Work</Typography>
                <Paper elevation={3} style={{ padding: '30px' }}>
                    <Paper elevation={5} style={{ textAlign: 'center', margin: '20px auto 40px auto', width: '60%', padding: '20px' }}>
                        <Typography>Below you'll find some examples of my work. If you're interested, you can click on the titles and it'll take you straight to the GitHub repository for each project. Feel free to take a look!</Typography>
                    </Paper>
                    <Grid container spacing={5} style={{ padding: '30px', justifyContent: 'center' }}>
                        <Grid item>
                            <RepoCard
                                image="https://github.com/scootdev/react-employee-directory/raw/master/readme_img/overview.gif"
                                repoName="React Employee Directory"
                                repoUrl="https://github.com/scootdev/react-employee-directory"
                            />
                        </Grid>
                        <Grid item>
                            <RepoCard
                                image="https://github.com/scootdev/employee-tracker/raw/master/assets/usage.gif"
                                repoName="Employee Tracker"
                                repoUrl="https://github.com/scootdev/employee-tracker"
                            />
                        </Grid>
                        <Grid item>
                            <RepoCard
                                image="https://github.com/scootdev/burger-handlebars/raw/master/readme/usage.gif"
                                repoName="The Burger Place"
                                repoUrl="https://github.com/scootdev/burger-handlebars"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
}

export default Home;
