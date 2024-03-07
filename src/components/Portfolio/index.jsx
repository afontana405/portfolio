import { useState } from 'react';

function Portfolio() {

    const [projects] = useState([
        {
            name: 'FlashCard App',
            description: 'MERN Stack Flash Card Application',
            link: 'https://github.com/',
            repo: 'https://github.com/'
        },
        {
            name: 'Resturant Reservation App',
            descrpiton: 'Mern Stack Reservation Application',
            link: 'https://github.com/',
            repo: 'https://github.com/'
        }
    ])
    return(
        <p>Portfolio</p>
    )
}

export default Portfolio;