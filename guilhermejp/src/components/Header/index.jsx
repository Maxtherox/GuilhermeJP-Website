import { Container, Title, Profile, Menu, Aside } from "./style";
import  guilhermeJP from "../../assets/GUILHERMEJP20254.png"
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
              <a href="https://www.linkedin.com/in/guimaxtr/" target="_blank"><img src={guilhermeJP} height="175px" alt="" /></a>  
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
                    <a href="/website"><FiGlobe/>Sites</a>
                {/*
                    <a href="#"><FiInstagram/>Fotos</a>
                    */}
                    <a href="/hobbies"><FiZap/>Hobbies</a>
                    <a onClick={closeNav} ><FiArrowLeftCircle/>Fechar</a>
                </Aside> 
            </Menu>    
        </Container>
    )
}