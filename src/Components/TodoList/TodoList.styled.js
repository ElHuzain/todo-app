import { styled } from 'styled-components';

import { StyledElement } from '../Styled/Element.styled';

export const StyledTodoList = styled(StyledElement)`
flex-direction: column;
padding: 0;
// overflow: hidden;
box-shadow: ${({theme}) => theme.boxShadow};
border-radius: ${({theme}) => theme.borderRadius};
background-color: ${({ theme }) => theme.colors.theme.element};
transition: height .1s;
min-height: 500px;
.list {
    max-height: calc(100vh - 400px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;
    gap: 1px;
}
`