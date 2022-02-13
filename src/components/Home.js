import * as React from 'react';
import { Card } from 'react-bootstrap';

export const Home = () => {
    return (
        <div>
           <Card id="aboutContent" className="bg-dark text-white">
  <Card.Img  src="http://inquisitiveeater.com/wp-content/uploads/2016/04/pace-osu-craft-cidery.jpg" alt="Card image" />
  <Card.ImgOverlay id="aboutText">
  <h1 class ="homeH1">Welcome to Grace Shopper!</h1>
    <h3 class ="homeH3">
    Created by Jaeden Hodges, Josh Miranda and Josh Narvaez. 
    </h3>
  </Card.ImgOverlay>
</Card> 
        </div>
    )
}



