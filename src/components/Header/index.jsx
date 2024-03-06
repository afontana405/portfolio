import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

    return (
        <header className="">
            <h1>Fontana</h1>
            <img src={coverImage} alt="header background"></img>
            {props.children}
        </header>
    );
}

export default Header;