import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px;
list-style: none;
margin:0;
margin-top: 15px;
padding:0;
`
export const StyledNavLink = styled(NavLink)`
width: 300px;
@media screen and (min-width: 400px){
    width: calc((100% - 10px) / 2);
}
@media screen and (min-width: 600px){
    width: calc((100% - 20px) / 3);
}
@media screen and (min-width: 800px){
    width: calc((100% - 30px) / 4);
}
@media screen and (min-width: 1000px){
    width: calc((100% - 40px) / 5);
}
@media screen and (min-width: 1222px){
    width: calc((100% - 50px) / 6);
}

text-align: center;
 box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
     transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
     &:hover {
     transform: scale(1.03);
   }
   text-decoration: none;

`


export const ListItem = styled.li`



`

export const Image = styled.img`
display: block;
width: 100%;
height: 314px;
object-fit: cover;
`

export const Title = styled.h2`
margin: 5px 0;
color:black;
`

export const Text = styled.p`
margin: 0;
color: orange;
`
export const Thumb = styled.div`
width: 100%;
`