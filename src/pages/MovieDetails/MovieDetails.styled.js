import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
border: none;
font-size: 18px;
display: flex;
padding-left: 20px;
padding-right: 20px;
justify-content: space-between;
align-items: center;
background-color: black;
color: orange;
text-decoration: none;
border-radius: 10px;
width: 120px;
height: 40px;
margin-bottom: 10px;
transition: all 300ms linear;
&:hover,
:focus {
background-color: orange;
color: black;
}
svg {
    color: orange;
    transition: all 400ms linear;
}
&:hover svg{
    color: black;
}
`
export const StyledNavLink = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
border: 2px solid orange;
width: 100px;
height: 35px;
background-color: black;
color: orange;
border-radius: 15px;
outline: none;
text-decoration: none;
transition: all 300ms linear;

&:hover,
:focus {
    background-color: orange;
    border-color: black;
    color: black
}
`

export const Title = styled.h2`
color: orange;
font-family: Robato;
`
export const Container = styled.div`
padding:20px;
`
export const List = styled.ul`
list-style: none;
display: flex;
gap: 30px;
margin: 0;
padding: 0;
`

export const ListItem = styled.li`
// display: flex;
// justify-content: center;
// align-items: center;
// border: 1px solid orange;
// width: 100px;
// height: 35px;
// background-color: black;
// color: orange;
// border-radius: 15px;
// outline: none;
// transition: all 300ms linear;

// &:hover,
// :focus {
//     background-color: orange;
//     border-color: black;
// }

// &:hover a,
// :focus a {
//     color: black;
// }
`