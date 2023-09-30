import { styled } from 'styled-components';
import { StyledElement } from '../Styled/Element.styled';

export const StyledTodo = styled(StyledElement)`
transition: opacity .2s;

&:hover {
    opacity: 0.8;
}

.cross {
    display: none;
    cursor: pointer;
    object-fit: contain;
}

.cross.visible {
    display: unset;
}

&:first-of-type{
    border-top-left-radius: ${({theme}) => theme.borderRadius};
    border-top-right-radius: ${({theme}) => theme.borderRadius};
}

@media only screen and (max-width: 500px) {
    .cross {
        display: unset;
    }
}
`