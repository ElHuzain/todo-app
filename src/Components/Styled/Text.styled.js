import { styled } from 'styled-components';

export default styled.p`
    font-size: ${props => props.fs || 1}rem;
    font-weight: ${props => props.bold ? '700' : '400'};
    color: ${(props) => props.theme.colors.theme[props.color] || props.theme.colors.theme.text};
    text-decoration: ${props => props.decoration};
    
`;