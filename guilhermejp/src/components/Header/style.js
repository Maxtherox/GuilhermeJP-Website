import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 86.1rem;
    height: 13.9rem;
    background: ${({theme}) => theme.COLORS.GRADIENT_HEADER};
    margin-top: 8rem;
    margin-bottom: 7px;
    border-radius: 50px 50px 0px 0px;
`
export const Profile = styled.div`
    position: relative;
    margin-top: 23px;
    margin-left: 23px;

    > img {
        border-radius: 50%;
        border: 7px solid ${({theme}) => theme.COLORS.WHITE};
        position: relative;
        z-index: 2;
    }
`
export const Title = styled.div`
    color: ${({theme}) => theme.COLORS.WHITE};
    margin: 26px 54px;
    display: flex;
    flex-direction: column;
    gap: -200px;
`