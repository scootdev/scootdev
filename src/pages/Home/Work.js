import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import RepoCard from './RepoCard';

function Work() {
    return (
        <Paper elevation={3} style={{ padding: '30px' }}>
            <Paper elevation={5} style={{ textAlign: 'center', margin: '20px auto 40px auto', width: '60%', padding: '20px' }}>
                <Typography>Below you'll find some examples of my personal projects. If you're interested, you can click on the titles and it'll take you straight to the GitHub repository for each project. Feel free to take a look!</Typography>
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
    )
}

export default Work;