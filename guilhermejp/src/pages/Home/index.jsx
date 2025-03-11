import { Container, Main, Content, Certificates, SocialMedias, ContentBackground, Article} from "./styles"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import { FiLinkedin,FiGithub,FiInstagram } from "react-icons/fi";
import { useEffect } from "react"

export function Home(){
    useEffect(() => {
            document.title = "Home | Guilherme Pereira - Desenvolvedor Full Stack";
        },);
    return(
        <Container>
            <Header/>
            <Main>
                <Sidebar/>
                <Article>
                <Content>
                    <ContentBackground />
                        <h3>Sobre mim</h3>
                        <p>Bem-vindo ao meu website! Meu nome é Guilherme Pereira, tenho 26 anos e minha intenção com este site é compartilhar um pouco sobre mim e minha carreira como desenvolvedor de software.</p>
                        <p>Academicamente, sou formado em Análise e Desenvolvimento de Sistemas, possuo o diploma de tecnólogo pela <em>Universidade Estácio de Sá</em>. Além disso, acumulei diversos certificados ao longo do período acadêmico para complementação de horas extras.</p>
                        <p>Anteriormente, trabalhei como suporte de TI em uma renomada multinacional chamada <em>AB-InBev/Ambev</em>, reconhecida como a maior cervejaria do mundo. Como suporte de TI, contribuí com diversas soluções para problemas do dia a dia, prezando pela qualidade nas entregas e também com muito dinamismo.</p>
                        <p>Também trabalhei como editor de vídeo e animador anteriormente como freelancer, o que contribuiu indiretamente para o meu conhecimento atual em design web e outros assuntos.</p>
                        <p>Atualmente estou atuando como freelancer realizando criação de websites e APIs para pequenos e médios empresários.</p>
                        <p>Alguns dos meus certificados na área de tecnologia (<em>clique no icone para mais informações</em>):</p>
                        <Certificates>
                            <a href="https://app.rocketseat.com.br/certificates/efd3cf67-adb5-4e63-8022-e4221b78ea4f" target="_blank"><img src={c1} alt="" /></a>
                            <a href="https://app.rocketseat.com.br/certificates/1eeab2d8-809c-4ad7-a89a-c31ffc14b3ff" target="_blank"><img src={c2} alt="" /></a>
                            <a href="https://app.rocketseat.com.br/certificates/3cf04357-4759-4f69-8673-b450bc3d79ce" target="_blank"><img src={c3} alt="" /></a>
                        </Certificates>
                        <p>Se sinta livre para me contatar nas minhas redes sociais abaixo:</p>
                        <p>contato@guilhermejp.com 
                            <SocialMedias>
                            <a href="https://www.linkedin.com/in/guimaxtr/" target="_blank" ><FiLinkedin/></a>
                            <a href="https://github.com/Maxtherox/" target="_blank"><FiGithub/></a>
                            <a href="https://www.instagram.com/oimaxtr/" target="_blank"><FiInstagram/></a>
                        </SocialMedias> 
                        </p>
                         
                        
                </Content>
                </Article>     
            </Main>        
        
        </Container>
    )
}
