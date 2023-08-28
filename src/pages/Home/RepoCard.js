import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

function RepoCard({ image, repoName, repoUrl }) {
  return (
    <Card style={{ maxWidth: '345px', margin: '10px' }}>
      <CardActionArea href={repoUrl} target="_blank">
        <CardMedia
          component="img"
          alt={repoName}
          height="140"
          image={image}
        />
        <CardContent style={{ padding: '10px', textAlign: 'center' }}>
          <Typography gutterBottom variant="p" component="div">
            {repoName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RepoCard;
