import { useState } from "react"
import { Main, Nav } from "../../styles/Layout"





const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <Main>
            <Nav>
                <h1 className="logo">Treloo</h1>
                <div className={`nav-itens ${isMenuOpen ? "open" : ""}`}>
                    <a href="#"><li>Review</li></a>
                    <a href="#"><li>Tips</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Alert</li></a>
                    <a href="" className="btn btn-primary"><li>Blog</li></a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`bar bar1 ${isMenuOpen ? "open" : ""}`}></div>
                    <div className={`bar bar2 ${isMenuOpen ? "open" : ""}`}></div>
                    <div className={`bar bar3 ${isMenuOpen ? "open" : ""}`}></div>
                </div>
            </Nav>
            <div className="content-text">
                <h1>Discover Your Life, Travel Where You Want</h1>
                <p>Would you explore natur paradise in the world, let’s find the best destination in world with us.</p>
            </div>
        </Main>
    );
};


export default Header