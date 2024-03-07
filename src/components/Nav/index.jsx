import { Link } from 'react-router-dom'

function Nav({ currentPage }) {
    const pages = ['Portfolio', 'Contact', 'Resume'];

    return (
        <nav>
            <ul className="flex-row">
                <li
                    className={`mx- ${currentPage === '/' && 'navActive'}`}
                    key="about"
                >
                    <Link to="/">About</Link>
                </li>
                {pages.map((Page) => (
                    <li
                        className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
                        key={Page}
                    >
                    <Link to={`/${Page}`}>{Page}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;