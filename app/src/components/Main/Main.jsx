import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Main = () => {
  return (
    <Card sx={{ maxWidth: '740px', height: '100%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://m.mirkorma.ru/upload/medialibrary/54f/54f44f03a5853e26d592d5f893a8cd4c.jpg"
          alt="welcome"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" textAlign="center" component="div">
            Group 8 project
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Hello, please 
			{' '}
			<a href="/signin">sign in</a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default Main