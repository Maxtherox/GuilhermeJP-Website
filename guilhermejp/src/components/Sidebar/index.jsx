import { Container, Aside, Menu, MenuMobile } from "./styles";
import {FiGlobe,FiInstagram,FiUser,FiClipboard,FiZap} from "react-icons/fi";

export function Sidebar(){
    return(
        <Container>
            <Menu>
                <Aside>
                    <a href="/"><FiUser/>Sobre</a>
                    <a href="/projects"><FiClipboard/>Projetos</a>
                    <a href="https://cssgradient.io/"><FiGlobe/>Sites</a>
                    <a href="https://cssgradient.io/"><FiInstagram/>Fotos</a>
                    <a href="https://cssgradient.io/"><FiZap/>Hobbies</a>
                </Aside> 
            </Menu>    
        </Container>
    )
}