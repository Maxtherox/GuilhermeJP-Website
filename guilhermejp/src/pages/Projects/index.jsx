import { Container, Main, Content, Certificates, SocialMedias, ContentBackground, Article, Card, Yellow, Green, Red, Blue } from "./styles"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button/Index"
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react"

export function Projects() {

    useEffect(() => {
            document.title = "Projetos | Guilherme Pereira - Desenvolvedor Full Stack";
        },);

    return (
        <Container>
            <Header />
            <Main>
                <Sidebar />
                <Article>
                    <Content>
                        <ContentBackground />
                        <h3>Projetos</h3>
                        <p>Aqui vou elencar algums projetos que fiz durante essa minha trajetória no mundo do desenvolvimento, lembrando que você por ver todos clicando <a href="https://github.com/Maxtherox/">aqui.</a></p>
                        <Card>
                            <h4>[API Restful] - Aplicação para restaurantes online. 🍽️</h4>
                            <Green>Responsivo 100%</Green>
                            <p>Essa aplicação fiz durante meu curso da <a href="">Rocketseat</a> trata-se de um site onde o usuário pode realizar suas compras e um administrador pode criar editar e excluir qualquer prato, ainda necessita implementar um sistema de cobrança.</p>
                            <div>
                                <Button title="Deploy" link="https://foodexplorer-maxtr.netlify.app/" />
                                <Button title="Github" link="https://github.com/Maxtherox/foodexplorer-react-frontend" />
                            </div>
                        </Card>
                        <Card>
                            <h4>[API Restful] - Aplicação para gerenciamento de notas fiscais e empresas online web. 🧾</h4>
                            <Yellow>Responsividade 65%</Yellow>
                            <p>Este foi um projeto pessoal para testar diferentes abordagens na hora de criar uma aplicação restful, aqui o usuário pode criar editar visualizar e excluir: Clientes, empresas e produtos.</p>
                            <div>
                                <Button title="Deploy" link="https://nfesystem.guilhermejp.com" />
                                <Button title="Github" link="https://github.com/Maxtherox/nfe-system-2025" />
                            </div>
                        </Card>
                        <Card>
                            <h4>[E-commerce] - Maralt 🛒</h4>
                            <Blue>Em desenvolvimento (WIP)</Blue>
                            <p>
                                Maralt é uma loja virtual desenvolvida para um vendedor independente.
                                O backend foi construído com Node.js, utilizando Knex para interagir com o banco de dados.
                                A API já está funcional, com autenticação JWT e gerenciamento de carrinho de compras.
                                As integrações com Mercado Pago e Correios ainda estão em progresso, pois há a possibilidade
                                de parcerias privadas para o sistema de entregas. No frontend, feito com React e Styled Components,
                                a exibição de produtos já está implementada, e o sistema de checkout está em desenvolvimento.
                            </p>
                            <div>
                                <Button title="Deploy em breve" link="#" />
                                <Button title="Github indisponível" link="#" />
                            </div>
                        </Card>

                        <Card>
                            <h4>[API Restful] - Gerenciamento de eventos de Taekwondo 🥋</h4>
                            <Blue>Em desenvolvimento (WIP) <Red>Corrigindo problema com JWT Token no deploy... (WIP) </Red> </Blue>
                            
                            <p>
                                Esta API fornece uma solução completa para gerenciar eventos de Taekwondo,
                                incluindo cadastro de competidores, geração de chaves de lutas e
                                gerenciamento de usuários. O backend está 100% funcional, com rotas
                                para todas as operações. O frontend está em desenvolvimento, com a
                                área administrativa 85% pronta.
                            </p>
                            <div>
                                <Button title="Deploy" link="https://taekwondo.guilhermejp.com/" />
                                <Button title="Github" link="https://nfesystem.guilhermejp.com" />
                            </div>
                        </Card>
                        <Card>
                            <h4>[API Restful] - Aplicação para anotações online. 📝</h4>
                            <Red>Pendente responsividade </Red>
                            <p>Essa aplicação fiz durante meu curso da <a href="">Rocketseat</a> trata-se de um site onde o usuário pode criar, editar e excluir qualquer anotação atrelado ao seu ID, pendente a implementação de algumas validações.</p>
                            <div>
                                <Button title="Deploy" link="https://rocketnotes-maxtr.netlify.app/" />
                                <Button title="Github" link="https://github.com/Maxtherox/rocketnotes-nodejs-backend" />
                            </div>
                        </Card>
                    </Content>
                </Article>
            </Main>

        </Container>
    )
}
