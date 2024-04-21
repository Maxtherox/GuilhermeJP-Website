import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.GRADIENT_SIDEBAR};
    width: 22.4rem;
    height: 60rem;
    margin-bottom: 2rem;
    border-radius: 12px;
   // border-top-left-radius: 0;
    //border-top-right-radius: 0;

    filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.25));
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