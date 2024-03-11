import { useState } from 'react';
import Project from '../Project';

function Portfolio() {

    const [projects] = useState([
        {
            name: 'flashCard',
            description: 'MERN Stack Flash Card Application',
            link: 'https://github.com/',
            repo: 'https://github.com/'
        },
        {
            name: 'resturantReservation',
            descrpiton: 'Mern Stack Reservation Application',
            link: 'https://github.com/',
            repo: 'https://github.com/'
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