import styled from "styled-components"
import * as animations from '../../styles/animations';
import {DEVICE_BREAKPOINTS} from "../../styles/devicesBreakpoints"

export const Container = styled.div`
    display: flex;
    width: 86.1rem;
    height: 15.7rem;
    background: ${({theme}) => theme.COLORS.BLACK};
    margin-top: 7rem;
    margin-bottom: 7px;
    border-radius: 32px 32px 12px 12px;
    z-index: 1;
    animation:${animations.slideOut} .75s cubic-bezier(0.075, 0.82, 0.165, 1);

    @media (max-width:850px) {

            height: 10.7rem;
        }
    #menuMobileHeader {
        font-size: 7.0rem;
        margin-top: 2rem;
        display: none;
        color: #fafafa;
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
    > a img {
        border-radius: 50%;
        border: 7px solid ${({theme}) => theme.COLORS.WHITE};
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
    margin-top: 110px;
    margin-bottom: 2rem;
    border-radius: 12px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    animation:${animations.slideIn} .5s ease-in-out;
    filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.25));
    transition: visibility 0.5s ;
    visibility: hidden;
    
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        width: 100%;
        height: 21.0rem;
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