import { Card, Button } from 'react-bootstrap'

import {
    Routes,
    Route,
    Link,
  } from "react-router-dom";

  import React from 'react'




export const Products = () => {
   
    return (
        <div id= 'productCards'>
          <Card style={{ width: '20rem' }}>
                <Card.Img class='productImages' variant="top" src="https://images.hindustantimes.com/img/2021/09/21/550x309/6b1fc5ea-1ac1-11ec-8372-9724726ad21c_1632218050872.jpg" />
                <Card.Body>
                    <Card.Title>Bananas</Card.Title>
                    <Card.Text>
                    Best bananas money can buy!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img class='productImages' variant="top" src="https://sportschiropracticinstitute.com/wp-content/uploads/2021/09/Apples.jpg" />
                <Card.Body>
                    <Card.Title>Apples</Card.Title>
                    <Card.Text>
                    Best apples money can buy!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img class='productImages' variant="top" src="https://www.fruitrunner.co.uk/wp-content/uploads/2017/08/1499083380-1080x675.jpg" />
                <Card.Body>
                    <Card.Title>Kiwis</Card.Title>
                    <Card.Text>
                    Best kiwis money can buy!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img class='productImages' variant="top" src="https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/grapes_0.jpg?itok=uYYnmpTm" />
                <Card.Body>
                    <Card.Title>Grapes</Card.Title>
                    <Card.Text>
                    Best grapes money can buy!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img class='productImages' variant="top" src="https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg" />
                <Card.Body>
                    <Card.Title>Strawberries</Card.Title>
                    <Card.Text>
                    Best strawberries money can buy!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img class='productImages' variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Pomegranate.jpg" />
                <Card.Body>
                    <Card.Title>Pomegranates</Card.Title>
                    <Card.Text>
                    Best pomegranates money can buy!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img class='productImages' variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F02%2F01%2Foranges-airport-china-FT-BLOG0221.jpg" />
                <Card.Body>
                    <Card.Title>Oranges</Card.Title>
                    <Card.Text>
                    Best oranges money can buy!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img class='productImages' variant="top" src="https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/pineapple.jpg?itok=K2ogcmVH" />
                <Card.Body>
                    <Card.Title>Pineapple</Card.Title>
                    <Card.Text>
                    Best oranges money can buy!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img class='productImages' variant="top" src="https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/watermelon.jpg?itok=6EdNOdUo" />
                <Card.Body>
                    <Card.Title>Watermelon</Card.Title>
                    <Card.Text>
                    Best oranges money can buy!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img class='productImages' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNRd9b-yI0MZy9ztxiqrxG41e9Fg0ewWNYg&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Dragon Fruit</Card.Title>
                    <Card.Text>
                    Best oranges money can buy!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
      
    )
}


