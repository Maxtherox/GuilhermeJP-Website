import styled from "styled-components"
import backgroundImg from "../../assets/Group2.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -2;

    overflow: hidden; /* Para ocultar o overflow do pseudo-elemento */
    
    /* Adiciona um pseudo-elemento ::before */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${backgroundImg});
        background-size: cover;
        background-position: center;
        mix-blend-mode: hardlight; /* Define o modo de mesclagem */
        opacity: 0; /* Define a opacidade do overlay */
        z-index: -1;
    }
`

export const Main = styled.main`
    display: flex;
    gap: 7px;
    width: 100%;
    height: 100%;
    justify-content: center;
   
`

export const Content = styled.div`
    width: 63.0rem;
    height: 60rem;
    padding: 2.4rem 2.7rem;
    display: flex;
    flex-direction: column;    
    gap: 1rem;
    //border: 1px solid #f1f1f1;

    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 12px;
    position: relative;
    overflow-y: auto;
    
`

export const Article = styled.article`
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.171));
`

export const ContentBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80rem;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 12px;

    z-index: -1;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.15));
`

export const Certificates = styled.div`
    margin-left: -1.8rem;
`

export const SocialMedias = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    > a {
        color: ${({theme}) => theme.COLORS.BLACK};
    }
`
