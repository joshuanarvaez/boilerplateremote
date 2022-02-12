import * as React from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Card } from 'react-bootstrap';


export const About = () => {
  return (
    <Card className="bg-dark text-white">
  <Card.Img src="https://media-exp1.licdn.com/dms/image/C4E1BAQFpBXKjgA8H_g/company-background_10000/0/1607538567972?e=2159024400&v=beta&t=3ogw7rIJM-QKt2L8KtiIkH4MReBBHrI-RKdqoafjAmA" alt="Card image" />
  <Card.ImgOverlay>
  <h1>Our Mission</h1>
    <h3>
    To change the way people think about fruit. 
    </h3>
    <br></br>
    <h1>Our Vision</h1>
    <h3>
    To inspire and nurture the human spirit—one person, one fruit, and one neighborhood at a time.
    </h3>
  </Card.ImgOverlay>
</Card>
  );
}

