import { styled } from 'styled-components';

export const StyledElement = styled.div`
    padding: 1.3rem;
    display: flex;
    justify-content: space-between;
    gap: ${props => props.gap || 0}rem;
    background-color: ${({ theme }) => theme.colors.theme.element};
    transition: background-color .1s;
    `