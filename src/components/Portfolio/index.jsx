import { useState } from 'react';
import Project from '../Project';

function Portfolio() {

    const [projects] = useState([
        {
            name: 'flashCard',
            description: 'MERN Stack Flash Card Application',
            link: 'https://flash-orama.onrender.com',
            repo: 'https://github.com/afontana405/flash-orama'
        },
        {
            name: 'resturantReservation',
            description: 'MERN Stack Reservation Application',
            link: 'https://feastfinder-29c2a8dddaa0.herokuapp.com',
            repo: 'https://github.com/alamm01/FeastFinder'
        },
        {
            name: 'ECommerceBackend',
            description: 'MySQL E-Commerce Backend Application',
            link: 'https://github.com/',
            repo: 'https://github.com/',
        }
    ])
    return(
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={"project" + idx}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;