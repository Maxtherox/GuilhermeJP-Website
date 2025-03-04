import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: ${({theme}) => theme.COLORS.BLACK};
    color: ${({theme}) => theme.COLORS.WHITE};

    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.4rem;

    height: 4.8rem;
    border: 0;
    padding: 1.2rem 0;

    border-radius: 5px;


    &:disabled{
        opacity: 0.5;
    }

`