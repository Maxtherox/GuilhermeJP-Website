import { Container, Main, Content, Certificates, SocialMedias, ContentBackground, Article, Card} from "./styles"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import { FiLinkedin,FiGithub,FiInstagram } from "react-icons/fi";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button/Index"
import { useParams, useNavigate, Link } from "react-router-dom";

export function Website(){

    return(
        <Container>
            <Header/>
            <Main>
                <Sidebar/>
                <Article>
                <Content>
                    <ContentBackground />
                        <h3>Sites</h3>
                        <p>Além desse site posso ter alguns outros, estarei atualizando essa lista conforme vou lançando novos sites! caso queira ver como fiz algum site em especifico você pode conferir facilmente no meu <a href="https://github.com/Maxtherox/">github.</a></p>
                        <Card>
                            <h4>[SPA] - modpacks.com.br ⚙️</h4>
                            <p>Criei este site como parte do meu portfólio, após apenas 2 meses de estudo em desenvolvimento, para destacar meu modpack de Skyrim e direcionar interessados para o meu Patreon. Atualmente, ele me gera um lucro constante. Em breve, pretendo migrá-lo para uma plataforma online que estou desenvolvendo como uma API Restful exclusiva para assinantes.</p>                           <div>
                            <Button title="Deploy" link="https://modpacks.com.br/"/>
                            <Button title="Github" link="https://github.com/Maxtherox/maxtrMods-landingpage-SPA"/>
                           </div>        
                        </Card>
                </Content>
                </Article>     
            </Main>        
        
        </Container>
    )
}
