import { Container, Title, Profile, Menu, Aside } from "./style";
import  guilhermeJP from "../../assets/guilhermeJP.png"
import { FiMenu,FiGlobe,FiInstagram,FiUser,FiClipboard,FiZap,FiArrowLeftCircle } from "react-icons/fi";

export function Header(){
    function openNav() {    
        document.getElementById("mySidebar").style.visibility = "visible";
        document.getElementById("mySidebar").style.animation = "menuOpen 0.5s";
        document.getElementById("mySidebar").style.width = "200px";
         }
         function closeNav() {   
             document.getElementById("mySidebar").style.visibility = "hidden";
             document.getElementById("mySidebar").style.animation = "menuClose 0.5s";
             document.getElementById("mySidebar").style.width = "200px";
         }
    return(
        <Container>
            <Profile>
                <img src={guilhermeJP} height="175px" alt="" />
            </Profile>    
           <a onClick={openNav} id="menuMobileHeader"><FiMenu /> </a>        
            <Title>
                <h1>Guilherme J. Pereira</h1>
                <h2>Fullstack Web dev.</h2>
            </Title>
            <Menu id="mySidebar">
                <Aside>
                    <a href="/"><FiUser/>Sobre</a>
                    <a href="/projects"><FiClipboard/>Projetos</a>
                    <a href="#"><FiGlobe/>Sites</a>
                    <a href="#"><FiInstagram/>Fotos</a>
                    <a href="#"><FiZap/>Hobbies</a>
                    <a onClick={closeNav} ><FiArrowLeftCircle/>Fechar</a>
                </Aside> 
            </Menu>    
        </Container>
    )
}