import { styled } from 'styled-components';

export const StyledImage = styled.img`
position: absolute;
width: 100vw;
top: 0;

&.mobileImg {
    display: none;
}

@media only screen and (max-width: 580px) {
    &.desktopImg {
        display: none;
    }

    &.mobileImg {
        display: unset;
    }
}
`;