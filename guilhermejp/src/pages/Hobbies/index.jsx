import { Container, Main, Content, Certificates, SocialMedias, ContentBackground, Article} from "./styles"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import { FiLinkedin,FiGithub,FiInstagram } from "react-icons/fi";
import { Footer } from "../../components/Footer";

export function Hobbies(){
    return(
        <Container>
            <Header/>
            <Main>
                <Sidebar/>
                <Article>
                <Content>
                    <ContentBackground />
                        <h3>Hobbies</h3>
                            <p>Tenho uma variedade de <strong>hobbies</strong> que me mantêm ocupado e inspirado. Entre eles, destaco minha paixão por <strong>jogos</strong>, tanto jogando quanto desenvolvendo. Gosto de ficar imerso em RPGs e souls like, como <em>Dark Souls</em> e <em>Elden Ring</em>, explorando mundos e desafios. Além disso, gosto de me aventurar na edição de vídeos nas horas vagas, embora minha experiência nessa área ainda seja limitada. Estou em constante aprimoramento, especialmente no desenvolvimento de jogos, e já planejo iniciar meu próprio projeto no próximo ano, mantendo-o em segredo por enquanto. 🎮</p>

                            <p>Além disso, encontro prazer em outras atividades que estimulam minha mente e criatividade. Sou um ávido leitor de <em>Berserk</em>, um mangá que me cativa profundamente. Mesmo não sendo talentoso musicalmente, <strong>estudo sobre música</strong> em meu tempo livre, explorando suas nuances e histórias fascinantes. Tenho uma forte paixão por história, dedicando parte do meu tempo livre para absorver conhecimentos sobre diferentes épocas e culturas. 📚</p>

                            <p>Relembrar é uma parte importante dos meus hobbies, e o <strong>taekwondo</strong> é uma prática que desejo retomar. Apesar de ter deixado de lado quando me tornei adulto, esse esporte foi meu principal hobby na adolescência e início da juventude, e sinto falta da adrenalina e da sensação de realização que ele proporcionava. 🥋</p>

                            <p>Por fim, minha fascinação por jogos vai além de apenas jogar e desenvolver. <strong>Criar servidores de jogos</strong> é um hobby que me desafia a aprender novas linguagens de programação, como <strong>C++</strong>, já que cada jogo possui seu próprio código fonte em uma linguagem específica. Essa constante busca por conhecimento e habilidade me motiva a continuar explorando e expandindo meus horizontes no universo dos jogos. 🖥️</p>
                </Content>
                </Article>     
            </Main>        
        
        </Container>
    )
}
