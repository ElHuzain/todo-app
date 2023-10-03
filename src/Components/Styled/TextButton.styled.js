import { styled } from 'styled-components';

export default styled.button`
    font-size: ${props => props.fs || 1}rem;
    font-weight: ${props => props.bold ? '700' : '400'};

    color: ${(props) => props.theme.colors.theme[props.color] || props.theme.colors.theme.text};

    cursor: pointer;
    text-decoration: ${props => props.decoration};
    margin: auto 0;
    
    width: fit-content;

    background-color: transparent;
    border: none;

    transition: all 0.1s ease-in-out;
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    ${props => props.stateful && `
    &:hover:not(:disabled, :active) {
        scale: 1.1;
    }
    &:active {
        scale: 0.9;
    }
    `}
    
`;