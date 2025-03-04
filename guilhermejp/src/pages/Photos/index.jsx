import { Container, Main, Content, Certificates, SocialMedias, ContentBackground, Article} from "./styles"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import { FiLinkedin,FiGithub,FiInstagram } from "react-icons/fi";
import { Footer } from "../../components/Footer";

export function Photos(){
    return(
        <Container>
            <Header/>
            <Main>
                <Sidebar/>
                <Article>
                <Content>
                    <ContentBackground />
                        <h3>Error</h3>
                        <p>A página solicitada está em contrução! volte mais tarde.</p>
                </Content>
                </Article>     
            </Main>        
        
        </Container>
    )
}
