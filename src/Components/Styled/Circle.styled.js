import { styled } from 'styled-components';



export const StyledCircle = styled.div`
background-color: transparent;
border-radius: 100%;
width:25px;
border: 1px solid ${({ theme }) => theme.colors.theme.brightElement};
height:25px;

display: flex;

&:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.unchecked};
}

`

export const StyledActivatedCircle = styled(StyledCircle)`

background-image: ${({ theme }) => theme.colors.primary.checked};

img {
    width: 70%;
    height: 70%;
    margin: auto;
    // object-fit: cover;
}

`