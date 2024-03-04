import coverImage from '../../assets/cover/cover-image.jpg';

function Header() {

    return (
        <header className="">
            <h1>Fontana</h1>
            <img src={coverImage} alt=""></img>
        </header>
    );
}

export default Header;