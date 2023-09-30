import { styled } from 'styled-components';
import { StyledElement } from '../Styled/Element.styled';

export const StyledAddTodo = styled(StyledElement)`
box-shadow: ${({theme}) => theme.boxShadow};
border-radius: ${({theme}) => theme.borderRadius};

input {
    background-color: transparent;
    border: 0;
    width: 100%;
    color: ${({ theme }) => theme.colors.theme.text}
}

input:active, input:focus , input:hover{
    border: 0px;
    outline: none;
}

margin-bottom: 20px;

input::placeholder {
    color: ${({ theme }) => theme.colors.theme.brightText};
}
`;