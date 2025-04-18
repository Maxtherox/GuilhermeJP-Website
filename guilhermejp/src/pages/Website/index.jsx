import { Container, Main, Content, Certificates, SocialMedias, ContentBackground, Article, Card, Yellow, Green, Red, Blue} from "./styles"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Button } from "../../components/Button/Index"
import { useEffect } from "react"

export function Website(){
    useEffect(() => {
            document.title = "Websites | Guilherme Pereira - Desenvolvedor Full Stack";
        },);
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
                            <Green>Em breve uma nova versão como Web ApiRestful</Green>
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
