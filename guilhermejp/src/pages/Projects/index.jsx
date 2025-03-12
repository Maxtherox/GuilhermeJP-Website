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
                        <h3>Projetos atuais</h3>
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
                            <h4>[Website] - Camila Braga Marketing 👩‍💻</h4>
                            <Green>Responsivo 100%</Green>
                            <p>
                                Desenvolvi o website da Camila Braga utilizando React, Vite e Styled Components, criando uma aplicação rápida e com interface moderna e responsiva. O projeto abrange desde a estruturação da aplicação com React e Vite, até a estilização com Styled Components, garantindo uma experiência otimizada para o usuário.
                            </p>
                            <p>
                                <strong>Observação:</strong> Este projeto foi publicado com a autorização de Camila Braga.  {/* Diminui o aviso e mantem profissionalismo */}
                            </p>
                            <div>
                                <Button title="Deploy" link="https://camilabragamarketing.com" />
                                <Button title="Github" link="https://github.com/Maxtherox/camilabragamarketing.com" /> {/* Substitua pelo seu usuário */}
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
                                <Button title="Github" link="https://github.com/Maxtherox/Taekwondo-EManager" />
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
                        <br />
                        <h3>Projetos de Aprendizado Inicial (micro projetos)</h3>
                        <p>
                            Durante a fase inicial da minha jornada de aprendizado, desenvolvi estes projetos para praticar e melhorar meus fundamentos de HTML, CSS e Javascript. Se você busca projetos que demonstrem um conhecimento mais aprofundado e técnicas mais avançadas, recomendo a visualização dos projetos destacados acima. Os projetos apresentados aqui refletem meu ponto de partida no desenvolvimento web.
                        </p>
                        <Card>
                            <h4>Timer MaxTR - Primeiros Passos no Desenvolvimento Web 🚀</h4>
                            <Green>Projeto estudo de fundamentos</Green>
                            <p>
                                Este projeto foi um dos meus primeiros no desenvolvimento web, criado durante o curso "Explorer" da Rocketseat. Trata-se de um temporizador web, inspirado na técnica Pomodoro, desenvolvido com HTML, CSS e JavaScript.
                                É importante notar que este projeto reflete minhas habilidades em um estágio inicial de aprendizado. Hoje, como desenvolvedor Fullstack com Node.js e React, minhas capacidades são significativamente mais avançadas.
                            </p>
                            <div>
                                <Button title="Deploy" link="https://maxtherox.github.io/Alarme_web/" />
                                <Button title="Ver Código" link="https://github.com/Maxtherox/Alarme_web" />
                            </div>
                        </Card>
                        <Card>
  <h4>Github Favorites - Primeiros Passos no Desenvolvimento Web 🚀</h4>
  <Green>Projeto estudo de fundamentos</Green>
  <p>
    Mais um dos meus primeiros no desenvolvimento web, Ele demonstra a aplicação de JavaScript para interagir com a API do Github e exibir informações de usuários favoritos. É importante notar que este projeto reflete meu nível de habilidade da época de sua criação.
  </p>
  <div>
    <Button title="Deploy" link="https://shiny-torrone-7ed96a.netlify.app/" />
    <Button title="Github" link="https://github.com/maxtherox/Github-favorites" />
  </div>
</Card>
                    </Content>
                </Article>
            </Main>

        </Container>
    )
}
