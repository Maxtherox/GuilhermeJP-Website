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

export function Projects(){

    return(
        <Container>
            <Header/>
            <Main>
                <Sidebar/>
                <Article>
                <Content>
                    <ContentBackground />
                        <h3>Projetos</h3>
                        <p>Aqui vou elencar algums projetos que fiz durante essa minha trajetória no mundo do desenvolvimento, lembrando que você por ver todos clicando <a href="https://github.com/Maxtherox/">aqui.</a></p>
                        <Card>
                            <h4>[API Restful] - Aplicação para restaurantes online.</h4>
                            <p>Essa aplicação fiz durante meu curso da <a href="">Rocketseat</a> trata-se de um site onde o usuário pode realizar suas compras e um administrador pode criar editar e excluir qualquer prato, ainda necessita implementar um sistema de cobrança.</p>
                           <div>
                            <Button title="Deploy" link="https://foodexplorer-maxtr.netlify.app/"/>
                            <Button title="Github" link="https://github.com/Maxtherox/foodexplorer-react-frontend"/>
                           </div>        
                        </Card>
                        <Card>
                            <h4>[API Restful] - Aplicação para gerenciamento de notas fiscais e empresas online web.</h4>
                            <p>Este foi um projeto pessoal para testar diferentes abordagens na hora de criar uma aplicação restful, aqui o usuário pode criar editar visualizar e excluir: Clientes, empresas e produtos.</p>
                           <div>
                            <Button title="Deploy" link="https://djony-nfe.netlify.app/"/>
                            <Button title="Github" link="https://github.com/Maxtherox/backend-nfe-plataform-system"/>
                           </div>        
                        </Card>
                        <Card>
                            <h4>[API Restful] - Aplicação para anotações online.</h4>
                            <p>Essa aplicação fiz durante meu curso da <a href="">Rocketseat</a> trata-se de um site onde o usuário pode criar, editar e excluir qualquer anotação atrelado ao seu ID, pendente a implementação de algumas validações.</p>
                           <div>
                            <Button title="Deploy" link="https://rocketnotes-maxtr.netlify.app/"/>
                            <Button title="Github" link="https://github.com/Maxtherox/rocketnotes-nodejs-backend"/>
                           </div>        
                        </Card>
                </Content>
                </Article>     
            </Main>        
        
        </Container>
    )
}
