import styled from "styled-components"
import * as animations from '../../styles/animations';
import {DEVICE_BREAKPOINTS} from "../../styles/devicesBreakpoints"

export const Container = styled.div`
    display: flex;
    width: 86.1rem;
    height: 13.9rem;
    background: ${({theme}) => theme.COLORS.GRADIENT_HEADER};
    margin-top: 8rem;
    margin-bottom: 7px;
    border-radius: 50px 50px 0px 0px;
    z-index: 1;
    animation:${animations.topToBottom} .5s ease-in-out;

    #menuMobileHeader {
        font-size: 7.0rem;
        margin-top: 2rem;
        display: none;

        @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
            display: flex;
        }
        @media (max-width:450px) {
            font-size: 53px;
        }
    }

    @media (min-width:${DEVICE_BREAKPOINTS.XX}) {
        width: 128.0rem;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        width: 60.0rem;
        margin-top: 4rem;
        h1 {
            font-size: 30px;
        }
        h2 {
            font-size: 20px;
        }
    }
    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
       width: 100%;
       border-radius: 0;
       margin-top: 0;
    }
    @media (max-width:450px) {

    h1 {
        font-size: 23px;
    }
    h2 {
        font-size: 16px;
    }
    }
    @media (max-width:${DEVICE_BREAKPOINTS.XS}) {

        h1 {
            font-size: 20px;
        }
        h2 {
            font-size: 16px;
        }
    }
`
export const Profile = styled.div`
    position: relative;
    margin-top: 2.3rem;
    margin-left: 2.3rem;
    z-index: 3;
    > img {
        border-radius: 50%;
        border: 7px solid ${({theme}) => theme.COLORS.WHITE};
        position: relative;        
     @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
       display: none;
    }
    }
   
`
export const Title = styled.div`
    color: ${({theme}) => theme.COLORS.WHITE};
    margin: 2.6rem 5.4rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        margin-left: 2.0rem;
        margin-top: 2rem;
    }
`

export const Menu = styled.div`
    background: ${({theme}) => theme.COLORS.GRADIENT_SIDEBAR};
    width: 22.4rem;
    height: 60rem;
    margin-bottom: 2rem;
    border-radius: 12px;
    //border-top-left-rsssadius: 0;
    //border-top-right-radius: 0;
    animation:${animations.slideIn} .5s ease-in-out;
    filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.25));
    transition: visibility 0.5s ;
    visibility: hidden;
    
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        width: 50px;
        height: 250px;
        position: absolute;
        z-index: 5;
        > aside {
            margin-top: 2rem;
        }
        visibility: hidden;
    }
    @media (min-width:${DEVICE_BREAKPOINTS.SM}) {
        display: none;
    }
    @keyframes menuOpen {
        0% {
            transform: translateX(-100%);

        }

        100%{
            transform: translateX(0);

        }
    };

    @keyframes menuClose {
        0% {
            transform: translateX(0);

        }
        
        100%{
            transform: translateX(-100%);

        }
    };
    
`
export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 9px;

    margin-top: 8rem;
    margin-left: 4.8rem ;

    > a  {
        display: flex;
        align-items: center;
        gap: 7px;
        color: ${({theme}) => theme.COLORS.WHITE};
        cursor: pointer;
    }
`