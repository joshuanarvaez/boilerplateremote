// import React from 'react'
// import { Card, Button } from 'react-bootstrap'



// export const Home = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

import React from 'react';

function iframe() {
    return {
        __html: '<iframe src="http://inquisitiveeater.com/wp-content/uploads/2016/04/pace-osu-craft-cidery.jpg" width="100%" height="914"></iframe>'
    }
}


export const Home = () => {
    return (
        <div>
            <div dangerouslySetInnerHTML={iframe()} />
        </div>)
}
