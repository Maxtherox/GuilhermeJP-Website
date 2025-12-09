import styled from "styled-components"
import backgroundImg from "../../assets/bgtech9.jpg";
import * as animations from '../../styles/animations';
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100%;
    width: 100%;
    &::after {
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
        opacity: 0.05; /* Define a opacidade do overlay */
        z-index: -2;
        transform: rotate(180deg);
    }
    position: absolute;
    overflow: hidden;
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
        opacity:0.08; /* Define a opacidade do overlay */
        z-index: -1;
       //filter: blur(1px);

    }
`

export const Yellow = styled.span`
color: #ff9100;
font-weight: bold;
font-size: 14px;
margin: -2rem 0  -1rem; 
`
export const Blue = styled.span`
color: #008cff;
font-weight: bold;
font-size: 14px;
margin: -2rem 0  -1rem; 
`
export const Red = styled.span`
color: red;
font-weight: bold;
font-size: 14px;
margin: -2rem 0  -1rem; 
`
export const Green = styled.span`
color: green;
font-weight: bold;
font-size: 14px;
margin: -2rem 0  -1rem; 
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
       height: 100%;
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
    gap: 1rem;
    > a {
        color: ${({theme}) => theme.COLORS.BLACK};
    }
`
export const Card = styled.div`
    margin-top: 1rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;

    background: #ffffff;
    filter: drop-shadow(-5px 5px 0px #272727);
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    a {
        font-weight: 600;

    }

    button {
        width: 15rem;
        margin-right: 2rem;
        
        @media (max-width: 850px) {
            width: 140px;
            margin: 5px;

        }
        @media (max-width: 37px) {
            width: 80px;


        }
    }
`