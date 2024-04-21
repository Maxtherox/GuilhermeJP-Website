import { Container, Aside } from "./styles";
import {FiGlobe,FiInstagram,FiUser,FiClipboard,FiZap} from "react-icons/fi";

export function Sidebar(){
    return(
        <Container>
            <Aside>
                <a href="https://cssgradient.io/"><FiUser/>Sobre</a>
                <a href="https://cssgradient.io/"><FiClipboard/>Projetos</a>
                <a href="https://cssgradient.io/"><FiGlobe/>Sites</a>
                <a href="https://cssgradient.io/"><FiInstagram/>Fotos</a>
                <a href="https://cssgradient.io/"><FiZap/>Hobbies</a>
            </Aside>         
        </Container>
    )
}