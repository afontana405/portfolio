import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

    return (
        <header className="flex-row space-between px-1">
            <h1>Fontana</h1>
            <img src={coverImage} alt="header background"></img>
            {props.children}
        </header>
    );
}

export default Header;