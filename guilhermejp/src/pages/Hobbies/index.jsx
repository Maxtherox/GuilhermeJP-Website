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
                        <h3>Hobbies </h3>
                        
                        <p>Uma das minhas maiores paixões é o <strong>Taekwondo</strong>. Atualmente, estou prestes a conquistar a <strong>faixa vermelha</strong>, um momento significativo na minha jornada, pois já poderei atuar como instrutor. Meu grande objetivo é alcançar a <strong>faixa preta</strong>, e o caminho até lá tem sido uma experiência transformadora. O Taekwondo me ensinou disciplina, paciência e resiliência — qualidades que aplico diariamente na programação. 💪🥋</p>

                        <p>Além dos treinos, tive a oportunidade de unir minha paixão pela tecnologia ao esporte, desenvolvendo um <strong>gerenciador e balanceador de lutas</strong> para competições. Criar uma ferramenta que auxilia eventos e organizadores dentro do Taekwondo foi extremamente gratificante e me deu insights valiosos sobre como a programação pode impactar diferentes áreas da vida. Esse projeto me fez perceber como posso contribuir para comunidades que vão além do mundo da tecnologia. 🔥</p>

                        <p>Outro hobby que me trouxe muito aprendizado foi <strong>criar e gerenciar servidores de jogos</strong>. Desde a adolescência, sempre fui fascinado por como os jogos funcionam por trás das cortinas, e isso me levou a explorar sistemas como <strong>Linux (Ubuntu Server)</strong> e <strong>FreeBSD</strong>. Aprender a configurar, otimizar e manter servidores me ensinou muito sobre redes, segurança e até mesmo automação, tornando-se um grande diferencial na minha trajetória como desenvolvedor. 🚀💻</p>

                        <p>Minha paixão por <strong>jogos</strong> vai além de apenas jogar. Gosto de entender suas mecânicas, explorar o design por trás de cada experiência e até mesmo experimentar um pouco do desenvolvimento. Sou fã de <em>RPGs e soulslikes</em>, como <em>Dark Souls</em> e <em>Elden Ring</em>, e aprecio jogos que desafiam o jogador tanto mecanicamente quanto narrativamente. 🎮</p>

                        <p>Além dos games, sou um grande entusiasta do <strong>automobilismo</strong> e dos simuladores de corrida e voo. Não apenas pela adrenalina de acelerar em uma pista virtual ou pilotar uma aeronave, mas também pelo lado técnico envolvido. Gosto de estudar como os veículos funcionam, ajustar configurações, entender física e aerodinâmica — e isso tudo me fascina tanto quanto escrever código. 🏎️✈️</p>

                        <p>No fim, todos esses hobbies se conectam de alguma forma com a tecnologia e com minha vontade constante de aprender e criar. Seja no tatame, nos servidores ou nas pistas virtuais, estou sempre buscando novos desafios e formas de aprimorar minhas habilidades. 🚀🔥</p>

                </Content>
                </Article>     
            </Main>        
        </Container>
    )
}
