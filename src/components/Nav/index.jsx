import { Link } from 'react-router-dom'

function Nav({ currentPage }) {
    const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav>
            <ul className="">
                {pages.map((page) => (
                    <li
                        className=""
                        key={page}
                    >
                        <Link to={`/${page}`}>{page}</Link>
                    </li>
                ))
                }
            </ul>
        </nav>
    );
}

export default Nav;