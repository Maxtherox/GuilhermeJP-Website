import styled from "styled-components";
import * as animations from '../../styles/animations';
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
    display: flex;
`

export const Menu = styled.div`
    background: ${({theme}) => theme.COLORS.GRADIENT_SIDEBAR};
    width: 22.4rem;
    max-height: 60rem;

    border-radius: 12px;
    //border-top-left-rsssadius: 0;
    //border-top-right-radius: 0;
    animation:${animations.slideOut} .5s ease-in-out;
    filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.25));
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        height: 70rem;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
       display: none;
    }
    
`
export const MenuMobile = styled.div`
    background: ${({theme}) => theme.COLORS.GRADIENT_SIDEBAR};
    width: 22.4rem;
    height: 60rem;
    margin-bottom: 2rem;
    border-radius: 12px;
    //border-top-left-rsssadius: 0;
    //border-top-right-radius: 0;
    animation:${animations.slideOut} .5s ease-in-out;
    filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.25));
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        height: 90rem;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
       display: none;
    }
    
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