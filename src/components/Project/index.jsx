import { removeHyphensAndCapitalize } from '../../utils/helper';

function Project({ project }) {
    const { name, description, link, repo } = project;

    return (
        <div classname='project' key={name}>
            <div className="project-text">
                <h3>
                    <a href={link}>{removeHyphensAndCapitalize(name)}</a>
                    &nbsp;
                    <a href={repo}>
                        <i className="fab fa-github" />
                    </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Project;