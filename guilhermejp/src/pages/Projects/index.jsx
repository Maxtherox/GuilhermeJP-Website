import { Container, Main, Content, Certificates, SocialMedias, ContentBackground, Article} from "./styles"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import { FiLinkedin,FiGithub,FiInstagram } from "react-icons/fi";
import { Footer } from "../../components/Footer";

export function Projects(){
    return(
        <Container>
            <Header/>
            <Main>
                <Sidebar/>
                <Article>
                <Content>
                    <ContentBackground />
                        <h3>Sobre mim</h3>
                        <p>Se sinta livre para me contatar nas minhas redes sociais abaixo:</p>
                        <SocialMedias>
                            <a href="https://www.linkedin.com/in/guimaxtr/" target="_blank"><FiLinkedin/></a>
                            <a href="https://github.com/Maxtherox/" target="_blank"><FiGithub/></a>
                            <a href="https://www.instagram.com/oimaxtr/" target="_blank"><FiInstagram/></a>
                        </SocialMedias>  
                </Content>
                </Article>     
            </Main>        

        </Container>
    )
}
