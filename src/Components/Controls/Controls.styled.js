import { styled } from 'styled-components';
import { StyledElement } from '../Styled/Element.styled';

import { StyledFlex } from '../Styled/Flex.styled';

export const StyledControls = styled(StyledElement)`
position: relative;
// background-color: red;
border-radius: ${({ theme }) => theme.borderRadius};
border-top-right-radius: 0px;
border-top-left-radius: 0px;
border-top: 1px solid ${({ theme }) => theme.colors.theme.brightElement};


@media only screen and (max-width: 500px) {
    & > ${StyledFlex} {
        background-color: ${({theme}) => theme.colors.theme.element};
        border-radius: ${({theme}) => theme.borderRadius};
        box-shadow: ${({theme}) => theme.boxShadow};
        justify-content: center;
        position: absolute;
        bottom: -70px;
        width: 100%;
        left: 0;
        padding: 1rem;
    }
}

`