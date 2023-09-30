import {styled} from 'styled-components';

export const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.flex || 'row'};
    gap: ${props => props.gap}rem;
    justify-content: ${props => props.jc || 'unset'};
`