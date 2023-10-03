import { styled } from 'styled-components';

export const StyledHeader = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 20px;

img {
    object-fit: contain;
    width: 40px;
    height: 40px;
    margin: auto 0;
    cursor: pointer;
    animation: spin 1s;
}

@media only screen and (max-width: 500px) {
    padding: 0 2rem;
    img {
        width: 34px;
        height: 34px;
    }
    h1, p {
        font-size: 2rem;
    }
}

`;