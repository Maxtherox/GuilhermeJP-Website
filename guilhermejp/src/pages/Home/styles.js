import styled from "styled-components"
import backgroundImg from "../../assets/bgtech9.jpg";
import backgroundImg2 from "../../assets/bgtech6.jpg";
import * as animations from '../../styles/animations';
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

height: 100svh;
    width: 100%;
    overflow: auto;
    overflow-x: hidden;
    position: absolute;

    margin-bottom: 20px;
    padding-bottom:20px;
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
            opacity: 0.1; /* Define a opacidade do overlay */
            z-index: -2;
            filter: blur(2px);
            transform: rotate(180deg);
            transform: rotatey(180deg);
        }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${backgroundImg});
        
        //background-size: cover;
        background-position: center;
        background-repeat: repeat-x; /* Repete a imagem horizontalmente */

        mix-blend-mode: hardlight; /* Define o modo de mesclagem */
        opacity: 0.1; /* Define a opacidade do overlay */
        z-index: -1;


        filter: blur(2px);

        animation: moverFundo 20s linear infinite  ; /* Aplica a animação */

    @keyframes moverFundo {
  0% {
    background-position: 0 0; /* Posição inicial */
    opacity: 0.01;

  }
  50% {
    opacity: 0.2;

  }
  100% {
    background-position: 100% 0; /* Move a imagem para a esquerda */
    opacity: 0.01;

  }

 /* 100% {
    background-position: 0 0; 
  } */
}
    }
`

export const Main = styled.main`
    display: flex;
    gap: 7px;
    width: 100%;
    height: 100%;
    justify-content: center;
    
    animation:${animations.slideOut} .25s ease-in-out;
`

export const Content = styled.div`
    width: 63.0rem;
    height: 60rem;
    padding: 2.4rem 2.7rem;
    display: flex;
    flex-direction: column;    
    gap: 1rem;
    //border: 1px solid #f1f1f1;
    overflow-y: auto;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 12px;
    position: relative;

    
    @media (min-width: ${DEVICE_BREAKPOINTS.XX}) {
        width: 105.0rem;
        height: 60rem
    }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        width: 37rem;
        height: 60rem;
        
        h3 {
            font-size: 18px;
        }
    }
    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
        width: 100%;
height:100%;


    }
`

export const Article = styled.article`
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.171));

    
`

export const ContentBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 12px;
    overflow-y: auto;
    z-index: -1;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.15));
    
`

export const Certificates = styled.div`
    margin-left: -1.8rem;

`

export const SocialMedias = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    > a {
        color: ${({theme}) => theme.COLORS.BLACK};
        margin-top: 5px;
        font-size: 25px;
    }
`
