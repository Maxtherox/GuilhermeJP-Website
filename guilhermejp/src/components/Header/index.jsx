import { Container, Title, Profile } from "./style";
import  guilhermeJP from "../../assets/guilhermeJP.png"

export function Header(){
    return(
        <Container>
            <Profile>
                <img src={guilhermeJP} height="175px" alt="" />
            </Profile>            
            <Title>
                <h1>Guilherme J. Pereira</h1>
                <h2>Fullstack Web dev.</h2>
            </Title>       
        </Container>
    )
}