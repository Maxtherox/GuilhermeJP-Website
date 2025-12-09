import { useEffect, useRef } from "react";
import { Container, Title, Profile, Menu, Aside } from "./style";
import guilhermeJP from "../../assets/GUILHERMEJP20254.png";
import { FiMenu, FiGlobe, FiInstagram, FiUser, FiClipboard, FiZap, FiArrowLeftCircle } from "react-icons/fi";

export function Header() {
    const menuRef = useRef(null);

    function openNav() {    
        if (menuRef.current) {
            menuRef.current.style.visibility = "visible";
            menuRef.current.style.animation = "menuOpen 0.5s";
            menuRef.current.style.width = "200px";
        }
    }

    function closeNav() {   
        if (menuRef.current) {
            menuRef.current.style.visibility = "hidden";
            menuRef.current.style.animation = "menuClose 0.5s";
            menuRef.current.style.width = "200px";
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target) && event.target.id !== "menuMobileHeader") {
                closeNav();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Container>
            <Profile>
                <a href="https://www.linkedin.com/in/guimaxtr/" target="_blank">
                    <img src={guilhermeJP} height="175px" alt="" />
                </a>  
            </Profile>    
            <a onClick={openNav} id="menuMobileHeader"><FiMenu /></a>        
            <Title>
                <h1>Guilherme J. Pereira</h1>
                <h2>Fullstack Web Dev.</h2>
            </Title>
            <Menu id="mySidebar" ref={menuRef}>
                <Aside>
                    <a href="/"><FiUser/>Sobre</a>
                    <a href="/projects"><FiClipboard/>Projetos</a>
                    <a href="/website"><FiGlobe/>Sites</a>
                    {/* <a href="#"><FiInstagram/>Fotos</a> */}
                    <a href="/hobbies"><FiZap/>Hobbies</a>
                    <a onClick={closeNav}><FiArrowLeftCircle/>Fechar</a>
                </Aside> 
            </Menu>    
        </Container>
    );
}
