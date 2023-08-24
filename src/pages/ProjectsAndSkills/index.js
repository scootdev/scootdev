import React, { useState } from 'react';
import { Container, Button, Card, CardContent, Typography, Chip, Grid } from '@mui/material';

const skills = [
  'Python',
  'JavaScript',
  'React',
  'CSS',
  'HTML',
  'SQL',
  'Data Engineering',
];

const projects = [
  {
    title: 'Project 1',
    description: 'This is a brief description of the project.',
    skills: ['Python', 'JavaScript'],
  },
  {
    title: 'Project 2',
    description: 'This is a brief description of the project.',
    skills: ['React', 'CSS', 'HTML'],
  },
];

function ProjectsAndSkills() {
  const [selectedSkill, setSelectedSkill] = useState('');

  const handleResetFilter = () => {
    setSelectedSkill('');
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* Render "All" button */}
          <Button variant={selectedSkill === '' ? 'contained' : 'outlined'} onClick={handleResetFilter}>
            All
          </Button>
          {/* Render other skill buttons */}
          {skills.map((skill, index) => (
            <Button
              key={index}
              variant={selectedSkill === skill ? 'contained' : 'outlined'}
              onClick={() => setSelectedSkill(skill)}
            >
              {skill}
            </Button>
          ))}
        </Grid>

        {projects
          .filter((project) => !selectedSkill || project.skills.includes(selectedSkill))
          .map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  <ul>
                    {project.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>
                        <Chip label={skill} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default ProjectsAndSkills;

